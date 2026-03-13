'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // Changed from react-router-dom
import { useRouter } from 'next/navigation'; // Changed from react-router-dom
import { ArrowLeft, CreditCard, Truck, Shield, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Header from '../components/CartHeader'; // Using main Header instead of CartHeader

const Checkout = () => {
  const { state, dispatch } = useCart();
  const router = useRouter(); // Changed from useNavigate to useRouter
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'United Kingdom',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
      router.push('/order-confirmed'); // Changed from navigate to router.push
    }, 2000);
  };

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
                Your cart is empty. Discover our exquisite fragrance collection to begin your olfactory journey.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center space-x-3 bg-stone-900 text-white px-10 py-4 rounded-none font-medium hover:bg-stone-800 transition-all duration-300 tracking-wide uppercase"
            >
              <span>Explore Collection</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
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
                    value={formData.email}
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
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="md:col-span-2 px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                    required
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                    required
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                    required
                  />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="md:col-span-2 px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 font-light"
                  >
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Ireland">Ireland</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-none shadow-sm border border-stone-200/50 p-6 lg:p-8">
                <div className="flex items-center space-x-3 mb-6 lg:mb-8">
                  <div className="w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <h2 className="text-xl lg:text-2xl font-light text-stone-900 tracking-wide">Payment Information</h2>
                </div>
                <div className="space-y-6">
                  <input
                    type="text"
                    name="nameOnCard"
                    placeholder="Name on card"
                    value={formData.nameOnCard}
                    onChange={handleInputChange}
                    className="w-full px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                    required
                  />
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                    required
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                      required
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:ring-0 transition-colors duration-300 text-stone-900 placeholder-stone-400 font-light"
                      required
                    />
                  </div>
                </div>
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
                className="w-full bg-stone-900 text-white py-4 rounded-none font-medium hover:bg-stone-800 transition-all duration-300 tracking-wide uppercase"
              >
                Complete Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;