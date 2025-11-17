"use client";
import React from "react";
import Link from "next/link";
import Eyes from "@/app/components/Eyes";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      dir="rtl"
      className="bg-[#050509] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 py-14 md:py-20">
        {/* CARD */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0b0b10] border border-white/10 px-6 py-10 md:px-10 md:py-12 flex flex-col items-center text-center gap-8 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
          {/* Glow / Background accents */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#f4c542]/25 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-[#a855f7]/20 rounded-full blur-3xl" />
            <div className="absolute inset-x-10 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <p className="handiReg text-xs md:text-sm text-white/60 border border-white/10 rounded-full px-4 py-1 bg-white/5 w-fit">
              إذا وصلت لهون، يمكن صار وقت نحكي 🚀
            </p>

            <h3 className="handiBold text-2xl md:text-3xl lg:text-4xl text-white leading-snug">
              جاهز نشتغل سوا على{" "}
              <span className="text-[#f4c542]">مشروعك القادم؟</span>
            </h3>

            <Eyes />

            <p className="handiReg text-sm md:text-base text-white/60 max-w-xl mt-2">
              اختر طريقة التواصل اللي بتفضّلها — إيميل، واتساب أو اتصال مباشر،
              وأنا جاهز نبلّش من اليوم.
            </p>
          </div>

          {/* CONTACT BUTTONS – موحَّدة الشكل */}
          <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6 mt-4 items-center justify-center">
            {/* Base button style */}
            {/* Email */}
            <Link
              href="mailto:khodorhasan17@gmail.com"
              className="inline-flex items-center gap-3 rounded-xl px-5 py-3 text-sm md:text-base handiBold border border-white/15 bg-white/5 text-white hover:bg-white hover:text-black transition transform hover:-translate-y-0.5 shadow-lg"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                <FaEnvelope className="text-[15px]" />
              </span>
              <span>الإيميل دايمًا مفتوح</span>
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/96171708103"
              className="inline-flex items-center gap-3 rounded-xl px-5 py-3 text-sm md:text-base handiBold border border-white/15 bg-white/5 text-white hover:bg-white hover:text-black transition transform hover:-translate-y-0.5 shadow-lg"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                <FaWhatsapp className="text-[16px]" />
              </span>
              <span>أنا على واتساب</span>
            </Link>

            {/* Call */}
            <Link
              href="tel:+96171708103"
              className="inline-flex items-center gap-3 rounded-xl px-5 py-3 text-sm md:text-base handiBold border border-white/15 bg-white/5 text-white hover:bg-white hover:text-black transition transform hover:-translate-y-0.5 shadow-lg"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                <FaPhone className="text-[15px]" />
              </span>
              <span>خلّينا نحكي اتصال</span>
            </Link>
          </div>

          {/* COPYRIGHT */}
          <div className="relative z-10 mt-8 pt-4 border-t border-white/10 w-full">
            <p className="handiReg text-[11px] md:text-xs text-white/50 text-center">
              © {currentYear} Khodor Hasan — جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
