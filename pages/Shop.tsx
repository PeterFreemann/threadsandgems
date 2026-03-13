'use client';

import React, { useState } from 'react';
import { Star, Grid, List } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Perfume from '../images/IMG_8495.jpg';
import Perfumee from '../images/IMG_8496.jpg';
import Perfumeee from '../images/IMG_8492.jpg';
import Perfumeeee from '../images/IMG_8493.jpg';
import Perfumeeeee from '../images/IMG_8494.jpg';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { dispatch } = useCart();

  const products = [
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
    },
    {
      id: 4,
      name: "Vanilla Dreams",
      price: "£25.00",
      image: Perfumeeee.src,
      rating: 4.9,
      category: "sweet",
      description: "Warm vanilla with amber and tonka bean"
    },
    {
      id: 5,
      name: "Citrus Burst",
      price: "£30.00",
      image:Perfumeeeee.src,
      rating: 4.6,
      category: "fresh",
      description: "Energizing blend of lemon, lime, and grapefruit"
    },
    {
      id: 6,
      name: "Mystic Woods",
      price: "£30.00",
      image: Perfumeeeee.src,
      rating: 4.8,
      category: "woody",
      description: "Deep cedar and pine with smoky undertones"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fresh', name: 'Fresh' },
    { id: 'floral', name: 'Floral' },
    { id: 'woody', name: 'Woody' },
    { id: 'sweet', name: 'Sweet' },
    { id: 'evening', name: 'Evening' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: typeof products[0]) => {
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
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        
        {/* Subtle geometric overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-stone-200 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 tracking-wider uppercase">
              Complete Collection
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-[0.9] tracking-tight">
            Our
            <span className="block font-extralight italic text-amber-200">
              Fragrances
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Discover our complete range of luxury fragrances, each crafted with passion and precision from the finest ingredients.
          </p>
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

      {/* Filters and Products Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters and View Toggle */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-20 space-y-8 lg:space-y-0">
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-8 py-3 rounded-none font-medium transition-all duration-300 tracking-wide uppercase text-sm ${
                    selectedCategory === category.id
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-stone-100 rounded-none p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-12 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-white overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-700 ${
                  viewMode === 'list' ? 'flex gap-8' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-80 flex-shrink-0 aspect-square' : 'aspect-[4/5]'
                }`}>
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
                
                <div className={`p-8 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : ''}`}>
                  <h3 className="text-2xl font-light text-stone-900 mb-3 tracking-wide">{product.name}</h3>
                  <p className="text-stone-600 mb-6 font-light leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-light text-stone-900 tracking-wide">{product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-stone-900 text-white px-6 py-3 rounded-none font-medium text-sm hover:bg-stone-800 transition-all duration-300 tracking-wide uppercase"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-20">
            <button className="bg-stone-900 text-white px-12 py-4 rounded-none font-medium text-base hover:bg-stone-800 transition-all duration-300 tracking-wide uppercase">
              Load More Products
            </button>
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
          <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 tracking-wider uppercase mb-8">
            Exclusive Access
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Discover <em className="font-light italic">New Arrivals</em>
          </h2>
          <p className="text-lg text-white/70 mb-12 font-light leading-relaxed">
            Be the first to experience our latest creations and receive exclusive offers on premium fragrances.
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
      </section>
    </div>
  );
};

export default Shop;