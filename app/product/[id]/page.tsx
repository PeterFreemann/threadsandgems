'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Star, ArrowLeft, ShoppingBag, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import Header from '../../../components/Header';

// ─── brand tokens ──────────────────────────────────────────────────────────────
const GOLD    = '#C9A84C';
const DARK    = '#2C1810';
const GOLD_BG = '#C9A84C18';

// ─── images ───────────────────────────────────────────────────────────────────
import cloth                  from '../../../images/clothssss.png';
import cloths                 from '../../../images/clothsssss.png';
import clothss                from '../../../images/clothssssss.png';
import clothsss               from '../../../images/clothsssssss.png';
import clothssss              from '../../../images/clothssssssss.png';
import clothsssss             from '../../../images/clothsssssssss.png';
import clothssssss            from '../../../images/clothssssssssss.png';
import clothsssssss           from '../../../images/clothsssssssssss.png';
import clothssssssss          from '../../../images/clothssssssssssss.png';
import clothsssssssss         from '../../../images/clothsssssssssssss.png';
import clothssssssssss        from '../../../images/clothssssssssssssss.png';
import clothsssssssssss       from '../../../images/clothsssssssssssssss.png';
import clothssssssssssss      from '../../../images/clothssssssssssssssss.png';
import clothsssssssssssss     from '../../../images/clothsssssssssssssssss.png';
import clothssssssssssssss    from '../../../images/clothssssssssssssssssss.png';
import clothsssssssssssssss   from '../../../images/clothssssssssssssssssssssssss.png';
import clothssssssssssssssss  from '../../../images/clothsssssssssssssssssssssssssss.png';
import clothsssssssssssssssss from '../../../images/clothsssssssssssssssssssssssssssssssss.png';

