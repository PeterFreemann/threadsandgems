'use client';

import React from 'react';
import Link from 'next/link'; // Change from react-router-dom to next/link
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Header from '../components/CartHeader'; // Import your main Header

const Cart = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity }
    });
  };

  const removeFromCart = (id: number) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50">
        <Header />
        <div className="flex items-center justify-center pt-32 px-6">
          <div className="max-w-md mx-auto text-center px-6 py-12">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-stone-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-10 h-10 text-stone-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4 tracking-tight">
                Your Cart is <em className="font-light italic">Empty</em>
              </h2>
              <p className="text-stone-600 mb-8 font-light leading-relaxed">
                Discover our exquisite fragrance collection and curate your perfect scent journey.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center space-x-3 bg-stone-900 text-white px-10 py-4 rounded-none font-medium hover:bg-stone-800 transition-all duration-300 tracking-wide uppercase"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Header */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-10">
            <div className="mb-6 sm:mb-0">
              <span className="inline-block px-6 py-2 bg-stone-100 text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
                Shopping Cart
              </span>
              <h1 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight">
                Your Selected <em className="font-light italic">Fragrances</em>
              </h1>
            </div>
            <Link
              href="/shop"
              className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition-colors duration-300 font-light tracking-wide"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {state.items.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-none shadow-sm border border-stone-200/50 p-6 md:p-8 hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-full md:w-24 h-48 md:h-32 bg-stone-100 rounded-none overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0 w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                      <div className="mb-4 sm:mb-0">
                        <h3 className="text-2xl font-light text-stone-900 mb-2 tracking-wide">{item.name}</h3>
                        <p className="text-stone-600 font-light leading-relaxed mb-2">{item.description}</p>
                        <p className="text-lg font-light text-stone-900">{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-50 rounded-full transition-all duration-300 self-end"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-stone-100">
                      {/* Quantity Section */}
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-stone-600 font-light tracking-wide uppercase">Quantity</span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-stone-300 flex items-center justify-center hover:bg-stone-50 transition-colors duration-300"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3 text-stone-600" />
                          </button>
                          <span className="text-lg font-light w-8 text-center text-stone-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-stone-300 flex items-center justify-center hover:bg-stone-50 transition-colors duration-300"
                          >
                            <Plus className="w-3 h-3 text-stone-600" />
                          </button>
                        </div>
                      </div>

                      {/* Total Price for this item */}
                      <div className="text-left sm:text-right">
                        <span className="text-sm text-stone-600 font-light uppercase">Total</span>
                        <div className="text-2xl font-light text-stone-900 tracking-wide">
                          £{(parseFloat(item.price.replace('£', '')) * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-none shadow-sm border border-stone-200/50 p-6 md:p-8 sticky top-8">
              <h2 className="text-2xl font-light text-stone-900 mb-8 tracking-wide">Order Summary</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-stone-600 font-light">Subtotal ({state.itemCount} {state.itemCount === 1 ? 'item' : 'items'})</span>
                  <span className="text-stone-900 font-light">£{state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600 font-light">Shipping</span>
                  <span className="text-stone-900 font-light">Complimentary</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600 font-light">Tax</span>
                  <span className="text-stone-900 font-light">£{(state.total * 0.2).toFixed(2)}</span>
                </div>
                <div className="border-t border-stone-200 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-light text-stone-900">Total</span>
                    <span className="text-xl font-light text-stone-900">
                      £{(state.total * 1.2).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-stone-900 text-white py-4 rounded-none font-medium hover:bg-stone-800 transition-all duration-300 flex items-center justify-center space-x-3 tracking-wide uppercase"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-8 pt-6 border-t border-stone-100">
                <div className="text-center space-y-2">
                  <p className="text-sm text-stone-500 font-light">
                    Complimentary shipping on all orders
                  </p>
                  <p className="text-xs text-stone-400 font-light">
                    30-day satisfaction guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-stone-100 text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
              Complete Your Collection
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 tracking-tight">
              You Might Also <em className="font-light italic">Enjoy</em>
            </h2>
          </div>
          
          <div className="text-center">
            <Link
              href="/shop"
              className="inline-flex items-center space-x-3 border border-stone-300 text-stone-900 px-10 py-4 rounded-none font-medium hover:bg-stone-50 transition-all duration-300 tracking-wide uppercase"
            >
              <span>Explore More Fragrances</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;