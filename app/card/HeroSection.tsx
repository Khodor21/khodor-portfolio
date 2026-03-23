"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {
  MdLocalShipping,
  MdVerifiedUser,
  MdSupportAgent,
} from "react-icons/md";

// Mock image import - replace with your actual StaticImageData or URL
// import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-200">
        {/* For static import use <Image src={heroBg} ... /> */}
        <Image
          src="https://placehold.co/1920x1080/EEE/EEE.png" // Replace with actual image
          alt="مجموعة العبايات الجديدة"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-16 md:pb-24">
        {/* Trust Badges - Hidden on very small screens */}
        <div className="hidden md:flex gap-6 mb-6">
          <div className="flex items-center gap-2 text-white/90 text-sm backdrop-blur-sm bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
            <MdLocalShipping size={16} />
            <span>شحن مجاني</span>
          </div>
          <div className="flex items-center gap-2 text-white/90 text-sm backdrop-blur-sm bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
            <MdVerifiedUser size={16} />
            <span>ضمان الجودة</span>
          </div>
        </div>

        {/* Main Text */}
        <div className="max-w-lg">
          <span className="inline-block bg-[#C0392B] text-white text-[11px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            مجموعة حصرية
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
            تشكيلة العبايات <br />
            <span className="text-gray-100">للموسم الجديد</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-md leading-relaxed">
            اكتشفي أحدث التصاميم العصرية بلمسة تقليدية، مصنوعة من أجود الخامات
            لراحتك وأناقتك.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/category/new-arrivals"
            className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg group"
          >
            تسوقي الآن
            <HiOutlineArrowLeft
              className="transform group-hover:-translate-x-1 transition-transform"
              size={18}
            />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-transparent text-white font-bold px-6 py-3 rounded-lg border border-white/40 hover:bg-white/10 transition-all duration-200"
          >
            تعرفي علينا
          </Link>
        </div>
      </div>
    </section>
  );
}
