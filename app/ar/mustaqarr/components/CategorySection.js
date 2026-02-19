import Image from "next/image";
import Link from "next/link";
import ProductCard from "./ProductCard";

export default function CategorySection({ section }) {
  // Determine aspect ratio class dynamically based on the JSON
  const bannerRatioClass =
    section.banner.ratio === "4:1" ? "aspect-[4/1]" : "aspect-[2/1]";

  return (
    <section className="flex flex-col w-full mb-12">
      {/* 1. Banner */}
      <div className={`relative w-full w-full ${bannerRatioClass} mb-8`}>
        <Image
          src={section.banner.imageUrl}
          alt={section.banner.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="px-4 container mx-auto flex flex-col items-center">
        {/* 2. Section Title with Highlight */}
        <div className="relative mb-8 inline-block">
          {/* Highlight Background */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#D1D5FF] -z-10 rounded-sm"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1261] px-2 z-10 relative">
            {section.title}
          </h2>
        </div>

        {/* 3. Carousel (Native CSS Scroll) */}
        <div className="w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4">
          <div className="flex gap-4">
            {section.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* 4. Discover More Button */}
        <Link
          href={section.discoverLink}
          className="mt-6 border border-[#0B1261] text-[#0B1261] font-bold py-2 px-8 rounded-md transition hover:bg-[#0B1261] hover:text-white"
        >
          عرض المزيد
        </Link>
      </div>
    </section>
  );
}
