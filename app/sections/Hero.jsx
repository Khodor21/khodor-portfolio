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
      {/* ─── Content ─── */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-8">
        <div className="flex w-full max-w-[560px] flex-col items-center text-center">
          {/* Avatar */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative"
          >
            <div className="relative h-[125px] w-[125px] overflow-hidden rounded-full md:h-[128px] md:w-[128px]">
              <Image
                src="/Me.jpg" // ← غيّرها لصورتك
                alt="صورتي الشخصية"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="thmanya-serif mt-4 text-2xl md:text-3xl leading-tight text-ink md:text-[38px]"
          >
            خضــر حســن{" "}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="thmanya-medium mt-2 text-center text-sm md:text-base text-accent"
          >
            مصمّم ومبرمج مواقع الكترونيّة - أعمل عن بُعد{" "}
          </motion.p>

          {/* Description */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="thmanya-light mt-5 max-w-[490px] text-base md:text-lg leading-[1.1] text-black"
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
            href="https://wa.me/96171708103" // ← رقمك هنا
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3, ease: easing }}
            className="thmanya-bold mt-10 inline-flex items-center rounded-full bg-accent px-9 py-2.5 text-sm text-paper shadow-sm hover:bg-accent-dark"
          >
            تواصــل معــي
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
