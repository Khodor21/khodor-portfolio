"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";

export default function CategorySection({ section }) {
  const bannerRatioClass =
    section.banner.ratio === "4:1" ? "aspect-[4/1]" : "aspect-[2/1]";
  const isAnimated = Array.isArray(section.banner.imageUrls);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);

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

  // Auto-scroll carousel every 3s
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const CARD_WIDTH = carousel.firstElementChild?.offsetWidth ?? 200;
    const GAP = 16; // gap-4 = 16px
    const STEP = CARD_WIDTH + GAP;

    autoScrollRef.current = setInterval(() => {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft >= maxScroll - 1) {
        // Reached end → smoothly scroll back to start
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: -STEP, behavior: "smooth" }); // RTL: scroll left = move right visually
      }
    }, 3000);

    return () => clearInterval(autoScrollRef.current);
  }, [section.products]);

  // Pause auto-scroll on user interaction, resume after 5s
  const handleUserScroll = () => {
    clearInterval(autoScrollRef.current);
    // Resume after 5s of inactivity
    autoScrollRef.current = setTimeout(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;
      const CARD_WIDTH = carousel.firstElementChild?.offsetWidth ?? 200;
      const GAP = 16;
      const STEP = CARD_WIDTH + GAP;
      autoScrollRef.current = setInterval(() => {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScroll - 1) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carousel.scrollBy({ left: -STEP, behavior: "smooth" });
        }
      }, 3000);
    }, 5000);
  };

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

      {/* 2. Section Title */}
      <div className="px-4 container mx-auto mb-4 text-center">
        <h2 className="relative inline-block px-2 text-2xl font-extrabold text-primary z-10 after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[16px] after:bg-primary/20 after:-z-10">
          {section.title}
        </h2>
      </div>

      {/* 3. Horizontal Auto-Scroll Carousel */}
      <div
        ref={carouselRef}
        onTouchStart={handleUserScroll}
        onMouseDown={handleUserScroll}
        className="mx-2 md:mx-4 overflow-x-auto snap-x snap-mandatory pb-4
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className="flex flex-row gap-4 w-max">
          {section.products.map((product) => (
            <div
              key={product.id}
              className="snap-start flex-shrink-0 w-[160px] sm:w-[200px] md:w-[220px]"
            >
              <ProductCard product={product} categoryId={section.id} />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Show More Button */}
      <div className="bg-white border-[0.5px] border-primary px-2 py-1 w-fit mx-auto rounded text-center mb-6 mt-2">
        <p className="font-regular text-xl text-primary">عرض المزيد</p>
      </div>
    </section>
  );
}
