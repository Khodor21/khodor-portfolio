"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { TbShoppingBagPlus } from "react-icons/tb";

export interface Product {
  id: number;
  brand: string;
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

const badgeStyles: Record<string, string> = {
  new: "bg-[#3C3489] text-white",
  best: "bg-[#0F6E56] text-white",
};
const badgeLabels: Record<string, string> = {
  new: "جديد",
  best: "الأكثر مبيعاً",
};

export default function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const isLowStock = product.stock !== undefined && product.stock <= 5;
  const stockPct =
    product.stock !== undefined && product.stockTotal
      ? Math.round((product.stock / product.stockTotal) * 100)
      : null;

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const showDiscountBadge = !!product.discount;
  const showTextBadge =
    !showDiscountBadge && product.badge && product.badge.type !== "sale";

  return (
    <div
      dir="rtl"
      className="group relative bg-white rounded overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 h-full"
    >
      {/* ── IMAGE — slightly taller ratio ── */}
      <div className="relative w-full aspect-[9/16] sm:aspect-[2/3]  overflow-hidden bg-gray-100 shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 25vw"
        />

        {/* Gradient overlay */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Badge */}
        {showDiscountBadge && (
          <span className="absolute top-2.5 right-2.5 text-[12px] font-bold px-2.5 py-1 rounded-full bg-[#C0392B] text-white">
            -{product.discount}%
          </span>
        )}
        {showTextBadge && product.badge && (
          <span
            className={`absolute top-2.5 right-2.5 text-[11px] font-bold px-2.5 py-1 rounded-full ${badgeStyles[product.badge.type]}`}
          >
            {badgeLabels[product.badge.type]}
          </span>
        )}

        {/* Icons bottom center — hover on desktop */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 sm:flex">
          <button
            onClick={() => setWished((w) => !w)}
            aria-label="أضف للمفضلة"
            className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow transition-transform hover:scale-110 active:scale-95"
          >
            {wished ? (
              <AiFillHeart size={14} color="#C0392B" />
            ) : (
              <AiOutlineHeart size={14} color="#333" />
            )}
          </button>
          <button
            aria-label="عرض المنتج"
            className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow transition-transform hover:scale-110 active:scale-95"
          >
            <AiOutlineEye size={14} color="#333" />
          </button>
        </div>

        {/* Icons — always visible on mobile */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-[3px] sm:hidden">
          <button
            onClick={() => setWished((w) => !w)}
            aria-label="أضف للمفضلة"
            className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow"
          >
            {wished ? (
              <AiFillHeart size={14} color="#C0392B" />
            ) : (
              <AiOutlineHeart size={14} color="#333" />
            )}
          </button>
          <button
            aria-label="عرض المنتج"
            className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow"
          >
            <AiOutlineEye size={14} color="#333" />
          </button>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="px-3 pt-2.5 flex flex-col gap-2 flex-1">
        {/* Name */}
        <h3 className="text-sm sm:text-base text-gray-900 leading-snug">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-end gap-1.5 flex-wrap">
          <span className="text-base font-bold text-gray-900">
            {product.price} ر.س
          </span>
          {product.oldPrice && (
            <span className="text-[11px] text-gray-400 line-through">
              {product.oldPrice} ر.س
            </span>
          )}
        </div>

        {/* Colors */}
        <div className="flex gap-1.5 flex-wrap">
          {product.colors.map((c, i) => (
            <div
              key={i}
              title={c.name}
              className="w-4 h-4 rounded-full border-[2px] border-white shadow-sm ring-1 ring-gray-200"
              style={{ background: c.hex }}
            />
          ))}
        </div>

        {/* Low stock */}
        {isLowStock && stockPct !== null ? (
          <div>
            <p className="text-[10px] text-[#C0392B] font-medium mb-1">
              باقي {product.stock} قطع فقط
            </p>
            <div className="h-0.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C0392B] rounded-full"
                style={{ width: `${stockPct}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="h-[22px]" />
        )}

        {/* Spacer pushes button to bottom */}
        <div className="flex-1" />
      </div>

      {/* ── CTA — outside body, flush to card bottom, full width, no radius at bottom ── */}
      <button
        onClick={handleAdd}
        className={`w-full py-3 text-[14px] transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2 shrink-0
          ${
            added
              ? "bg-[#0F6E56] text-white"
              : "bg-[#9F6E56] text-white hover:bg-[#7a5240]"
          }`}
      >
        <TbShoppingBagPlus size={16} />
        {added ? "تمت الإضافة ✓" : "أضف إلى السلة"}
      </button>
    </div>
  );
}
