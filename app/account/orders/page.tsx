import Link from 'next/link';
import { redirect } from 'next/navigation';
import Stripe from 'stripe';
import { Package } from 'lucide-react';
import { auth, currentUser } from '@clerk/nextjs/server';
import Header from '../../../components/Header';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Statuses we treat as a real "transaction" worth showing.
const VISIBLE_STATUSES = new Set<Stripe.PaymentIntent.Status>([
  'succeeded',
  'processing',
  'requires_capture',
]);

function formatAmount(amount: number, currency: string) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}

function formatDate(unixSeconds: number) {
  return new Date(unixSeconds * 1000).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

const STATUS_LABEL: Partial<Record<Stripe.PaymentIntent.Status, string>> = {
  succeeded: 'Paid',
  processing: 'Processing',
  requires_capture: 'Pending',
};

export default async function OrdersPage() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in?redirect_url=/account/orders');

  const user = await currentUser();
  const customerId = user?.privateMetadata?.stripeCustomerId;

  // Collect this user's payments from two sources and de-dupe:
  //  - search by the clerkUserId metadata we stamp on every intent (robust even
  //    if the Stripe customer link is missing or was duplicated)
  //  - list by the cached Stripe customer id (covers intents too fresh for the
  //    search index, which lags ~1 min)
  const byId = new Map<string, Stripe.PaymentIntent>();

  try {
    const search = await stripe.paymentIntents.search({
      query: `metadata['clerkUserId']:'${userId}'`,
      limit: 100,
    });
    for (const p of search.data) byId.set(p.id, p);
  } catch {
    // search index may not be available immediately for brand-new accounts
  }

  if (typeof customerId === 'string' && customerId) {
    const res = await stripe.paymentIntents.list({ customer: customerId, limit: 100 });
    for (const p of res.data) byId.set(p.id, p);
  }

  const payments = [...byId.values()]
    .filter((p) => VISIBLE_STATUSES.has(p.status))
    .sort((a, b) => b.created - a.created);

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight mb-2">
          Transaction <em className="italic font-light">History</em>
        </h1>
        <p className="text-stone-500 font-light mb-10">
          A record of every purchase on this account.
        </p>

        {payments.length === 0 ? (
          <div className="bg-white border border-stone-200/60 p-12 text-center">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-7 h-7 text-stone-500" />
            </div>
            <h2 className="text-xl font-light text-stone-900 mb-2">No transactions yet</h2>
            <p className="text-stone-500 font-light mb-8">
              When you place an order it will show up here.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-stone-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-stone-800 transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <ul className="space-y-4">
            {payments.map((p) => (
              <li
                key={p.id}
                className="bg-white border border-stone-200/60 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <div className="min-w-0">
                  <p className="text-stone-900 font-light">
                    {typeof p.metadata?.items === 'string' && p.metadata.items
                      ? p.metadata.items
                      : 'Order'}
                  </p>
                  <p className="text-sm text-stone-500 font-light mt-1">
                    {formatDate(p.created)} &middot; Ref {p.id.replace('pi_', '').slice(0, 12)}
                  </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span
                    className={`text-xs uppercase tracking-wide px-2.5 py-1 rounded-full ${
                      p.status === 'succeeded'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {STATUS_LABEL[p.status] ?? p.status}
                  </span>
                  <span className="text-stone-900 font-light tabular-nums">
                    {formatAmount(p.amount, p.currency)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
