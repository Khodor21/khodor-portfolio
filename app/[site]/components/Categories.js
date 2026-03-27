"use client";
import Image from "next/image";
import Link from "next/link";
import Test from "../images/Tirhal/categories/test.png";
const categories = [
  {
    id: "tents",
    name: "خيام التخييم",
    slug: "tents",
    image: Test,
  },

  {
    id: "lighting",
    name: "الإضاءة والمصابيح",
    slug: "lighting",
    image: Test,
  },
  {
    id: "cooking",
    name: "معدات الطبخ",
    slug: "cooking-gear",
    image: Test,
  },
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
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
          تشكيلتنا
        </h2>
        <p className="text-base font-regular text-gray-500 mb-3">
          كل ما تحتاجه لمغامرة لا تُنسى
        </p>
        <div className="w-12 h-[3px] bg-primary mx-auto rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.slug}`}
            className="flex flex-col items-center gap-3 group"
          >
            {/* Image Card */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
            </div>

            {/* Label */}
            <p className="text-sm md:text-base font-bold text-gray-800 group-hover:text-primary transition-colors duration-200">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
