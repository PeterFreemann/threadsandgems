'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Logo from '../images/logo.png'
import Image from 'next/image'; // Import Next.js Image component


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { state } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-stone-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-40 h-12">
              <Image
                src={Logo}
                alt="Threads & Gems"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, 200px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative text-sm font-medium uppercase transition-all ${
                  pathname === item.path
                    ? isScrolled ? 'text-stone-900' : 'text-white'
                    : isScrolled
                      ? 'text-stone-600 '
                      : 'text-black/80 '
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-current transition-all duration-500 ${
                  pathname === item.path 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/cart"
              className={`p-3 transition-all duration-500 relative group ${
                isScrolled 
                  ? 'text-stone-600 hover:text-stone-900 hover:bg-stone-100' 
                  : 'text-black/80 hover:text-black hover:bg-black/10'
              }`}
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-xs flex items-center justify-center font-medium animate-pulse">
                  {state.itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              href="/cart"
              className={`p-3 transition-all duration-300 relative ${
                isScrolled 
                  ? 'text-stone-600 hover:text-stone-900' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-xs flex items-center justify-center font-medium">
                  {state.itemCount}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 transition-all duration-500 ${
                isScrolled 
                  ? 'text-stone-600 hover:text-stone-900' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-1 bg-white/95 backdrop-blur-xl shadow-xl mt-2 border border-stone-200/50">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  pathname === item.path 
                    ? 'text-stone-900 bg-stone-50' 
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;