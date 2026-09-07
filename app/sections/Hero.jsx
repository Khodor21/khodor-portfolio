"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const easing = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing, delay: 0.15 * i },
  }),
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-paper">
      {/* ─── Vertical hairlines (desktop only) ─── */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="mx-auto grid h-full max-w-6xl grid-cols-[1fr_minmax(0,560px)_1fr]">
          <div />
          <div className="border-x border-line" />
          <div />
        </div>
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24">
        <div className="flex w-full max-w-[560px] flex-col items-center text-center">
          {/* Avatar */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative"
          >
            <div className="rounded-full p-[6px] ring-1 ring-line">
              <div className="relative h-[112px] w-[112px] overflow-hidden rounded-full md:h-[128px] md:w-[128px]">
                <Image
                  src="/Me.jpg" // ← غيّرها لصورتك
                  alt="صورتي الشخصية"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="thmanya-serif mt-7 text-[32px] leading-tight text-ink md:text-[38px]"
          >
            خضــر حســن{" "}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="thmanya-medium mt-3 flex items-center gap-2 text-[17px] text-muted"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            مصمّم ومبرمج مواقع الكترونيّة - أعمل عن بُعد{" "}
          </motion.p>

          {/* Description */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="thmanya-light mt-7 max-w-[420px] text-[17px] leading-[1.9] text-muted"
          >
            مهتم بالإبداع الممتد أثره في الدنيا والآخرة، بعد تخرجي تخصص علوم
            حاسب، أدركت أن نهاية المرحلة الدراسية هي البداية، فقررت أدمج حبي
            للتصميم بخبرتي في التقنية وأركز في تصميم وبناء المنتجات الرقمية.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            href="https://wa.me/966500000000" // ← رقمك هنا
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3, ease: easing }}
            className="thmanya-bold mt-10 inline-flex items-center rounded-full bg-accent px-9 py-2.5 text-[15px] text-paper shadow-sm hover:bg-accent-dark"
          >
            تواصل
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
