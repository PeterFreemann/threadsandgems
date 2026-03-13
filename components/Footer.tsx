import React from 'react';
import Link from 'next/link';

import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-stone-200 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-stone-600 flex items-center justify-center">
                <span className="text-white font-light text-xl tracking-wider">D</span>
              </div>
              <span className="text-2xl font-light tracking-wide text-white">
                Delighful Scents
              </span>
            </Link>
            <p className="text-stone-300 mb-8 leading-relaxed font-light">
              Crafting luxury fragrances that tell your unique story. Experience the art of British perfumery.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-stone-400 hover:text-amber-300 transition-colors duration-300 p-2">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-300 transition-colors duration-300 p-2">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-300 transition-colors duration-300 p-2">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-300 transition-colors duration-300 p-2">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-8 tracking-wide text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Shop', path: '/shop' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-stone-400 hover:text-white transition-colors duration-300 font-light tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium mb-8 tracking-wide text-white">Collections</h3>
            <ul className="space-y-4">
              {[
                'Fresh Fragrances',
                'Floral Essences',
                'Woody Compositions',
                'Oriental Luxuries',
                'Evening Signatures'
              ].map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-stone-400 hover:text-white transition-colors duration-300 font-light tracking-wide"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-8 tracking-wide text-white">Stay Connected</h3>
            <p className="text-stone-300 mb-6 font-light leading-relaxed">
              Subscribe to our newsletter for exclusive collections and fragrance insights.
            </p>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-4 bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 text-white placeholder-stone-400 focus:outline-none focus:border-amber-500/50 focus:bg-stone-800/70 transition-all duration-300 font-light"
              />
              <button className="bg-white text-stone-900 px-6 py-4 font-medium hover:bg-stone-100 transition-all duration-300 flex items-center justify-center space-x-2 tracking-wide uppercase">
                <Mail className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800/50 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm font-light tracking-wide">
            © 2024 Delightful Scents. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="text-stone-400 hover:text-white text-sm transition-colors duration-300 font-light tracking-wide">
              Privacy Policy
            </a>
            <a href="#" className="text-stone-400 hover:text-white text-sm transition-colors duration-300 font-light tracking-wide">
              Terms of Service
            </a>
            <a href="#" className="text-stone-400 hover:text-white text-sm transition-colors duration-300 font-light tracking-wide">
              Shipping Information
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;