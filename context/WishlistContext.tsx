'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

export interface WishlistItem {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface WishlistState {
  items: WishlistItem[];
}

type WishlistAction =
  | { type: 'ADD_TO_WISHLIST'; payload: WishlistItem }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: number }
  | { type: 'LOAD_WISHLIST'; payload: WishlistItem[] };

const WishlistContext = createContext<{
  state: WishlistState;
  dispatch: React.Dispatch<WishlistAction>;
  isInWishlist: (id: number) => boolean;
} | null>(null);

const WISHLIST_STORAGE_KEY = 'threadsandgems_wishlist';

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST': {
      if (state.items.some(item => item.id === action.payload.id)) {
        return state;
      }
      return { items: [...state.items, action.payload] };
    }

    case 'REMOVE_FROM_WISHLIST':
      return { items: state.items.filter(item => item.id !== action.payload) };

    case 'LOAD_WISHLIST':
      return { items: action.payload };

    default:
      return state;
  }
};

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

  // On mount, load any saved wishlist from localStorage.
  // This runs client-side only, after hydration, to avoid SSR mismatches.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (saved) {
        const items: WishlistItem[] = JSON.parse(saved);
        if (Array.isArray(items) && items.length > 0) {
          dispatch({ type: 'LOAD_WISHLIST', payload: items });
        }
      }
    } catch (err) {
      console.error('Failed to load wishlist from storage:', err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Whenever the wishlist changes, persist it to localStorage.
  useEffect(() => {
    try {
      window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(state.items));
    } catch (err) {
      console.error('Failed to save wishlist to storage:', err);
    }
  }, [state.items]);

  const isInWishlist = (id: number) => state.items.some(item => item.id === id);

  return (
    <WishlistContext.Provider value={{ state, dispatch, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
