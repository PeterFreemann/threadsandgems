'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Logo from '../images/logo.png';
import Image from 'next/image';

// ─── brand tokens ─────────────────────────────────────────────────────────────
const GOLD    = '#C9A84C'; // diamond / ampersand colour from logo
const DARK    = '#2C1810'; // wordmark brown from logo
const GOLD_BG = '#C9A84C18'; // ~10% gold tint for active/hover backgrounds

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();
  const pathname = usePathname();

  const navItems = [
    { name: 'Home',    path: '/'        },
    { name: 'Shop',    path: '/shop'    },
    { name: 'About',   path: '/about'   },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
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
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className="relative text-sm font-medium uppercase tracking-wide transition-colors duration-300 group"
                  style={{ color: isActive ? GOLD : DARK }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = GOLD; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = DARK; }}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-500 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ backgroundColor: GOLD }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop — Cart */}
          <div className="hidden md:flex items-center">
            <Link
              href="/cart"
              className="relative p-3 transition-all duration-300 group"
              style={{ color: DARK }}
              onMouseEnter={(e) => { e.currentTarget.style.color = GOLD; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = DARK; }}
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              {state.itemCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 text-white text-xs flex items-center justify-center font-medium"
                  style={{ backgroundColor: GOLD }}
                >
                  {state.itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile — Cart + Hamburger */}
          <div className="flex md:hidden items-center space-x-1">
            <Link
              href="/cart"
              className="relative p-3 transition-colors duration-300"
              style={{ color: DARK }}
              onMouseEnter={(e) => { e.currentTarget.style.color = GOLD; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = DARK; }}
            >
              <ShoppingBag className="w-5 h-5" />
              {state.itemCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-4 h-4 text-white text-xs flex items-center justify-center font-medium"
                  style={{ backgroundColor: GOLD }}
                >
                  {state.itemCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 transition-colors duration-300"
              style={{ color: DARK }}
              onMouseEnter={(e) => { e.currentTarget.style.color = GOLD; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = DARK; }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-stone-100">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-2 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 border-l-2"
                  style={{
                    color:           isActive ? GOLD : DARK,
                    borderLeftColor: isActive ? GOLD : 'transparent',
                    backgroundColor: isActive ? GOLD_BG : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color           = GOLD;
                      e.currentTarget.style.borderLeftColor = GOLD;
                      e.currentTarget.style.backgroundColor = GOLD_BG;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color           = DARK;
                      e.currentTarget.style.borderLeftColor = 'transparent';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;