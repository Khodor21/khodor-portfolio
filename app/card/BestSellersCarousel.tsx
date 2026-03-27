"use client";

import { useRef } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "./products";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";

// ─── Filter best sellers ──────────────────────────────────────────────────────
const bestSellers = products.filter((p) => p.badge?.type === "best");

// ─── Arrow Button ─────────────────────────────────────────────────────────────
function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "السابق" : "التالي"}
      className="
        hidden sm:flex items-center justify-center
        w-10 h-10 rounded-full
        bg-white border border-gray-200
        text-gray-600 hover:text-gray-900 hover:border-gray-400
        shadow-sm hover:shadow-md
        transition-all duration-200 active:scale-95
        flex-shrink-0
      "
    >
      {direction === "prev" ? (
        <FiChevronLeft size={18} />
      ) : (
        <FiChevronRight size={18} />
      )}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function BestSellersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "next" ? -el.clientWidth * 0.85 : el.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  if (bestSellers.length === 0) return null;

  return (
    <section dir="rtl" className="py-10 container sm:py-14  bg-[#FAFAF8]">
      {/* ── Header ── */}
      <div className=" mb-6 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold tracking-widest text-amber-500 uppercase mb-1">
            ⭐ الأكثر مبيعاً
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
            الأكثر طلباً هذا الموسم
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <ArrowButton direction="prev" onClick={() => scrollBy("prev")} />
          <ArrowButton direction="next" onClick={() => scrollBy("next")} />
          <Link
            href="/category/abayas"
            className="
              hidden sm:inline-flex items-center gap-1
              text-sm font-medium text-gray-500
              hover:text-gray-900 transition-colors mr-2
            "
          >
            عرض الكل
            <MdArrowForwardIos size={12} className="rotate-180" />
          </Link>
        </div>
      </div>

      {/* ── Carousel Track ── */}
      <div
        ref={scrollRef}
        style={{ WebkitOverflowScrolling: "touch" }}
        className="
          flex gap-3 sm:gap-4
          overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
           pb-2
        "
      >
        {bestSellers.map((product) => (
          <div
            key={product.id}
            className="snap-start flex-shrink-0 w-[80vw] sm:w-[38vw] lg:w-[calc(25%-9px)]"
          >
            <ProductCard product={product} variant="large" />
          </div>
        ))}

        {/* Trailing spacer */}
        <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8" aria-hidden />
      </div>

      {/* ── Mobile View All ── */}
      <div className="sm:hidden mt-5 flex justify-center">
        <Link
          href="/category/abayas"
          className="
            inline-flex items-center gap-1.5
            text-sm font-medium text-gray-600
            border border-gray-200 rounded-full
            px-5 py-2 bg-white
            hover:border-gray-400 transition-colors
          "
        >
          عرض جميع المنتجات
          <MdArrowForwardIos size={12} className="rotate-180" />
        </Link>
      </div>
    </section>
  );
}
