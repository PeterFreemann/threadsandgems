import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { auth, currentUser, clerkClient } from '@clerk/nextjs/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type IncomingItem = { name?: string; quantity?: number; price?: string };

/**
 * Ensure the signed-in Clerk user has exactly one matching Stripe Customer, so
 * their payments can be listed back to them on the account page.
 *
 * Lookup order:
 *   1. cached id on Clerk privateMetadata.stripeCustomerId
 *   2. existing Stripe customer tagged with this clerkUserId (handles races /
 *      metadata that was never written)
 *   3. create a new one (idempotency-keyed on the user id so two concurrent
 *      checkout requests can't create duplicates)
 */
async function getStripeCustomerId(userId: string): Promise<string | undefined> {
  const user = await currentUser();
  if (!user) return undefined;

  const cached = user.privateMetadata?.stripeCustomerId;
  if (typeof cached === 'string' && cached) return cached;

  const found = await stripe.customers.search({
    query: `metadata['clerkUserId']:'${userId}'`,
    limit: 1,
  });

  let customerId = found.data[0]?.id;

  if (!customerId) {
    const customer = await stripe.customers.create(
      {
        email: user.primaryEmailAddress?.emailAddress,
        name: [user.firstName, user.lastName].filter(Boolean).join(' ') || undefined,
        metadata: { clerkUserId: userId },
      },
      { idempotencyKey: `customer_${userId}` },
    );
    customerId = customer.id;
  }

  const client = await clerkClient();
  await client.users.updateUserMetadata(userId, {
    privateMetadata: { stripeCustomerId: customerId },
  });

  return customerId;
}

function summariseItems(items: IncomingItem[]): string {
  const summary = items
    .filter((i) => i && i.name)
    .map((i) => `${i.name}${i.quantity && i.quantity > 1 ? ` x${i.quantity}` : ''}`)
    .join(', ');
  // Stripe metadata values are capped at 500 characters.
  return summary.length > 500 ? `${summary.slice(0, 497)}...` : summary;
}

export async function POST(req: NextRequest) {
  try {
    const { amount, items } = await req.json(); // amount in pence, e.g. 4999 = £49.99

    if (!amount || typeof amount !== 'number' || amount < 1) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    const { userId } = await auth();

    const customerId = userId ? await getStripeCustomerId(userId) : undefined;

    const metadata: Record<string, string> = {
      clerkUserId: userId ?? 'guest',
    };
    if (Array.isArray(items) && items.length > 0) {
      const itemsSummary = summariseItems(items as IncomingItem[]);
      if (itemsSummary) metadata.items = itemsSummary;
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'gbp',
      automatic_payment_methods: { enabled: true },
      ...(customerId ? { customer: customerId } : {}),
      metadata,
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('Stripe payment intent error:', err);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