// ─── master product list ───────────────────────────────────────────────────────
// ids must stay in sync with Shop page
const ALL_PRODUCTS = [
  {
    id: 1,
    price: '£45.00', image: cloth.src, rating: 4.9, category: 'ankara',
    description: 'Ankara Two-Piece Set',
    details: 'A stunning co-ord crafted from premium Ankara fabric. The bold geometric print celebrates West African textile tradition, tailored into a modern silhouette perfect for owambes, brunches, and everything in between.',
  },
  {
    id: 2,
    price: '£25.00', image: cloths.src, rating: 4.8, category: 'native',
    description: 'Nigerian Native Agbada',
    details: 'A regal three-piece Agbada set expertly finished with hand-embroidered detailing at the neckline and sleeves. Made for the man who walks into a room and commands it.',
  },
  {
    id: 3,
    price: '£30.00', image: clothss.src, rating: 4.7, category: 'ankara',
    description: 'Ankara Wrap Dress',
    details: 'A figure-flattering wrap silhouette cut from vibrant Ankara print. Versatile enough for casual outings yet striking enough for formal occasions — this dress does it all.',
  },
  {
    id: 4,
    price: '£25.00', image: clothsss.src, rating: 4.9, category: 'native',
    description: 'Aso-Oke Occasion Set',
    details: 'Woven from authentic Aso-Oke fabric in rich earth tones and gold thread. This occasion set is the definition of understated elegance — perfect for traditional ceremonies and owambe celebrations.',
  },
  {
    id: 5,
    price: '£30.00', image: clothssss.src, rating: 4.6, category: 'ankara',
    description: 'Ankara Peplum Blouse & Skirt',
    details: 'A two-piece featuring a structured peplum blouse paired with a fitted midi skirt, both cut from the same vibrant Ankara print. Polished, bold, and unmistakably Nigerian.',
  },
  {
    id: 6,
    price: '£30.00', image: clothsssss.src, rating: 4.8, category: 'native',
    description: 'Embroidered Kaftan Dress',
    details: 'A flowing kaftan dress featuring intricate hand-embroidery across the bodice and hem. Effortlessly elegant and rooted in tradition — wear it and feel the culture.',
  },
  {
    id: 7,
    price: '£30.00', image: clothssssss.src, rating: 4.8, category: 'native',
    description: 'Royal Embroidered Kaftan',
    details: 'A majestic kaftan in deep jewel tones, adorned with gold-thread embroidery along the collar and cuffs. Designed for those who carry tradition with pride and elegance.',
  },
  {
    id: 8,
    price: '£30.00', image: clothsssssss.src, rating: 4.8, category: 'native',
    description: 'Brocade Senator Set',
    details: 'A sharp senator two-piece in premium brocade fabric. Tailored for the modern Nigerian man who values heritage as much as style — equally at home at a boardroom meeting or an owambe.',
  },
  {
    id: 9,
    price: '£30.00', image: clothssssssss.src, rating: 4.8, category: 'native',
    description: 'Lace Occasion Gown',
    details: 'A full-length gown crafted from rich Nigerian lace, with a fitted bodice and flowing skirt. The kind of piece that makes a room go quiet when you walk in.',
  },
  {
    id: 10,
    price: '£30.00', image: clothsssssssss.src, rating: 4.8, category: 'native',
    description: 'Adire Print Midi Dress',
    details: 'Cut from hand-dyed Adire fabric in indigo and ivory, this midi dress brings the craft of Yoruba textile art into your everyday wardrobe. Wearable culture at its finest.',
  },
  {
    id: 11,
    price: '£30.00', image: clothssssssssss.src, rating: 4.8, category: 'native',
    description: 'Aso-Ebi Skirt & Blouse',
    details: 'A classic Aso-Ebi co-ord in coordinated lace and Aso-Oke, designed to be worn as a set or styled separately. A wardrobe staple for every Nigerian celebration.',
  },
  {
    id: 12,
    price: '£30.00', image: clothsssssssssss.src, rating: 4.8, category: 'native',
    description: 'Damask Agbada Set',
    details: 'A three-piece Agbada in luxurious damask fabric with tonal embroidery at the chest and hem. Rich, commanding, and thoroughly timeless.',
  },
  {
    id: 13,
    price: '£30.00', image: clothssssssssssss.src, rating: 4.8, category: 'native',
    description: 'Gold-Trim Kaftan Gown',
    details: 'A floor-length kaftan gown trimmed with gold ribbon detailing along the neckline and sleeves. Effortlessly regal — dress it up with statement jewellery or let the piece speak for itself.',
  },
  {
    id: 14,
    price: '£30.00', image: clothsssssssssssss.src, rating: 4.8, category: 'native',
    description: 'Velvet Senator Suit',
    details: 'A two-piece senator suit in plush velvet with contrast embroidery. The texture adds depth and luxury — perfect for evening events and high-profile occasions.',
  },
  {
    id: 15,
    price: '£30.00', image: clothssssssssssssss.src, rating: 4.8, category: 'native',
    description: 'Organza Overlay Gown',
    details: 'A statement gown with a structured inner dress and a sheer organza overlay, embellished with subtle floral detail. Designed for the woman who wants to be remembered.',
  },
  {
    id: 16,
    price: '£30.00', image: clothsssssssssssssss.src, rating: 4.8, category: 'native',
    description: 'Tie-Dye Kaftan Set',
    details: 'A relaxed two-piece kaftan set in earthy tie-dye tones. Comfortable enough for everyday wear, distinctive enough to turn heads wherever you go.',
  },
  {
    id: 17,
    price: '£30.00', image: clothssssssssssssssss.src, rating: 4.8, category: 'native',
    description: 'Embellished Iro & Buba',
    details: 'A classic Iro and Buba in coordinating Aso-Oke and lace, finished with crystal bead embellishments at the neckline. A timeless silhouette reimagined for the modern woman.',
  },
  {
    id: 18,
    price: '£30.00', image: clothsssssssssssssssss.src, rating: 4.8, category: 'native',
    description: 'Nigerian Bridal Kaftan',
    details: 'A bridal-worthy kaftan in ivory and champagne tones, with intricate hand-sewn beading across the bodice. For the bride who wants to honour her roots on the most important day of her life.',
  },
];

