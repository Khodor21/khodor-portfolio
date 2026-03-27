"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Video from "./images/Hero-Video.mp4";
import VideoDesktop from "./images/Hero-Desktop.mp4";

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* ── BACKGROUND VIDEO ── */}
      {/* Mobile video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/Hero-Abaya.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* Desktop video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/Hero-Abaya.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
      >
        <source src={VideoDesktop} type="video/mp4" />
      </video>

      {/* ── OVERLAY ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20 z-10" />

      {/* ── FLOATING FEATURE BADGES ── */}

      {/* Badge 1 – top right */}
      <div className="absolute top-[14%] right-6 md:right-14 z-20 rotate-[-4deg]">
        <span className="inline-flex items-center gap-1.5 bg-white/8 backdrop-blur-md border border-white/15 text-white/80 text-[10px] font-semibold px-3.5 py-1.5 rounded-full tracking-widest uppercase shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
          توصيل مجاني
        </span>
      </div>

      {/* Badge 2 – mid-left, slightly tilted the other way */}
      <div className="absolute top-[38%] left-4 md:left-12 z-20 rotate-[3.5deg]">
        <span className="inline-flex items-center gap-1.5 bg-white/8 backdrop-blur-md border border-white/15 text-white/75 text-[10px] font-semibold px-3.5 py-1.5 rounded-full tracking-widest uppercase shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-300 inline-block" />
          جودة مضمونة
        </span>
      </div>

      {/* Badge 3 – lower right, desktop only */}
      <div className="absolute bottom-[28%] right-8 md:right-20 z-20 rotate-[2deg] hidden md:block">
        <span className="inline-flex items-center gap-1.5 bg-white/8 backdrop-blur-md border border-white/15 text-white/75 text-[10px] font-semibold px-3.5 py-1.5 rounded-full tracking-widest uppercase shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" />
          تصاميم حصرية
        </span>
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-20 h-full w-full flex flex-col justify-end pb-16 md:pb-24 px-6 lg:px-16">
        {/* Season label */}
        <p className="text-white/50 text-xs font-medium tracking-[0.3em] uppercase mb-4 md:mb-5">
          موسم ٢٠٢٥
        </p>

        {/* Headline */}
        <div className="max-w-xl mb-8 md:mb-10">
          <h1 className="text-[2.6rem] md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight drop-shadow-sm">
            تشكيلة
            <br />
            <span className="italic font-light text-white/70 text-[2rem] md:text-5xl lg:text-6xl">
              العبايات الجديدة
            </span>
          </h1>

          <p className="mt-4 md:mt-5 text-white/55 text-sm md:text-base font-light leading-relaxed max-w-sm">
            أناقة تتجاوز الموضة — عبايات مصمَّمة لتدوم، تُلبَس بثقة كل يوم.
          </p>
        </div>

        {/* Single CTA */}
        <div>
          <Link
            href="/category/new-arrivals"
            className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold px-9 py-4 rounded-xl hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 shadow-2xl text-sm group"
          >
            اكتشفي المجموعة
            <HiOutlineArrowLeft
              className="transform group-hover:-translate-x-1 transition-transform duration-200"
              size={17}
            />
          </Link>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5">
        <span className="text-white/30 text-[9px] tracking-widest uppercase">
          تمرير
        </span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
