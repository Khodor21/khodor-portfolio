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
    <section className="flex flex-col w-full overflow-hidden">
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

      {/* 2. Section Title */}
      <div className="px-4 container mx-auto mb-8 text-center">
        <h2 className="relative inline-block px-2 text-4xl font-extrabold text-[#0B1261] z-10 after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[16px] after:bg-[#C8CEFF] after:-z-10">
          {section.title}
        </h2>
      </div>

      {/* 3. Horizontal Scroll Carousel */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4">
        <div className="flex gap-4 px-2">
          {section.products.map((product) => (
            <div
              key={product.id}
              className="
                flex-shrink-0
                w-1/2       /* phones: 2 cards per view */
                sm:w-1/3    /* tablets: 3 cards per view */
                md:w-1/4    /* desktops: 4 cards per view */
                snap-start
              "
            >
              <ProductCard product={product} categoryId={section.id} />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Show More Button */}
      <div className="bg-white border-2 border-[#0B1261] px-2 py-1 w-fit mx-auto rounded text-center mb-6">
        <p className="font-extrabold text-xl text-[#0B1261]">عرض المزيد</p>
      </div>
    </section>
  );
}