// ─── component ────────────────────────────────────────────────────────────────
export default function ProductPage() {
  const params    = useParams();
  const { dispatch } = useCart();

  const productId = Number(params?.id);
  const product   = ALL_PRODUCTS.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded]       = useState(false);

  const relatedProducts = ALL_PRODUCTS.filter(
    (p) => p.category === product?.category && p.id !== productId,
  ).slice(0, 3);

  // ── not found ──────────────────────────────────────────────────────────────
  if (!product) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <div className="flex flex-col items-center justify-center py-40 px-6 text-center">
          <h1 className="text-4xl font-light text-stone-900 mb-4 tracking-tight">
            Piece Not Found
          </h1>
          <p className="text-stone-600 font-light mb-10">
            This item may have sold out or been removed from the collection.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center space-x-3 text-white px-10 py-4 font-medium text-sm tracking-wide uppercase transition-all duration-300"
            style={{ backgroundColor: DARK }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Shop</span>
          </Link>
        </div>
      </div>
    );
  }

  // ── helpers ────────────────────────────────────────────────────────────────
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => q + 1);

  const priceValue = parseFloat(product.price.replace('£', ''));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          id: product.id,
          name: product.description,
          price: product.price,
          image: product.image,
          description: product.description,
        },
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // ── render ─────────────────────────────────────────────────────────────────
  return (
    <div className="overflow-hidden bg-neutral-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm font-light text-stone-500 tracking-wide">
            <Link href="/" className="hover:text-stone-900 transition-colors duration-200 uppercase">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-stone-900 transition-colors duration-200 uppercase">Shop</Link>
            <span>/</span>
            <span className="uppercase" style={{ color: GOLD }}>{product.description}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* ── Image ── */}
            <div className="relative bg-stone-50 aspect-[4/5] overflow-hidden group">
              <img
                src={product.image}
                alt={product.description}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />

              {/* Rating badge */}
              <div className="absolute top-5 left-5">
                <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-current" style={{ color: GOLD }} />
                  <span className="text-xs text-stone-700 font-medium">{product.rating}</span>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-5 right-5">
                <span
                  className="px-3 py-1 text-xs text-white font-medium tracking-wider uppercase rounded-full"
                  style={{ backgroundColor: DARK }}
                >
                  {product.category === 'ankara' ? 'Ankara' : 'Native Wear'}
                </span>
              </div>
            </div>

            {/* ── Info ── */}
            <div className="lg:sticky lg:top-10 space-y-10">

              {/* Title & price */}
              <div>
                <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: GOLD }}>
                  Threads & Gems
                </p>
                <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight leading-tight" style={{ color: DARK }}>
                  {product.description}
                </h1>
                <p className="text-3xl font-light tracking-wide" style={{ color: DARK }}>
                  {product.price}
                </p>
              </div>

              <div className="border-t border-stone-100" />

              {/* About */}
              <div>
                <h2 className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: DARK }}>
                  About This Piece
                </h2>
                <p className="text-stone-600 font-light leading-relaxed text-base">
                  {product.details}
                </p>
              </div>

              {/* Quantity stepper */}
              <div>
                <h2 className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: DARK }}>
                  Quantity
                </h2>

                <div className="flex items-center gap-6">
                  <div className="flex items-center border border-stone-200">
                    <button
                      onClick={decrement}
                      disabled={quantity <= 1}
                      aria-label="Decrease quantity"
                      className="w-12 h-12 flex items-center justify-center text-stone-700 hover:bg-stone-100 disabled:opacity-30 transition-colors duration-200"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <span className="w-14 h-12 flex items-center justify-center font-medium text-base border-x border-stone-200 select-none" style={{ color: DARK }}>
                      {quantity}
                    </span>

                    <button
                      onClick={increment}
                      aria-label="Increase quantity"
                      className="w-12 h-12 flex items-center justify-center text-stone-700 hover:bg-stone-100 transition-colors duration-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Live subtotal */}
                  {quantity > 1 && (
                    <p className="text-sm text-stone-500 font-light tracking-wide">
                      Subtotal:{' '}
                      <span className="font-medium" style={{ color: DARK }}>
                        £{(priceValue * quantity).toFixed(2)}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center space-x-3 py-5 font-medium text-sm tracking-widest uppercase text-white transition-all duration-300"
                style={{ backgroundColor: added ? GOLD : DARK }}
                onMouseEnter={(e) => { if (!added) e.currentTarget.style.backgroundColor = GOLD; }}
                onMouseLeave={(e) => { if (!added) e.currentTarget.style.backgroundColor = DARK; }}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>
                  {added
                    ? 'Added to Cart!'
                    : `Add ${quantity > 1 ? `${quantity} ` : ''}to Cart`}
                </span>
              </button>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { label: 'Free UK Shipping', sub: 'On orders over £60' },
                  { label: 'Easy Returns',     sub: '14-day return policy' },
                  { label: 'Authentic Fabric', sub: 'Sourced from Nigeria' },
                ].map((badge) => (
                  <div key={badge.label} className="text-center border border-stone-100 py-4 px-2">
                    <p className="text-xs font-medium tracking-wide mb-1" style={{ color: DARK }}>{badge.label}</p>
                    <p className="text-xs text-stone-500 font-light">{badge.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-32 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <span
                className="inline-block px-6 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-6 text-white"
                style={{ backgroundColor: DARK }}
              >
                You May Also Like
              </span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight" style={{ color: DARK }}>
                More{' '}
                <em className="font-light italic" style={{ color: GOLD }}>
                  {product.category === 'ankara' ? 'Ankara Pieces' : 'Native Wear'}
                </em>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {relatedProducts.map((related, index) => (
                <Link
                  key={related.id}
                  href={`/product/${related.id}`}
                  className="group bg-white rounded-none overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[4/5] bg-white">
                    <img
                      src={related.image}
                      alt={related.description}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-current" style={{ color: GOLD }} />
                        <span className="text-xs text-stone-700 font-medium">{related.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-stone-600 mb-4 font-light leading-relaxed">{related.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-light tracking-wide" style={{ color: DARK }}>
                        {related.price}
                      </span>
                      <span
                        className="flex items-center gap-2 text-sm font-medium tracking-wide uppercase group-hover:translate-x-1 transition-all duration-300"
                        style={{ color: GOLD }}
                      >
                        View <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}