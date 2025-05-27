"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiHandWaving } from "react-icons/pi";
import Navbar from "./Navbar";

const rotatingWords = ["Designer", "Developer"];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % rotatingWords.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      {" "}
      <Navbar />
      <div className="relative min-h-[60vh] my-auto flex flex-col items-start md:items-center justify-center overflow-hidden bg-white px-4 md:px-20">
        <div className="flex flex-col justify-center">
          {/* Background Grid Layer with Linear Gradient Mask */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg
              className="w-full h-full opacity-10"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
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
                    stroke="black"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          {/* Foreground Content */}
          <div className="relative z-10 w-full text-center">
            <div className="flex gap-1 items-center justify-center medium text-lg md:text-3xl">
              {" "}
              Hello{" "}
              <motion.div
                className="inline-block text-xl md:text-3xl"
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                {" "}
                <PiHandWaving className="" />
              </motion.div>
              , I'm Khodor a
              <motion.span
                className="relative inline-flex items-center justify-center md:text-2xl text-sm px-2 py-1 mx-1 md:mx-2 rounded border border-black backdrop-blur-md shadow-md text-black semiBold"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[currentWordIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl mt-3 md:text-5xl md:mt-6 play text-gray-900 leading-tight md:w-[70%] text-center"
            >
              I turn ideas into meaningful visual solutions{" "}
              <span className="playfair">that inspire.</span>
            </motion.h1>
            {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 medium text-sm md:text-lg text-black opacity-60"
          >
            I don't just design, I solve your brand's biggest challenges.
          </motion.p> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex flex-col gap-4 md:flex-row justify-center items-center md:gap-8"
            >
              <a
                href="#projects"
                className="inline-block bg-white text-black border-black/40 border-[0.2px] shadow px-2 py-1 rounded  md:text-lg font-semibold hover:bg-black hover:text-white transition min-w-[170px] text-center"
              >
                My Projects
              </a>
              <a
                href="#contact"
                className="inline-block bg-black text-white px-2 py-1 rounded  md:text-lg font-semibold hover:bg-black transition min-w-[170px] text-center"
              >
                Let's have a deal
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
