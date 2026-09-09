'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import Header from '../../components/CartHeader';

const OrderConfirmed = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <div className="flex items-center justify-center pt-32 px-6 mt-10">
        <div className="max-w-md mx-auto text-center px-6">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-stone-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-stone-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4 tracking-tight">
              Order <em className="font-light italic">Confirmed</em>
            </h2>
            <p className="text-stone-600 mb-8 font-light leading-relaxed">
              Thank you for your order. We've sent a confirmation to your email and
              will notify you as soon as your pieces are on their way.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center space-x-3 bg-stone-900 text-white px-10 py-4 rounded-none font-medium hover:bg-stone-800 transition-all duration-300 tracking-wide uppercase"
          >
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;