import Image from "next/image";
import ProductCard from "./ProductCard";

export default function CategorySection({ section }) {
  const bannerRatioClass =
    section.banner.ratio === "4:1" ? "aspect-[4/1]" : "aspect-[2/1]";

  return (
    <section className="flex flex-col w-full overflow-hidden">
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
        <div className="px-4 container mx-auto mb-8 text-center">
          <h2 className="relative inline-block px-2 text-4xl font-extrabold text-[#0B1261] z-10 after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[16px] after:bg-[#C8CEFF] after:-z-10">
            {section.title}
          </h2>
        </div>

        {/* 3. Carousel - Mobile Optimized */}
        <div className="w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4">
          {/* CHANGED HERE: Replaced px-4 with px-8 for more margin at the screen edges */}
          <div className="flex gap-4 px-4 w-max md:w-full">
            {section.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                categoryId={section.id}
              />
            ))}
          </div>
        </div>
        <div className="bg-white border border-[#0B1261] px-2 py-1 w-fit mx-auto rounded text-center mb-6">
          <p className="font-extrabold text-xl text-[#0B1261] ">عرض المزيد</p>
        </div>
      </div>
    </section>
  );
}
