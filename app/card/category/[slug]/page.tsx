"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import ProductCard from "../../ProductCard";
import ProductCardSkeleton from "../../Productcardskeleton";
import { products } from "../../products";
import { PiSlidersHorizontalThin } from "react-icons/pi";

// ─── Category metadata map ────────────────────────────────────────────────────
const CATEGORY_META: Record<string, { label: string; description: string }> = {
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
  "الأكثر شيوعاً",
  "من الأقل إلى الأعلى",
  "من الأعلى إلى الأقل",
];

const SKELETON_COUNT = 8;

// ─── Filter Modal ─────────────────────────────────────────────────────────────
function FilterModal({
  isOpen,
  onClose,
  activeSort,
  onApply,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeSort: string;
  onApply: (sort: string, minPrice: string, maxPrice: string, discountOnly: boolean) => void;
}) {
  const [selectedSort, setSelectedSort] = useState(activeSort);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [discountOnly, setDiscountOnly] = useState(false);

  useEffect(() => {
    setSelectedSort(activeSort);
  }, [activeSort, isOpen]);

  const handleReset = () => {
    setSelectedSort("الأحدث");
    setMinPrice("");
    setMaxPrice("");
    setDiscountOnly(false);
  };

  const handleSave = () => {
    onApply(selectedSort, minPrice, maxPrice, discountOnly);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      dir="rtl"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full sm:max-w-sm rounded-t-2xl sm:rounded-2xl shadow-xl p-5 z-10">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-base font-bold text-gray-900 mb-4 text-right">
          ترتيب حسب
        </h2>

        {/* Sort Pills */}
        <div className="flex flex-wrap gap-2 mb-5 justify-end">
          {sorts.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSort(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                selectedSort === s
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Price Range */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-xs text-gray-500 text-right">إلى</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-right outline-none focus:border-gray-400 transition-colors"
            />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-xs text-gray-500 text-right">من</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-right outline-none focus:border-gray-400 transition-colors"
            />
          </div>
        </div>

        {/* Discount Only */}
        <label className="flex items-center justify-end gap-2 mb-6 cursor-pointer">
          <span className="text-sm text-gray-700">عرض المخفضة فقط</span>
          <input
            type="checkbox"
            checked={discountOnly}
            onChange={(e) => setDiscountOnly(e.target.checked)}
            className="w-4 h-4 accent-gray-900 cursor-pointer"
          />
        </label>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="flex-1 bg-gray-900 text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            حفظ
          </button>
          <button
            onClick={handleReset}
            className="flex-1 border border-gray-200 text-gray-700 rounded-xl py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            إعادة تعيين
          </button>
        </div>

      </div>
    </div>
  );
}

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [discountOnly, setDiscountOnly] = useState(false);

  // Simulate initial page load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleApplyFilters = (
    sort: string,
    min: string,
    max: string,
    discount: boolean
  ) => {
    setIsFiltering(true);
    setActiveSort(sort);
    setMinPrice(min);
    setMaxPrice(max);
    setDiscountOnly(discount);
    setTimeout(() => setIsFiltering(false), 600);
  };

  // ── Sort & Filter Logic ────────────────────────────────────────────────────
  let sorted = [...products];

  if (discountOnly) {
    sorted = sorted.filter((p) => p.discount);
  }
  if (minPrice !== "") {
    sorted = sorted.filter((p) => p.price >= parseFloat(minPrice));
  }
  if (maxPrice !== "") {
    sorted = sorted.filter((p) => p.price <= parseFloat(maxPrice));
  }

  sorted.sort((a, b) => {
    if (activeSort === "الأكثر شيوعاً") return b.rating - a.rating;
    if (activeSort === "من الأقل إلى الأعلى") return a.price - b.price;
    if (activeSort === "من الأعلى إلى الأقل") return b.price - a.price;
    return 0;
  });

  const showSkeleton = isLoading || isFiltering;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div dir="rtl" className="min-h-screen bg-[#FAFAF8] container">

      {/* ── Header ── */}
      <header className="">
        <div className="h-16 flex items-end justify-between">

          {/* Right Side: Title & Breadcrumb */}
          <div className="flex flex-col gap-0.5">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
              {pageLabel}
            </h1>
            <p className="text-xs text-gray-400">
              الرئيسية / {pageLabel}
            </p>
          </div>

          {/* Left Side: Filter Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            disabled={isLoading}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors disabled:opacity-40"
          >
            <PiSlidersHorizontalThin className="w-3 h-3" />
            <span className="text-xs font-bold">تصفية</span>
          </button>

        </div>
      </header>

      {/* ── Filter Modal ── */}
      <FilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activeSort={activeSort}
        onApply={handleApplyFilters}
      />

      {/* ── Products Section ── */}
      <section className="py-6">
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

    </div>
  );
}