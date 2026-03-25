"use client";

import { useRef } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "./products";

// ─── Pull only best-seller products ──────────────────────────────────────────
const bestSellers = products.filter((p) => p.badge?.type === "best");

// ─── Arrow button ─────────────────────────────────────────────────────────────
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
      {direction === "next" ? (
        // Arrow points right (next = scroll left in RTL)
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      )}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function BestSellersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // One card width + gap
  const scrollBy = (dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    // In RTL, "next" means scrolling right (positive scrollLeft direction is reversed)
    const amount = el.clientWidth * 0.85;
    el.scrollBy({
      left: dir === "next" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (bestSellers.length === 0) return null;

  return (
    <section dir="rtl" className="py-10 sm:py-14 bg-[#FAFAF8]">
      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-end justify-between">
        <div>
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-widest text-amber-500 uppercase mb-1">
            ⭐ الأكثر مبيعاً
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
            الأكثر طلباً هذا الموسم
          </h2>
        </div>

        {/* Desktop arrows + View all */}
        <div className="flex items-center gap-2">
          <ArrowButton direction="prev" onClick={() => scrollBy("prev")} />
          <ArrowButton direction="next" onClick={() => scrollBy("next")} />
          <Link
            href="/category/abayas"
            className="
              hidden sm:inline-flex items-center gap-1
              text-sm font-medium text-gray-500
              hover:text-gray-900 transition-colors
              mr-2
            "
          >
            عرض الكل
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rotate-180"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Carousel track ── */}
      {/*
        On mobile  : each card = ~80vw  → 1 full card + ~0.25 of the next peeking
        On sm+     : each card = ~38vw  → ~2.6 cards visible
        On lg+     : each card = 280px  → multiple cards visible
        scroll-snap ensures a snappy swipe feel
      */}
      <div
        ref={scrollRef}
        className="
          flex gap-3 sm:gap-4
          overflow-x-auto
          scroll-smooth
          snap-x snap-mandatory
          [scrollbar-width:none]          /* Firefox */
          [&::-webkit-scrollbar]:hidden   /* Chrome/Safari */
          px-4 sm:px-6 lg:px-8
          pb-2                            /* breathing room for shadow */
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {bestSellers.map((product) => (
          <div
            key={product.id}
            className="
              snap-start flex-shrink-0
              w-[80vw] sm:w-[38vw] lg:w-[280px]
            "
          >
            {/* Carousel card — slightly larger via wrapper scale/padding */}
            <div className="h-full">
              <ProductCard product={product} variant="large" />
            </div>
          </div>
        ))}

        {/* Trailing spacer so last card doesn't hug the edge */}
        <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8" aria-hidden />
      </div>

      {/* ── Mobile "View all" link ── */}
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
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rotate-180"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}