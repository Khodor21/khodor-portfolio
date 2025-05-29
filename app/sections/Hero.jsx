"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiHandWaving } from "react-icons/pi";
import contact from "../assets/animation/contact.json";
import avatar from "../assets/images/Me.jpg";
import Navbar from "./Navbar";
import Image from "next/image";
import Lottie from "lottie-react";

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
    <section className="min-h-[60vh] md:min-h-screen mb-14 sm:mb-0">
      {" "}
      <Navbar />
      <div className="relative flex flex-col items-start md:items-center justify-center overflow-hidden bg-white px-4 md:px-20">
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
          <div className="relative z-10 w-full flex flex-col items-center text-center mt-[30%] md:mt-[15%]">
            <div className="flex gap-1 items-center justify-center medium text-base md:text-xl">
              {" "}
              Hello
              <span className="inline-block">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full shadow-md"
                  style={{
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                />
              </span>
              , I'm Khodor a
              <motion.span
                className="relative inline-flex items-center justify-center md:text-xl text-base md:mx-1 mx-[2px] backdrop-blur-md text-black semiBold"
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
              className="text-3xl mt-3 md:text-[3.5rem] md:mt-2 semiBold text-extrabold text-gray-900 leading-tight md:px-16 text-center"
            >
              I turn ideas into meaningful visual solutions{" "}
              <span className="playfair text-[#d64a40]">that inspire.</span>
            </motion.h1>

            {/* Centered button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex justify-center items-center w-full"
            >
              <a href="#footer" rel="noopener noreferrer">
                <button className="bg-[#d64a40] gap-1 flex justify-center items-center text-white medium px-4 py-2 shadow-sm shadow-black text-base md:text-lg rounded hover:bg-gray-800 transition duration-300">
                  Contact Me
                  <Lottie
                    className="inline-block mb-1 w-5 h-5 md:w-8 md:h-8"
                    animationData={contact}
                    loop={true}
                  />
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
