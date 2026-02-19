"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Ar-Navbar";
import Lottie from "lottie-react";
import contact from "@/app/assets/animation/contact.json";
import { IoMailUnreadOutline } from "react-icons/io5";

// ❌ شلنا folderAnimation
import { FaInstagram, FaWhatsapp, FaMail, FaFolderOpen } from "react-icons/fa6"; // 👈 أضفت FaFolderOpen
import Avatar from "@/app/assets/images/My-avatar.png";
import Image from "next/image";

const rotatingWords = ["مُصمِّم مواقع وتطبيقات", "مُبرمج منصّات إلكترونيّة "];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length),
      2500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      dir="rtl"
      className="min-h-[70vh] md:min-h-screen bg-[#050509] text-gray-100 mb-14 sm:mb-0"
    >
      <Navbar />

      <div className="relative overflow-hidden pt-20 pb-16">
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
            }}
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0 H0 V40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-10">
          <div className="flex flex-col-reverse md:flex-row-reverse items-center md:items-start gap-10 md:gap-16">
            {/* TEXT SIDE (RIGHT) */}
            <div className="w-full md:w-1/2 text-right">
              {/* NAME + TITLE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="mt-5 text-white"
              >
                <h1 className="handiBold text-4xl md:text-[56px] lg:text-[64px] leading-tight">
                  أهلاً، أنا خضر حسن
                </h1>

                {/* TOP SMALL LINE (rotating role) */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="mt-3 inline-flex items-center gap-2 rounded-full text-white/90 bg-white/5 border border-white/10 px-4 py-1 text-sm md:text-base handiReg"
                >
                  <span className="w-2 h-2 rounded-full bg-[#f4c542]" />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[currentWordIndex]}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      {rotatingWords[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </motion.p>
              </motion.div>

              {/* MAIN ONE-LINER */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mt-8 text-base handiReg md:text-xl text-white/90 leading-relaxed"
              >
                أركِّز على بناء
                <span className="text-[#f4c542] handiBold">
                  تجارب رقمية تُحسِّن حياة المستخدمين
                </span>
                وتُظهر هوية مشروعك بشكل واضح وجذّاب.
              </motion.p>

              {/* SOCIAL ICONS + CTA BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
                className="mt-8 flex flex-col gap-6"
              >
                {/* Social Icons */}
                <div className="flex justify-start md:justify-end gap-3">
                  <a
                    href="https://www.instagram.com/khodorhasan._"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="https://wa.me/96171708103"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    <FaWhatsapp className="text-xl" />
                  </a>
                  <a
                    href="mailto:khodorhasan17@gmail.com"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    <IoMailUnreadOutline className="text-xl" />
                  </a>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 justify-start md:justify-end">
                  {/* Projects button with animated React icon */}
                  <a href="#projects">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      aria-label="شاهد المشاريع"
                      className="handiBold px-4 py-3 rounded-lg bg-white text-black text-sm md:text-base shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2"
                    >
                      شاهد المشاريع
                      <motion.span
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          repeatType: "mirror",
                          ease: "easeInOut",
                        }}
                        className="flex items-center"
                      >
                        <FaFolderOpen className="text-lg" />
                      </motion.span>
                    </motion.button>
                  </a>

                  <a href="#footer">
                    <button className="handiBold text-white/90 px-5 py-3 rounded-lg border border-white/20 text-sm md:text-base flex items-center gap-2 hover:bg-white/5 transition">
                      تواصل معي مباشرة
                      <Lottie
                        className="w-6 h-6"
                        animationData={contact}
                        loop
                      />
                    </button>
                  </a>
                </div>
              </motion.div>

              {/* ABOUT CARD */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
                className="mt-10 rounded-2xl border border-white/10 bg-white/5 px-5 py-6 md:px-6 md:py-7"
              >
                <h3 className="handiBold text-lg md:text-xl text-white/90 mb-3">
                  نبذة عني:
                </h3>
                <p className="text-sm md:text-base handiReg leading-relaxed text-white/70">
                  خريج تخصُّص Computer Sience أطمح إلى تصميم واجهات استخدام
                  تُسهِّل حياة الناس، مع شغف خاص بتجربة المستخدم، التصميم
                  النظيف، وحلّ المشاكل بطريقة إبداعية.
                </p>
              </motion.div>
            </div>

            {/* AVATAR SIDE (LEFT) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="w-full md:w-1/2 flex justify-center md:justify-start"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-[#f4c542]/40 via-[#a855f7]/30 to-[#22c55e]/30 -z-10" />
                {/* Avatar circle */}
                <div className="w-52 h-52 md:w-64 md:h-64 rounded-full bg-black/60 border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)]">
                  <Image
                    src={Avatar}
                    alt="خضر حسن"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
