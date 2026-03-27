"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CategoryOne from "./images/Category-1.jpeg";

interface Category {
  id: number;
  name: string;
  nameEn: string;
  image: string | StaticImageData;
  href: string;
  featured?: boolean;
}

const categoriesData: Category[] = [
  {
    id: 1,
    name: "أطفال",
    nameEn: "KIDS",
    image: CategoryOne,
    href: "/category/kids",
  },
  {
    id: 2,
    name: "نساء",
    nameEn: "WOMEN",
    image: CategoryOne,
    href: "/category/women",
    featured: true,
  },
  {
    id: 3,
    name: "رجال",
    nameEn: "MEN",
    image: CategoryOne,
    href: "/category/men",
  },
];

export default function ShopByCategory() {
  return (
    <>
      <section className="categories-section">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            تسوق حسب <span>القسم</span>
          </h2>
          <Link href="/categories" className="view-all-link">
            عرض الكل
          </Link>
        </div>

        {/* Panel Strip */}
        <div className="category-strip">
          {categoriesData.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={`category-panel${cat.featured ? " featured" : ""}`}
              aria-label={cat.name}
            >
              {/* Background Image */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="panel-img"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={cat.featured}
              />

              {/* Gradient overlay */}
              <div className="panel-overlay" />

              {/* Bottom Label */}
              <div className="panel-label">
                <span className="panel-label-arabic">{cat.name}</span>
                <span className="panel-label-en">{cat.nameEn}</span>
              </div>

              {/* Bottom line on hover */}
              <div className="panel-cta" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
