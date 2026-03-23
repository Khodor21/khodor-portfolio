"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "./products";
import "./card.css";
import SallaHeader from "./header";
import HeroSection from "./HeroSection";
import ShopByCategory from "./ShopByCategory";

const filters = ["الكل", "وصل حديثاً", "الأكثر مبيعاً", "تخفيضات"];
const sorts = [
  "الأحدث",
  "الأعلى تقييماً",
  "السعر: من الأقل",
  "السعر: من الأعلى",
];

export default function ProductsGrid() {
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [activeSort, setActiveSort] = useState("الأحدث");

  const filtered = products.filter((p) => {
    if (activeFilter === "الكل") return true;
    if (activeFilter === "وصل حديثاً") return p.badge?.type === "new";
    if (activeFilter === "الأكثر مبيعاً") return p.badge?.type === "best";
    if (activeFilter === "تخفيضات") return p.badge?.type === "sale";
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (activeSort === "الأعلى تقييماً") return b.rating - a.rating;
    if (activeSort === "السعر: من الأقل") return a.price - b.price;
    if (activeSort === "السعر: من الأعلى") return b.price - a.price;
    return 0;
  });

  return (
    <main dir="rtl" className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <SallaHeader />
      <HeroSection />
      <ShopByCategory />
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              العبايات
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">{sorted.length} منتج</p>
          </div>
          {/* Sort */}
          <select
            value={activeSort}
            onChange={(e) => setActiveSort(e.target.value)}
            className="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer focus:border-gray-400 transition-colors"
          >
            {sorts.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Filter tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 flex gap-2 overflow-x-auto no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap text-sm px-4 py-1.5 rounded-full border font-medium transition-all duration-200
                ${
                  activeFilter === f
                    ? "bg-gray-900 text-white border-gray-900"
                    : "border-gray-200 text-gray-500 hover:border-gray-400 bg-white"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7 py-8">
        {sorted.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-2xl mb-2">لا توجد منتجات</p>
            <p className="text-sm">جرّب تصفية مختلفة</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-2 lg:gap-6">
            {sorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Footer note */}
      <footer className="text-center py-10 text-xs text-gray-300">
        جميع الأسعار شاملة ضريبة القيمة المضافة
      </footer>
    </main>
  );
}
