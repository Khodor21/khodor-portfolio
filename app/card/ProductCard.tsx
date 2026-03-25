"use client";
import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

export interface Product {
  id: number;
  slug: string;
  // brand: string;
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

export default function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleWish = (e: React.MouseEvent) => {
    e.preventDefault();
    setWished((w) => !w);
  };

  // Savings amount shown in badge like ZBrand
  const savings = product.oldPrice ? product.oldPrice - product.price : null;

  return (
    <Link
      href={`/card/description/${product.slug}`}
      dir="rtl"
      className="group relative bg-white flex flex-col h-full"
      style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif" }}
    >
      {/* ── IMAGE AREA ── */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#F7F7F7] shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 50vw, 25vw"
        />

        {/* Top-left: Cart icon */}
        <button
          onClick={handleAdd}
          aria-label="أضف للسلة"
          className="absolute top-2.5 right-2.5 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm transition-transform active:scale-90"
        >
          {added ? (
            <span className="text-[10px] text-green-600 font-bold">✓</span>
          ) : (
            <BsHandbag size={15} color="#1A1A1A" />
          )}
        </button>

        {/* Top-right: Wishlist heart */}
        <button
          onClick={handleWish}
          aria-label="أضف للمفضلة"
          className="absolute top-2.5 left-2.5 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm transition-transform active:scale-90"
        >
          {wished ? (
            <AiFillHeart size={16} color="#C0392B" />
          ) : (
            <AiOutlineHeart size={16} color="#1A1A1A" />
          )}
        </button>

        {/* Bottom-right: Savings badge — exactly like ZBrand "خصم ٢٠.٠٠ ﷼" */}
        {savings && (
          <span className="absolute bottom-2.5 right-2.5 z-10 bg-[#C0392B] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
            {savings.toLocaleString("ar-SA")} ﷼ خصم
          </span>
        )}
      </div>

      {/* ── BODY ── */}
      <div className="pt-2.5 pb-3 flex flex-col gap-1">
        {/* Product name */}
        <h3 className="text-sm font-semibold text-[#1A1A1A] leading-snug line-clamp-1">
          {product.name}
        </h3>

        {/* Brand subtitle */}
        {/* {product.brand && (
          <p className="text-xs text-gray-400 leading-none">
            {product.brand}
          </p>
        )} */}

        {/* Price row: old (strikethrough) + new */}
        <div className="flex font-bold items-center gap-1 mt-1 flex-wrap">
          <span
            className={`text-sm ${
              product.oldPrice ? "text-[#C0392B]" : "text-[#1A1A1A]"
            }`}
          >
            {product.price.toLocaleString("ar-SA")}﷼
          </span>{" "}
          {product.oldPrice && (
            <span className="text-[16px] text-gray-400 line-through">
              {product.oldPrice.toLocaleString("ar-SA")}﷼
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
