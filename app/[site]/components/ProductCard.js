"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Icons matching the target UI
import { BsHandbag } from "react-icons/bs"; // Icon matching the target UI
import { useCart } from "../context/cartContext";
import { slugify } from "../lib/slugify.js";
import AddToCartPopup from "./AddToCartPopup.js";

export default function ProductCard({ product, categoryId }) {
  const { addToCart, toggleFavorite, isFavorite, hydrated } = useCart();
  const favorited = hydrated && isFavorite(product.id);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Ensure link navigation doesn't trigger
    addToCart(product);
    setShowPopup(true);
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <>
      <Link
        href={`/mustaqar/${categoryId}/${slugify(product.name)}`}
        dir="rtl"
        className="group relative bg-white flex flex-col h-full"
        style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif" }}
      >
        {/* ── IMAGE ─────────────────────────────────────────────────────────── */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#F7F7F7] shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 50vw, 25vw"
          />

          {/* Top-right: Cart icon */}
          <button
            onClick={handleAddToCart}
            aria-label="أضف للسلة"
            className="absolute top-2.5 right-2.5 z-10 bg-white rounded-full flex items-center justify-center shadow-sm transition-transform active:scale-90 w-8 h-8"
          >
            <BsHandbag size={15} color="#1A1A1A" />
          </button>

          {/* Top-left: Wishlist heart */}
          <button
            onClick={handleToggleFavorite}
            aria-label="أضف للمفضلة"
            className="absolute top-2.5 left-2.5 z-10 bg-white rounded-full flex items-center justify-center shadow-sm transition-transform active:scale-90 w-8 h-8"
          >
            {favorited ? (
              <AiFillHeart size={16} color="#C0392B" />
            ) : (
              <AiOutlineHeart size={16} color="#1A1A1A" />
            )}
          </button>
        </div>

        {/* ── BODY ──────────────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-1 pt-2.5 pb-3 px-1">
          {/* Product name */}
          <h3 className="font-bold text-[#020202] leading-snug line-clamp-1 text-base">
            {product.name}
          </h3>

          {/* Price row */}
          <div className="flex font-bold items-center gap-1 mt-1 flex-wrap">
            <span className="text-[#1A1A1A] text-sm">
              السعر: {product.price}$
            </span>
          </div>
        </div>
      </Link>

      <AddToCartPopup
        product={product}
        show={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
}
