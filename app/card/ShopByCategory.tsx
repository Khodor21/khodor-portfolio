"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CategoryOne from "./images/Category-1.jpeg";
interface Category {
  id: number;
  name: string;
  description?: string;
  image: string;
  href: string;
  count?: number;
}

// Mock Data
const categoriesData: Category[] = [
  {
    id: 1,
    name: "عبايات يومية",
    description: "أناقة وراحة",
    image: CategoryOne,
    href: "/category/casual",
    count: 45,
  },
  {
    id: 2,
    name: "عبايات رسمية",
    description: "للمناسبات",
    image: CategoryOne,
    href: "/category/formal",
    count: 23,
  },
  {
    id: 3,
    name: "فساتين سهره",
    description: "تصاميم فاخرة",
    image: CategoryOne,
    href: "/category/dresses",
    count: 18,
  },
  {
    id: 4,
    name: "إكسسوارات",
    description: "لمسة نهائية",
    image: CategoryOne,
    href: "/category/accessories",
    count: 60,
  },
];

export default function ShopByCategory() {
  return (
    <section dir="rtl" className="py-8 md:py-16">
      <div className="container">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-2 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              تصفحي حسب القسم
            </h2>
            
          <Link
            href="/category"
            className="hidden md:flex items-center text-[#C0392B] font-medium text-sm hover:underline"
          >
            عرض الكل
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {categoriesData.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative block rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container - Aspect Ratio 3/4 for tall cards */}
              <div className="relative w-full aspect-[3/4] bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 right-0 left-0 p-4 md:p-5">
                <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-white/80 text-xs md:text-sm mb-2">
                    {category.description}
                  </p>
                )}

                {/* Visual CUE */}
                <div className="flex items-center gap-1 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                  <span>تسوقي الآن</span>
                  <svg
                    className="w-4 h-4 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
