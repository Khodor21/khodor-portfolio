"use client";
import Image from "next/image";
import Link from "next/link";
import Test from "../images/Tirhal/categories/test.png";
import LightingCategory from "../images/Tirhal/categories/Lighting-Category.jpeg";
const categories = [
  { id: "tents", name: "  التخييم والرحلات", slug: "tents", image: Test },
  {
    id: "lighting",
    name: "الإضاءة والمصابيح",
    slug: "lighting",
    image: LightingCategory,
  },
  { id: "cooking", name: "معدات الطبخ", slug: "cooking-gear", image: Test },
  {
    id: "backpacks",
    name: "الحقائب والظهريات",
    slug: "backpacks",
    image: Test,
  },
];

export default function CategoriesSection() {
  return (
    <section dir="rtl" className="w-full bg-white py-10 px-6 md:px-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          تشكيلتنا
        </h2>
        <p className="text-base font-regular text-gray-500 mb-3">
          كل ما تحتاجه لمغامرة لا تُنسى
        </p>
        <div className="w-12 h-[3px] bg-primary mx-auto rounded-full" />
      </div>

      {/* Mobile: 2-col grid — Desktop: single flex row */}
      <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:justify-center md:gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.slug}`}
            className="flex flex-col items-center gap-3 group md:flex-1 md:max-w-[260px]"
          >
            {/* Image Card */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
            </div>

            {/* Label */}
            <p className="text-sm md:text-base font-extrabold text-gray-800 group-hover:text-primary transition-colors duration-200">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
