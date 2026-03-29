"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";

export default function CategorySection({ section }) {
  const bannerRatioClass =
    section.banner.ratio === "4:1" ? "aspect-[4/1]" : "aspect-[2/1]";
  const isAnimated = Array.isArray(section.banner.imageUrls);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Banner animation
  useEffect(() => {
    if (!isAnimated) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === section.banner.imageUrls.length - 1 ? 0 : prev + 1,
      );
    }, 500);
    return () => clearInterval(interval);
  }, [isAnimated, section.banner.imageUrls]);

  const bannerSrc = isAnimated
    ? section.banner.imageUrls[currentIndex]
    : section.banner.imageUrl;

  return (
    <section dir="rtl" className="flex flex-col w-full overflow-hidden">
      {/* 1. Banner */}
      <div className={`relative w-full ${bannerRatioClass} mb-6 md:mb-8`}>
        <Image
          src={bannerSrc}
          alt={section.banner.alt}
          fill
          className="object-cover transition-opacity duration-300"
          priority
        />
      </div>

      {/* 2. Title row — right-aligned with underline accent */}
      <div className="px-4 md:px-6 container mx-auto mb-4 flex items-center justify-between">
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
            {section.title}
          </h2>
          <div className="w-full h-[2px] bg-gray-900" />
        </div>

        {/* Prev / Next arrows matching the image */}
        <div className="flex items-center gap-2 mr-4">
          <button className="w-7 h-7 border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="w-7 h-7 border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* 3. Product Grid — carousel on mobile, 3 cols tablet, 4 cols desktop */}
      <div className="px-4 md:px-6 container mx-auto">
        {/* Mobile: single-row horizontal scroll carousel */}
        <div className="flex flex-row gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:hidden">
          {section.products.map((product) => (
            <div key={product.id} className="snap-start shrink-0 w-[45vw]">
              <ProductCard product={product} categoryId={section.id} />
            </div>
          ))}
        </div>

        {/* Tablet + Desktop: grid */}
        <div className="hidden md:grid sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {section.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categoryId={section.id}
            />
          ))}
        </div>
      </div>

      {/* 4. Show More Button */}
      <div className="mt-6 mb-8 flex justify-center">
        <button className="bg-white border border-primary px-8 py-2 rounded text-primary font-bold text-base hover:bg-primary hover:text-white transition-colors duration-200">
          عرض المزيد
        </button>
      </div>
    </section>
  );
}
