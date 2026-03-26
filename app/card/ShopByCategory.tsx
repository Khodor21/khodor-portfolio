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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Tajawal:wght@400;700;900&display=swap');

        .category-strip {
          display: flex;
          width: 100%;
          height: clamp(300px, 55vw, 620px);
          overflow: hidden;
          font-family: 'Tajawal', sans-serif;
        }

        .category-panel {
          position: relative;
          overflow: hidden;
          flex: 1;
          cursor: pointer;
          transition: flex 0.6s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .category-panel.featured {
          flex: 1.55;
        }

        .category-panel:hover {
          flex: 1.7;
        }

        .category-panel:hover ~ .category-panel,
        .category-panel:has(~ .category-panel:hover) {
          flex: 0.75;
        }

        .panel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: block;
        }

        .category-panel:hover .panel-img {
          transform: scale(1.06);
        }

        /* Dark vignette at bottom */
        .panel-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.18) 40%,
            transparent 70%
          );
          transition: opacity 0.4s ease;
        }

        .category-panel:hover .panel-overlay {
          opacity: 0.85;
        }

        /* Vertical divider line between panels */
        .category-panel:not(:last-child)::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          background: rgba(255,255,255,0.15);
          z-index: 2;
        }

        /* Label */
        .panel-label {
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          padding: clamp(16px, 3vw, 32px) clamp(14px, 2.5vw, 28px);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          direction: rtl;
          z-index: 3;
        }

        .panel-label-arabic {
          font-family: 'Tajawal', sans-serif;
          font-weight: 900;
          font-size: clamp(22px, 4.5vw, 52px);
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.01em;
          transition: transform 0.4s ease;
          text-shadow: 0 2px 12px rgba(0,0,0,0.4);
        }

        .panel-label-en {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(10px, 1.6vw, 18px);
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.2em;
          line-height: 1;
          margin-top: 2px;
          transition: color 0.3s ease;
        }

        .category-panel:hover .panel-label-arabic {
          transform: translateY(-4px);
        }

        .category-panel:hover .panel-label-en {
          color: rgba(255,255,255,0.85);
        }

        /* Hover CTA bar */
        .panel-cta {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #ffffff;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
          z-index: 4;
        }

        .category-panel:hover .panel-cta {
          transform: scaleX(1);
        }

        /* Section wrapper */
        .categories-section {
          padding: clamp(24px, 4vw, 56px) 0;
          background: #f5f5f5;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 clamp(16px, 4vw, 48px);
          margin-bottom: clamp(14px, 2.5vw, 28px);
          direction: rtl;
        }

        .section-title {
          font-family: 'Tajawal', sans-serif;
          font-weight: 900;
          font-size: clamp(20px, 3vw, 34px);
          color: #111;
          line-height: 1.2;
        }

        .section-title span {
          color: #888;
          font-weight: 400;
        }

        .view-all-link {
          font-family: 'Tajawal', sans-serif;
          font-size: clamp(12px, 1.4vw, 15px);
          color: #111;
          text-decoration: none;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #111;
          padding-bottom: 1px;
          transition: opacity 0.2s;
          white-space: nowrap;
        }

        .view-all-link:hover {
          opacity: 0.5;
        }

        /* Mobile: stacked layout */
        @media (max-width: 640px) {
          .category-strip {
            flex-direction: column;
            height: auto;
          }

          .category-panel,
          .category-panel.featured {
            flex: none;
            height: clamp(180px, 55vw, 280px);
            transition: none;
          }

          .category-panel:not(:last-child)::after {
            display: none;
          }

          .category-panel:hover {
            flex: none;
          }

          .panel-label-arabic {
            font-size: clamp(28px, 8vw, 44px);
          }
        }

        /* Tablet: compact */
        @media (min-width: 641px) and (max-width: 1023px) {
          .category-strip {
            height: clamp(260px, 45vw, 420px);
          }
        }
      `}</style>

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
