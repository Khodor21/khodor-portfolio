"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  badge?: { type: "new" | "sale" | "best" };
  colors: { hex: string; name: string }[];
  sizes: string[];
  soldOut?: string[];
  stock?: number;
  stockTotal?: number;
  image: StaticImageData;
}

interface ProductCardProps {
  product: Product;
  /** "large" → used in BestSellersCarousel (bigger icons, text, padding) */
  variant?: "default" | "large";
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProductCard({
  product,
  variant = "default",
}: ProductCardProps) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const isLarge = variant === "large";

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleWish = (e: React.MouseEvent) => {
    e.preventDefault();
    setWished((w) => !w);
  };

  // ZBrand-style: show raw SAR savings, not a percentage
  const savings = product.oldPrice ? product.oldPrice - product.price : null;

  return (
    <Link
      href={`/card/description/${product.slug}`}
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
          sizes={
            isLarge
              ? "(max-width: 640px) 80vw, (max-width: 1024px) 38vw, 280px"
              : "(max-width: 640px) 50vw, 25vw"
          }
        />

        {/* Top-right: Cart icon */}
        <button
          onClick={handleAdd}
          aria-label="أضف للسلة"
          className={`
            absolute top-2.5 right-2.5 z-10
            bg-white rounded-full flex items-center justify-center
            shadow-sm transition-transform active:scale-90
            ${isLarge ? "w-9 h-9" : "w-8 h-8"}
          `}
        >
          {added ? (
            <span className="text-[10px] text-green-600 font-bold">✓</span>
          ) : (
            <BsHandbag size={isLarge ? 17 : 15} color="#1A1A1A" />
          )}
        </button>

        {/* Top-left: Wishlist heart */}
        <button
          onClick={handleWish}
          aria-label="أضف للمفضلة"
          className={`
            absolute top-2.5 left-2.5 z-10
            bg-white rounded-full flex items-center justify-center
            shadow-sm transition-transform active:scale-90
            ${isLarge ? "w-9 h-9" : "w-8 h-8"}
          `}
        >
          {wished ? (
            <AiFillHeart size={isLarge ? 18 : 16} color="#C0392B" />
          ) : (
            <AiOutlineHeart size={isLarge ? 18 : 16} color="#1A1A1A" />
          )}
        </button>

        {/* Bottom-right: Savings badge (ZBrand style) */}
        {savings && (
          <span
            className={`
              absolute bottom-2.5 right-2.5 z-10
              bg-[#C0392B] text-white font-bold rounded-full
              ${isLarge ? "text-xs px-3 py-1.5" : "text-[11px] px-2.5 py-1"}
            `}
          >
            {savings.toLocaleString("ar-SA")} ﷼ خصم
          </span>
        )}
      </div>

      {/* ── BODY ──────────────────────────────────────────────────────────── */}
      <div
        className={`
          flex flex-col gap-1
          ${isLarge ? "pt-3 pb-4 px-2" : "pt-2.5 pb-3 px-1"}
        `}
      >
        {/* Product name */}
        <h3
          className={`
            font-semibold text-[#1A1A1A] leading-snug line-clamp-1
            ${isLarge ? "text-base" : "text-sm"}
          `}
        >
          {product.name}
        </h3>

        {/* Price row: new price (red if discounted) + old price strikethrough */}
        <div className="flex font-bold items-center gap-1 mt-1 flex-wrap">
          <span
            className={`
              ${product.oldPrice ? "text-[#C0392B]" : "text-[#1A1A1A]"}
              ${isLarge ? "text-base" : "text-sm"}
            `}
          >
            {product.price.toLocaleString("ar-SA")}﷼
          </span>

          {product.oldPrice && (
            <span
              className={`
                text-gray-400 line-through
                ${isLarge ? "text-sm" : "text-[13px]"}
              `}
            >
              {product.oldPrice.toLocaleString("ar-SA")}﷼
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}