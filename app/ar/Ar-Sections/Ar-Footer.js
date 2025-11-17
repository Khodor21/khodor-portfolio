"use client";
import React from "react";
import Link from "next/link";
import Eyes from "@/app/components/Eyes";
import Lottie from "lottie-react";
import callAnimation from "@/app/assets/animation/call.json";
import whatsappAnimation from "@/app/assets/animation/whatsapp.json";
import emailAnimation from "@/app/assets/animation/email.json";

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

          {/* CONTACT BUTTONS */}
          <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6 mt-4 items-center justify-center">
            {/* Email */}
            <Link
              href="mailto:khodorhasan17@gmail.com"
              className="bg-white text-black rounded-xl px-4 py-2 md:px-5 md:py-3 hover:bg-gray-100 transition transform hover:-translate-y-0.5 flex items-center gap-3 shadow-lg"
            >
              <Lottie
                animationData={emailAnimation}
                className="w-6 h-6 md:w-7 md:h-7"
                loop
              />
              <p className="handiBold text-sm md:text-base">
                الإيميل دايمًا مفتوح
              </p>
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/96171708103"
              className="bg-[#16a34a] text-white rounded-xl px-4 py-2 md:px-5 md:py-3 hover:bg-[#15803d] transition transform hover:-translate-y-0.5 flex items-center gap-3 shadow-lg"
            >
              <Lottie
                animationData={whatsappAnimation}
                className="w-6 h-6 md:w-7 md:h-7"
                loop
              />
              <p className="handiBold text-sm md:text-base">أنا على واتساب</p>
            </Link>

            {/* Call */}
            <Link
              href="tel:+96171708103"
              className="bg-white/5 text-white rounded-xl px-4 py-2 md:px-5 md:py-3 border border-white/15 hover:bg-white/10 transition transform hover:-translate-y-0.5 flex items-center gap-3"
            >
              <Lottie
                animationData={callAnimation}
                className="w-6 h-6 md:w-7 md:h-7"
                loop
              />
              <p className="handiBold text-sm md:text-base">
                خلّينا نحكي اتصال
              </p>
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
