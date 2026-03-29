export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  category: string;
  description: string;
  details: string;
};

// Image src strings are injected at the page level via Next.js static imports.
// This file holds metadata only — keep ids in sync with your image imports.

export const PRODUCT_META: Omit<Product, 'image'>[] = [
  {
    id: 1,
    name: '',
    price: '£45.00',
    rating: 4.9,
    category: 'ankara',
    description: 'Ankara Two-Piece Set',
    details:
      'A stunning co-ord crafted from premium Ankara fabric. The bold geometric print is a celebration of West African textile tradition, tailored into a modern silhouette perfect for owambes, brunches, and everything in between.',
  },
  
  {
    id: 2,
    name: '',
    price: '£25.00',
    rating: 4.8,
    category: 'native',
    description: 'Nigerian Native Agbada',
    details:
      'A regal three-piece Agbada set expertly finished with hand-embroidered detailing at the neckline and sleeves. Made for the man who walks into a room and commands it.',
  },
  {
    id: 3,
    name: '',
    price: '£30.00',
    rating: 4.7,
    category: 'ankara',
    description: 'Ankara Wrap Dress',
    details:
      'A figure-flattering wrap silhouette cut from vibrant Ankara print. Versatile enough for casual outings yet striking enough for formal occasions — this dress does it all.',
  },
  {
    id: 4,
    name: '',
    price: '£25.00',
    rating: 4.9,
    category: 'native',
    description: 'Aso-Oke Occasion Set',
    details:
      'Woven from authentic Aso-Oke fabric in rich earth tones and gold thread. This occasion set is the definition of understated elegance — perfect for traditional ceremonies and owambe celebrations.',
  },
  {
    id: 5,
    name: '',
    price: '£30.00',
    rating: 4.6,
    category: 'ankara',
    description: 'Ankara Peplum Blouse & Skirt',
    details:
      'A two-piece featuring a structured peplum blouse paired with a fitted midi skirt, both cut from the same vibrant Ankara print. Polished, bold, and unmistakably Nigerian.',
  },
  {
    id: 6,
    name: '',
    price: '£30.00',
    rating: 4.8,
    category: 'native',
    description: 'Embroidered Kaftan Dress',
    details:
      'A flowing kaftan dress featuring intricate hand-embroidery across the bodice and hem. Effortlessly elegant and rooted in tradition — wear it and feel the culture.',
  },
  {
      id: 7,
      name: "",
      price: "£30.00",
    
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
      details:
      'A flowing kaftan dress featuring intricate hand-embroidery across the bodice and hem. Effortlessly elegant and rooted in tradition — wear it and feel the culture.',
    },

];