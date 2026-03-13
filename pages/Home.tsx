import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

import { ArrowRight, Star, Sparkles, Heart, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Perfume from '../images/IMG_8495.jpg';
import Perfumee from '../images/IMG_8496.jpg';
import Perfumeee from '../images/IMG_8492.jpg';
import Perfumeeee from '../images/IMG_8493.jpg';
import Perfumeeeee from '../images/IMG_8494.jpg';




const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: "",
      price: "£45.00",
      image: Perfume.src,
      rating: 4.9,
      description: "Mystique Bouquet by Afnan"
    },
    {
      id: 2,
      name: "",
      price: "£25.00",
      image: Perfumee.src,
      rating: 4.8,
      description: "Sharaf Blend by Zimaya"
    },
    {
      id: 3,
      name: "",
      price: "£30.00",
image: Perfumeee.src,
      rating: 4.7,
      description: "9AM POUR FEMME by Afnan"
    }
  ];

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description
      }
    });
  };

  return (
    <div className="overflow-hidden bg-neutral-50">
      <Header />
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        
        {/* Subtle geometric overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-stone-200 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 tracking-wider uppercase">
                Luxury Fragrances
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[0.9] tracking-tight">
              Discover Your
              <span className="block font-extralight italic text-amber-200">
                Signature Scent
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Luxury fragrances crafted with the finest ingredients from around the world. 
              Experience the art of British perfumery.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/shop"
                className="group bg-white text-stone-900 px-10 py-4 rounded-none font-medium text-base hover:bg-stone-100 transition-all duration-500 flex items-center space-x-3 tracking-wide uppercase"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href='/about'className="border border-white/50 text-white px-10 py-4 rounded-none font-medium text-base hover:bg-white hover:text-stone-900 transition-all duration-500 tracking-wide uppercase">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Minimal floating elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-2 h-2 bg-amber-300 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-1/3 right-20 animate-float-delayed">
          <div className="w-1 h-1 bg-white rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float">
          <div className="w-3 h-3 border border-white/30 rotate-45 opacity-50"></div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <span className="inline-block px-6 py-2 bg-stone-100 text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
              Our Promise
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">
              Crafted for <em className="font-light italic">Excellence</em>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
              Every fragrance tells a story. We're committed to creating exceptional scents that become part of your personal narrative.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                icon: <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center"><Sparkles className="w-7 h-7 text-stone-700" /></div>,
                title: "Premium Ingredients",
                description: "Sourced from the finest perfume houses in Grasse, France and carefully selected botanical gardens worldwide."
              },
              {
                icon: <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-amber-100 rounded-full flex items-center justify-center"><Heart className="w-7 h-7 text-stone-700" /></div>,
                title: "Artisan Craftsmanship",
                description: "Each fragrance is meticulously blended by our master perfumers with decades of olfactory expertise."
              },
              {
                icon: <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center"><Gift className="w-7 h-7 text-stone-700" /></div>,
                title: "Luxury Experience",
                description: "From the first spray to the elegant packaging, every detail is designed to create moments of pure indulgence."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll text-center group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section ref={productsRef} className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <span className="inline-block px-6 py-2 bg-white text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
              Featured Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">
              Signature <em className="font-light italic">Fragrances</em>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
              Our most beloved creations, each one a masterpiece of olfactory artistry designed to captivate and inspire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-on-scroll group bg-white rounded-none overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 text-amber-400 fill-current" />
                      <span className="text-xs text-stone-700 font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light text-stone-900 mb-3 tracking-wide">{product.name}</h3>
                  <p className="text-stone-600 mb-6 font-light leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-stone-900 tracking-wide">{product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-stone-900 text-white px-6 py-3 rounded-none font-medium text-sm hover:bg-black-100 hover:text-white transition-all duration-300 tracking-wide uppercase"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-on-scroll">
            <Link
              href="/shop"
              className="inline-flex items-center space-x-3 bg-stone-900 text-white px-10 py-4 rounded-none font-medium text-base hover:bg-stone-800 transition-all duration-300 tracking-wide uppercase"
            >
              <span>View All Fragrances</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-gradient-to-r from-stone-900 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-stone-200 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 tracking-wider uppercase mb-8">
              Stay Connected
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Join Our <em className="font-light italic">Fragrance Journey</em>
            </h2>
            <p className="text-lg text-white/70 mb-12 font-light leading-relaxed">
              Be the first to discover new arrivals, exclusive collections, and expert fragrance insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-none bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300"
              />
              <button className="bg-white text-stone-900 px-8 py-4 rounded-none font-medium hover:bg-stone-100 transition-all duration-300 tracking-wide uppercase">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;