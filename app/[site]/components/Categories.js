import Image from "next/image";
import Link from "next/link";

import cat1 from "../images/Tirhal/categories/category-1.svg";
import cat2 from "../images/Tirhal/categories/category-2.svg";
import cat3 from "../images/Tirhal/categories/category-3.svg";
import cat4 from "../images/Tirhal/categories/category-4.svg";

const categories = [
  { id: 1, image: cat1, alt: "قسم الأحذية", href: "/tirhal/shoes" },
  { id: 2, image: cat2, alt: "قسم الحقائب", href: "/tirhal/bags" },
  { id: 3, image: cat3, alt: "قسم الرحلات", href: "/tirhal/trips" },
  { id: 4, image: cat4, alt: "قسم الألبسة", href: "/tirhal/clothes" },
];

export default function CategoriesSection() {
  return (
    <section className="w-full py-8 px-4">
      {/* Title */}
      <h2 className="text-primary text-center text-4xl font-bold mb-3">
        أقسام الموقع
      </h2>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-3 mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={cat.href}
            className="relative w-full aspect-video rounded-xs overflow-hidden"
          >
            <Image
              src={cat.image}
              alt={cat.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
