"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import ProductCard from "../../ProductCard";
import ProductCardSkeleton from "../../ProductCardSkeleton";
import { products } from "../../products";

// ─── Category metadata map ────────────────────────────────────────────────────
const CATEGORY_META: Record<
  string,
  { label: string; description: string }
> = {
  abayas: {
    label: "العبايات",
    description: "تشكيلة راقية من العبايات العصرية والكلاسيكية",
  },
  dresses: {
    label: "الفساتين",
    description: "فساتين أنيقة لكل مناسبة",
  },
  accessories: {
    label: "الإكسسوارات",
    description: "إكسسوارات تُكمل إطلالتك",
  },
  scarves: {
    label: "الأوشحة",
    description: "أوشحة فاخرة بألوان متعددة",
  },
};

const sorts = [
  "الأحدث",
  "الأعلى تقييماً",
  "السعر: من الأقل",
  "السعر: من الأعلى",
];

const SKELETON_COUNT = 8;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const meta = CATEGORY_META[params.slug];

  const pageLabel = meta?.label ?? params.slug;
  const pageDescription = meta?.description ?? "";

  // ── State ──────────────────────────────────────────────────────────────────
  const [activeSort, setActiveSort] = useState("الأحدث");
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);

  // Simulate initial page load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleSortChange = (sort: string) => {
    setIsFiltering(true);
    setActiveSort(sort);
    setTimeout(() => setIsFiltering(false), 600);
  };

  // ── Sort Logic ─────────────────────────────────────────────────────────────
  // We filter by 'All' implicitly now since filter buttons were removed
  const sorted = [...products].sort((a, b) => {
    if (activeSort === "الأعلى تقييماً") return b.rating - a.rating;
    if (activeSort === "السعر: من الأقل") return a.price - b.price;
    if (activeSort === "السعر: من الأعلى") return b.price - a.price;
    return 0;
  });

  const showSkeleton = isLoading || isFiltering;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div dir="rtl" className="min-h-screen bg-[#FAFAF8] font-sans">
      
      {/* ── Clean Minimal Header ── */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Right Side: Title & Count */}
          <div className="flex flex-col justify-center">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
              {pageLabel}
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              {isLoading ? (
                <span className="inline-block w-10 h-3 rounded bg-gray-200 animate-pulse" />
              ) : (
                <>{sorted.length} منتج</>
              )}
            </p>
          </div>

          {/* Left Side: Sort Dropdown */}
          <div className="flex items-center gap-2">
            <select
              value={activeSort}
              onChange={(e) => handleSortChange(e.target.value)}
              disabled={isLoading}
              className="text-xs sm:text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer focus:border-gray-400 transition-colors disabled:opacity-40 shadow-sm"
            >
              {sorts.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

        </div>
      </header>

      {/* ── Products Section ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Grid */}
        <div>
          {showSkeleton ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : sorted.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-xl font-medium mb-2">لا توجد منتجات</p>
              <p className="text-sm">جرّب تصفية مختلفة</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {sorted.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="text-center py-10 text-xs text-gray-300 border-t mt-12">
        جميع الأسعار شاملة ضريبة القيمة المضافة
      </footer>
    </div>
  );
}