"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";

export default function CategorySection({ section }) {
  const bannerRatioClass =
    section.banner.ratio === "4:1" ? "aspect-[4/1]" : "aspect-[2/1]";
  const isAnimated = Array.isArray(section.banner.imageUrls);
  const [currentIndex, setCurrentIndex] = useState(0);

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

      {/* 2. Title row + divider */}
      <div className="px-4 md:px-6 container mx-auto mb-4">
        {/* Title and "show more" on same line */}
        <div className="flex items-end justify-between mb-3">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
            {section.title}
          </h2>
          <button
            className="text-sm font-regular underline underline-offset-2"
            style={{ color: "var(--primary-color)" }}
          >
            عرض المزيد
          </button>
        </div>

        {/* Divider: light gray full-width, with short primary segment on the right */}
        <div className="relative w-full h-[1px] bg-black/30">
          <div
            className="absolute right-0 w-16 h-[3px] -top-[0.5px]"
            style={{ backgroundColor: "var(--primary-color)" }}
          />
        </div>
      </div>

      {/* 3. Product Grid */}
      <div className="px-4 md:px-6 container mx-auto">
        {/* Mobile: horizontal scroll carousel */}
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
    </section>
  );
}
