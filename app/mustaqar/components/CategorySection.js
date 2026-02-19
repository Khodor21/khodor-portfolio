import Image from "next/image";
import Link from "next/link";
import ProductCard from "./ProductCard";

export default function CategorySection({ section }) {
  const bannerRatioClass =
    section.banner.ratio === "4:1" ? "aspect-[4/1]" : "aspect-[2/1]";

  return (
    <section className="flex flex-col w-full mb-12 overflow-hidden">
      {/* 1. Banner */}
      <div className={`relative w-full ${bannerRatioClass} mb-6 md:mb-8`}>
        <Image
          src={section.banner.imageUrl}
          alt={section.banner.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="w-full flex flex-col">
        {/* 2. Section Title */}
        <div className="px-4 container mx-auto flex justify-between items-center mb-6">
          <div className="relative inline-block">
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#D1D5FF] -z-10 rounded-sm"></div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1261] px-1 z-10 relative">
              {section.title}
            </h2>
          </div>

          {/* Top Discover More Link (Optional, looks better on mobile) */}
          <Link
            href={section.discoverLink}
            className="text-sm font-bold text-[#0B1261] underline decoration-2 underline-offset-4"
          >
            عرض الكل
          </Link>
        </div>

        {/* 3. Carousel - Mobile Optimized */}
        {/* px-4 adds edge spacing, gap-4 spaces the cards. */}
        <div className="w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4">
          <div className="flex gap-4 px-2 w-max md:w-full">
            {section.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
