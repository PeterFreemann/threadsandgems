"use client";

import React, { useState } from "react";
import {
  Star,
  Grid,
  List,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import cloth from "../images/clothssss.png";
import cloths from "../images/clothsssss.png";
import clothss from "../images/clothssssss.png";
import clothsss from "../images/clothsssssss.png";
import clothssss from "../images/clothssssssss.png";
import clothsssss from "../images/clothsssssssss.png";
import clothssssss from "../images/clothssssssssss.png";
import clothsssssss from "../images/clothsssssssssss.png";
import clothssssssss from "../images/clothssssssssssss.png";
import clothsssssssss from "../images/clothsssssssssssss.png";
import clothssssssssss from "../images/clothssssssssssssss.png";
import clothsssssssssss from "../images/clothsssssssssssssss.png";
import clothssssssssssss from "../images/clothssssssssssssssss.png";
import clothsssssssssssss from "../images/clothsssssssssssssssss.png";
import clothssssssssssssss from "../images/clothssssssssssssssssss.png";
import clothsssssssssssssss from "../images/clothsssssssssssssssssss.png";
import clothssssssssssssssss from "../images/clothssssssssssssssssssss.png";
import clothsssssssssssssssss from "../images/clothsssssssssssssssssssss.png";
import clothssssssssssssssssss from "../images/clothssssssssssssssssssssss.png";
import clothsssssssssssssssssss from "../images/clothsssssssssssssssssssssss.png";
import clothssssssssssssssssssss from "../images/clothssssssssssssssssssssssss.png";
import clothsssssssssssssssssssss from "../images/clothsssssssssssssssssssssssss.png";
import clothssssssssssssssssssssss from "../images/clothssssssssssssssssssssssssss.png";













// ─── brand tokens ─────────────────────────────────────────────────────────────
const GOLD = "#C9A84C";
const DARK = "#2C1810";

const PRODUCTS_PER_PAGE = 12; // change this to however many cards you want per page

const Shop = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const { dispatch } = useCart();

  const products = [
    {
      id: 1,
      name: "",
      price: "£45.00",
      image: cloth.src,
      rating: 4.9,
      category: "ankara",
      description: "Ankara Two-Piece Set",
    },
    {
      id: 2,
      name: "",
      price: "£25.00",
      image: cloths.src,
      rating: 4.8,
      category: "native",
      description: "Nigerian Native Agbada",
    },
    {
      id: 3,
      name: "",
      price: "£30.00",
      image: clothss.src,
      rating: 4.7,
      category: "ankara",
      description: "Ankara Wrap Dress",
    },
    {
      id: 4,
      name: "",
      price: "£25.00",
      image: clothsss.src,
      rating: 4.9,
      category: "native",
      description: "Aso-Oke Occasion Set",
    },
    {
      id: 5,
      name: "",
      price: "£30.00",
      image: clothssss.src,
      rating: 4.6,
      category: "ankara",
      description: "Ankara Peplum Blouse & Skirt",
    },
    {
      id: 6,
      name: "",
      price: "£30.00",
      image: clothsssss.src,
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
    },
    {
      id: 7,
      name: "",
      price: "£30.00",
      image: clothssssss.src,
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
    },
    {
      id: 8,
      name: "",
      price: "£30.00",
      image: clothsssssss.src,
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
    },
    {
      id: 9,
      name: "",
      price: "£30.00",
      image: clothsssssssss.src,
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
    },
    {
      id: 10,
      name: "",
      price: "£30.00",
      image: clothsssssssssss.src,
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
    },
    {
      id: 11,
      name: "",
      price: "£30.00",
      image: clothssssssssss.src,
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
    },
    {
      id: 12,
      name: "",
      price: "£30.00",
      image: clothssssssssssss.src,
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
    },
    {
      id: 13,
      name: "",
      price: "£30.00",
      image: clothsssssssssssss.src,
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
    },
    {
      id: 14,
      name: "",
      price: "£30.00",
      image: clothssssssssssssss.src,
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
    },
    {
      id: 15,
      name: "",
      price: "£30.00",
      image: clothsssssssssssssss.src,
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
    },
    {
      id: 16,
      name: "",
      price: "£30.00",
      image: clothssssssssssssssss.src,
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
    },
    {
      id: 17,
      name: "",
      price: "£30.00",
      image: clothsssssssssssssssss.src,
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
    },
    {
      id: 18,
      name: "",
      price: "£30.00",
      image: clothssssssssssssssssss.src,
      rating: 4.8,
      category: "native",
      description: "Embroidered Kaftan Dress",
    },
    
  ];

  const categories = [
    { id: "all", name: "All Pieces" },
    { id: "ankara", name: "Ankara" },
    { id: "native", name: "Native Wear" },
    { id: "occasion", name: "Occasion" },
    { id: "everyday", name: "Everyday" },
  ];

  // ── filtering ──────────────────────────────────────────────────────────────
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // ── pagination ─────────────────────────────────────────────────────────────
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // scroll back up to the product grid smoothly
    document
      .getElementById("products-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // reset to page 1 whenever category changes
  const handleCategoryChange = (id: string) => {
    setSelectedCategory(id);
    setCurrentPage(1);
  };

  // ── cart ───────────────────────────────────────────────────────────────────
  const handleAddToCart = (
    e: React.MouseEvent,
    product: (typeof products)[0],
  ) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
      },
    });
  };

  return (
    <div className="overflow-hidden bg-neutral-50">
      <Header />

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-stone-200 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 tracking-wider uppercase">
              Ankara & Nigerian Native Wear
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-[0.9] tracking-tight">
            The Full
            <span className="block font-extralight italic text-amber-200">
              Collection
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Browse every piece — from vibrant Ankara prints to elegant Nigerian
            native wear. Each style crafted to celebrate your roots and command
            the room.
          </p>
        </div>

        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-2 h-2 bg-amber-300 rounded-full opacity-60" />
        </div>
        <div className="absolute top-1/3 right-20 animate-float-delayed">
          <div className="w-1 h-1 bg-white rounded-full opacity-40" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float">
          <div className="w-3 h-3 border border-white/30 rotate-45 opacity-50" />
        </div>
      </section>

      {/* ── Products ── */}
      <section id="products-section" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters + view toggle */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-20 space-y-8 lg:space-y-0">
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className="px-8 py-3 rounded-none font-medium transition-all duration-300 tracking-wide uppercase text-sm"
                  style={
                    selectedCategory === cat.id
                      ? { backgroundColor: DARK, color: "#fff" }
                      : { backgroundColor: "#f5f5f4", color: DARK }
                  }
                  onMouseEnter={(e) => {
                    if (selectedCategory !== cat.id)
                      e.currentTarget.style.backgroundColor = "#e7e5e4";
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== cat.id)
                      e.currentTarget.style.backgroundColor = "#f5f5f4";
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="flex items-center bg-stone-100 p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 transition-all duration-300 ${
                  viewMode === "grid"
                    ? "text-white"
                    : "text-stone-600 hover:text-stone-900"
                }`}
                style={viewMode === "grid" ? { backgroundColor: DARK } : {}}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 transition-all duration-300 ${
                  viewMode === "list"
                    ? "text-white"
                    : "text-stone-600 hover:text-stone-900"
                }`}
                style={viewMode === "list" ? { backgroundColor: DARK } : {}}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm font-light text-stone-500 tracking-wide">
              Showing{" "}
              <span className="text-stone-900 font-medium">
                {startIndex + 1}–
                {Math.min(
                  startIndex + PRODUCTS_PER_PAGE,
                  filteredProducts.length,
                )}
              </span>{" "}
              of{" "}
              <span className="text-stone-900 font-medium">
                {filteredProducts.length}
              </span>{" "}
              pieces
            </p>
            <p className="text-sm font-light text-stone-500 tracking-wide">
              Page{" "}
              <span className="text-stone-900 font-medium">{currentPage}</span>{" "}
              of{" "}
              <span className="text-stone-900 font-medium">{totalPages}</span>
            </p>
          </div>

          {/* Cards */}
          <div
            className={`grid gap-12 ${
              viewMode === "grid"
                ? "md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 max-w-4xl mx-auto"
            }`}
          >
            {visibleProducts.map((product, index) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className={`group bg-white rounded-none overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                  viewMode === "list" ? "flex gap-8" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-white ${
                    viewMode === "list"
                      ? "w-64 shrink-0 aspect-[4/5]"
                      : "aspect-[4/5]"
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.description}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star
                        className="w-3 h-3 fill-current"
                        style={{ color: GOLD }}
                      />
                      <span className="text-xs text-stone-700 font-medium">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div
                  className={`p-8 ${viewMode === "list" ? "flex-1 flex flex-col justify-center" : ""}`}
                >
                  <p className="text-stone-600 mb-6 font-light leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span
                      className="text-2xl font-light tracking-wide"
                      style={{ color: DARK }}
                    >
                      {product.price}
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="text-white px-6 py-3 rounded-none font-medium text-sm transition-all duration-300 tracking-wide uppercase"
                        style={{ backgroundColor: DARK }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = GOLD;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = DARK;
                        }}
                      >
                        Add to Cart
                      </button>
                      <span
                        className="text-stone-400 group-hover:translate-x-1 transition-all duration-300"
                        style={{}}
                      >
                        <ArrowRight className="w-4 h-4 group-hover:text-stone-900" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-20">
              {/* Prev */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed border"
                style={{
                  borderColor: DARK,
                  color: DARK,
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.backgroundColor = DARK;
                    e.currentTarget.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = DARK;
                }}
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className="w-11 h-11 text-sm font-medium transition-all duration-300 border"
                    style={
                      currentPage === page
                        ? {
                            backgroundColor: GOLD,
                            borderColor: GOLD,
                            color: "#fff",
                          }
                        : {
                            backgroundColor: "transparent",
                            borderColor: DARK,
                            color: DARK,
                          }
                    }
                    onMouseEnter={(e) => {
                      if (currentPage !== page) {
                        e.currentTarget.style.backgroundColor = DARK;
                        e.currentTarget.style.borderColor = DARK;
                        e.currentTarget.style.color = "#fff";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== page) {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.borderColor = DARK;
                        e.currentTarget.style.color = DARK;
                      }
                    }}
                  >
                    {page}
                  </button>
                ),
              )}

              {/* Next */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed border"
                style={{
                  borderColor: DARK,
                  color: DARK,
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.backgroundColor = DARK;
                    e.currentTarget.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = DARK;
                }}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-32 bg-gradient-to-r from-stone-900 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-stone-200 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 tracking-wider uppercase mb-8">
            Stay Connected
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Join the{" "}
            <em className="font-light italic">Threads & Gems Family</em>
          </h2>
          <p className="text-lg text-white/70 mb-12 font-light leading-relaxed">
            Be the first to know about new arrivals, exclusive collections, and
            the latest in Ankara and Nigerian native fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-none bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300"
            />
            <button
              className="bg-white px-8 py-4 rounded-none font-medium hover:bg-stone-100 transition-all duration-300 tracking-wide uppercase"
              style={{ color: DARK }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
