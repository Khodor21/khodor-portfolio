"use client";
import React from "react";
import HeroImage from "../assets/HeroSvg.svg";
import HeroParagraph from "../assets/Ibda3.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  return (
    <motion.div
      className="relative flex flex-col justify-center items-center mt-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={paragraphVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={HeroParagraph}
          priority
          className="w-[15rem] md:w-[20rem]"
          alt="Where is the Image?"
        />
      </motion.div>
      <motion.p
        className="text-second/60 text-center md:text-xl mx-6 md:w-[75%] lg:w-[50%]"
        id="ibmsemi"
        variants={paragraphVariants}
        initial="hidden"
        animate="visible"
      >
        مُطوِّر ومُصمِّم يُسهِّل وجودك الرقمي، أقدّم حلول تقنية متقدمة وتصميم
        .فريد لتعزيز تجربة عملائك ونجاح علامتك التجارية على الإنترنت
      </motion.p>
      <div className="flex gap-8 my-8" id="ibmbold">
        <Link href="/" className="bg-second rounded-sm text-main">
          <p className="m-2"> أعمالــي</p>
        </Link>
        <Link href="/" className="border text-second rounded-sm">
          <p className="m-2"> انستغرامـي</p>
        </Link>
      </div>{" "}
      <motion.div
        className="mx-14 mb-8 lg:mb-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={HeroImage}
          priority
          layout="responsive"
          alt="Where is the Image?"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
