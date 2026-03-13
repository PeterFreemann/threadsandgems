import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail } from 'lucide-react';
import CartHeader from '../components/CartHeader';

const OrderConfirmed = () => {
  const orderNumber = `LS${Date.now().toString().slice(-6)}`;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <CartHeader />
      
      {/* Order Confirmation Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Thank you for your purchase from Delightful Scents
          </p>
          <p className="text-lg text-gray-500">
            Order #{orderNumber}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What happens next?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Processing</h3>
              <p className="text-gray-600">
                We're carefully preparing your fragrances with love and attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Shipping</h3>
              <p className="text-gray-600">
                Your order will be shipped within 1-2 business days with free delivery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                <Mail className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Updates</h3>
              <p className="text-gray-600">
                We'll send you email updates with tracking information and delivery details.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 text-white text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Thank You for Choosing Delightful Scents</h2>
          <p className="text-xl text-gray-200 mb-6">
            Your support means the world to us. We hope you love your new fragrances!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Contact Support</h4>
              <p className="text-gray-600 mb-2">
                If you have any questions about your order, we're here to help.
              </p>
              <Link
                to="/contact"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Contact Us →
              </Link>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Track Your Order</h4>
              <p className="text-gray-600 mb-2">
                You'll receive a tracking number via email once your order ships.
              </p>
              <span className="text-gray-500">Coming soon: Order tracking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;