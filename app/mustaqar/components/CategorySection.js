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
        <div className="px-4 container mx-auto mb-6">
          <h2 className="text-3xl text-center md:text-3xl font-extrabold text-[#0B1261] px-1 z-10 relative">
            {section.title}
          </h2>
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
