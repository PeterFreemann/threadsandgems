'use client';

import Link from 'next/link';
import { Heart, ArrowRight, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../../../context/WishlistContext';
import { useCart } from '../../../context/CartContext';
import Header from '../../../components/Header';

const GOLD = '#C9A84C';
const DARK = '#2C1810';

export default function WishlistPage() {
  const { state, dispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();

  const removeFromWishlist = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
  };

  const moveToCart = (item: (typeof state.items)[0]) => {
    cartDispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        description: item.description,
      },
    });
    removeFromWishlist(item.id);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight mb-2">
          Your <em className="italic font-light">Wishlist</em>
        </h1>
        <p className="text-stone-500 font-light mb-10">
          Pieces you've saved for later.
        </p>

        {state.items.length === 0 ? (
          <div className="bg-white border border-stone-200/60 p-12 text-center">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-7 h-7 text-stone-500" />
            </div>
            <h2 className="text-xl font-light text-stone-900 mb-2">Your wishlist is empty</h2>
            <p className="text-stone-500 font-light mb-8">
              Tap the heart on any piece to save it here.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-stone-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-stone-800 transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white border border-stone-200/60 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <Link href={`/product/${item.id}`} className="block relative aspect-[4/5] bg-stone-50 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </Link>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  aria-label="Remove from wishlist"
                  className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-200"
                >
                  <Heart className="w-4 h-4" style={{ color: GOLD, fill: GOLD }} />
                </button>

                <div className="p-6">
                  <Link href={`/product/${item.id}`}>
                    <p className="text-stone-900 font-light mb-2 hover:text-stone-600 transition-colors">
                      {item.description}
                    </p>
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-light" style={{ color: DARK }}>
                      {item.price}
                    </span>
                    <button
                      onClick={() => moveToCart(item)}
                      className="flex items-center gap-2 text-white px-4 py-2 text-xs font-medium uppercase tracking-wide transition-all duration-300"
                      style={{ backgroundColor: DARK }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = GOLD; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = DARK; }}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {state.items.length > 0 && (
          <div className="text-center mt-16">
            <Link
              href="/shop"
              className="inline-flex items-center space-x-3 border border-stone-300 text-stone-900 px-10 py-4 font-medium hover:bg-stone-50 transition-all duration-300 tracking-wide uppercase"
            >
              <span>Explore More Pieces</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
