'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CreditCard, Truck, Shield, CheckCircle, Loader2 } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useCart } from '../context/CartContext';
import Header from '../components/CartHeader';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// ---------------------------------------------------------------------------
// Inner form: rendered only once we have a clientSecret and are inside <Elements>
// ---------------------------------------------------------------------------

interface ContactShippingData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

const CheckoutForm = ({
  contactData,
  setContactData,
}: {
  contactData: ContactShippingData;
  setContactData: React.Dispatch<React.SetStateAction<ContactShippingData>>;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { state, dispatch } = useCart();

  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-confirmed`,
        receipt_email: contactData.email,
        payment_method_data: {
          billing_details: {
            name: `${contactData.firstName} ${contactData.lastName}`,
            email: contactData.email,
            address: {
              line1: contactData.address,
              city: contactData.city,
              postal_code: contactData.postalCode,
              country: contactData.country,
            },
          },
        },
      },
      redirect: 'if_required',
    });

    if (error) {
      setErrorMessage(error.message ?? 'Something went wrong with your payment. Please try again.');
      setIsProcessing(false);
      return;
    }

    if (paymentIntent && paymentIntent.status === 'succeeded') {
      dispatch({ type: 'CLEAR_CART' });
      router.push('/order-confirmed');
    } else {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Checkout Form */}
          <div className="lg:col-span-3 space-y-8 lg:space-y-12">
            {/* Contact Information */}
            <div className="bg-white rounded-none shadow-sm border border-stone-200/50 p-6 lg:p-8">
              <div className="flex items-center space-x-3 mb-6 lg:mb-8">
                <div className="w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <h2 className="text-xl lg:text-2xl font-light text-stone-900 tracking-wide">Contact Information</h2>
              </div>
              <div className="space-y-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={contactData.email}
                  onChange={handleInputChange}
                  className="w-full px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                  required
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-none shadow-sm border border-stone-200/50 p-6 lg:p-8">
              <div className="flex items-center space-x-3 mb-6 lg:mb-8">
                <div className="w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <h2 className="text-xl lg:text-2xl font-light text-stone-900 tracking-wide">Shipping Address</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={contactData.firstName}
                  onChange={handleInputChange}
                  className="px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={contactData.lastName}
                  onChange={handleInputChange}
                  className="px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={contactData.address}
                  onChange={handleInputChange}
                  className="md:col-span-2 px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={contactData.city}
                  onChange={handleInputChange}
                  className="px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                  required
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal code"
                  value={contactData.postalCode}
                  onChange={handleInputChange}
                  className="px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                  required
                />
                <select
                  name="country"
                  value={contactData.country}
                  onChange={handleInputChange}
                  className="md:col-span-2 px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 font-light"
                >
                  <option value="GB">United Kingdom</option>
                  <option value="IE">Ireland</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            {/* Payment Information — Stripe Elements */}
            <div className="bg-white rounded-none shadow-sm border border-stone-200/50 p-6 lg:p-8">
              <div className="flex items-center space-x-3 mb-6 lg:mb-8">
                <div className="w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <h2 className="text-xl lg:text-2xl font-light text-stone-900 tracking-wide">Payment Information</h2>
              </div>

              {/* Stripe's PaymentElement renders card fields (and other methods)
                  inside a secure iframe — card data never touches our state or server. */}
              <PaymentElement
                options={{
                  layout: 'tabs',
                }}
              />

              {errorMessage && (
                <p className="mt-4 text-sm text-red-600 font-light">{errorMessage}</p>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-none shadow-sm border border-stone-200/50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-light text-stone-900 mb-6 lg:mb-8 tracking-wide">Order Summary</h2>

              <div className="space-y-6 mb-6 lg:mb-8">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 pb-6 border-b border-stone-100 last:border-b-0 last:pb-0">
                    <div className="w-16 h-20 bg-stone-100 rounded-none overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-light text-stone-900 tracking-wide">{item.name}</h3>
                      <p className="text-stone-500 text-sm font-light">Quantity: {item.quantity}</p>
                    </div>
                    <span className="text-stone-900 font-light tracking-wide whitespace-nowrap">
                      £{(parseFloat(item.price.replace('£', '')) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-stone-200 pt-6">
                <div className="flex justify-between text-stone-600 font-light">
                  <span>Subtotal</span>
                  <span>£{state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-600 font-light">
                  <span>Shipping</span>
                  <span>Complimentary</span>
                </div>
                <div className="flex justify-between text-stone-600 font-light">
                  <span>Tax</span>
                  <span>£{(state.total * 0.2).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-light border-t border-stone-200 pt-4">
                  <span className="text-stone-900">Total</span>
                  <span className="text-stone-900">£{(state.total * 1.2).toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-white rounded-none shadow-sm border border-stone-200/50 p-6 lg:p-8">
              <div className="grid grid-cols-3 gap-4 lg:gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-stone-100 to-amber-100 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-stone-600" />
                  </div>
                  <p className="text-xs lg:text-sm text-stone-600 font-light">Secure Payment</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center mx-auto">
                    <Truck className="w-4 h-4 lg:w-5 lg:h-5 text-stone-600" />
                  </div>
                  <p className="text-xs lg:text-sm text-stone-600 font-light">Free Shipping</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-stone-100 to-amber-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-stone-600" />
                  </div>
                  <p className="text-xs lg:text-sm text-stone-600 font-light">Satisfaction Guaranteed</p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!stripe || isProcessing}
              className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white py-4 rounded-none font-medium hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 tracking-wide uppercase"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>Complete Order</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

// ---------------------------------------------------------------------------
// Outer component: fetches the PaymentIntent client secret, then mounts
// <Elements> once it's ready. Also owns the header / empty-cart states.
// ---------------------------------------------------------------------------

const Checkout = () => {
  const { state } = useCart();

  const [contactData, setContactData] = useState<ContactShippingData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'GB',
  });

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  const totalInPence = Math.round(state.total * 1.2 * 100);

  useEffect(() => {
    if (state.items.length === 0) return;

    const createIntent = async () => {
      try {
        const res = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount: totalInPence }),
        });

        if (!res.ok) {
          throw new Error('Failed to initialize payment');
        }

        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        setLoadError('We couldn\'t set up payment right now. Please refresh and try again.');
      }
    };

    createIntent();
    // Only re-create the intent if the total changes meaningfully (e.g. cart edited).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalInPence, state.items.length]);

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50">
        <Header />
        <div className="flex items-center justify-center pt-32 px-6 mt-10">
          <div className="max-w-md mx-auto text-center px-6">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-stone-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-10 h-10 text-stone-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4 tracking-tight">
                No Items to Checkout
              </h2>
              <p className="text-stone-600 mb-8 font-light leading-relaxed">
                Your cart is empty. Browse our Ankara and Nigerian native wear collection to find your perfect piece.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center space-x-3 bg-stone-900 text-white px-10 py-4 rounded-none font-medium hover:bg-stone-800 transition-all duration-300 tracking-wide uppercase"
            >
              <span>Shop the Collection</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="mb-6 sm:mb-0 mt-12">
              <span className="inline-block px-6 py-2 bg-stone-100 text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
                Secure Checkout
              </span>
              <h1 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight">
                Complete Your <em className="font-light italic">Order</em>
              </h1>
            </div>
            <Link
              href="/cart"
              className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition-colors duration-300 font-light tracking-wide"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {loadError && (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-10">
          <p className="text-red-600 font-light">{loadError}</p>
        </div>
      )}

      {!clientSecret && !loadError && (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="w-6 h-6 animate-spin text-stone-500" />
        </div>
      )}

      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: 'stripe',
              variables: {
                colorPrimary: '#1c1917', // stone-900
                fontFamily: 'inherit',
              },
            },
          }}
        >
          <CheckoutForm contactData={contactData} setContactData={setContactData} />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;