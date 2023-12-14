"use client";
import React, { useState, useEffect } from "react";
import Pic1 from "../assets/HeroCaption1.svg";
import Pic2 from "../assets/HeroCaption.svg";
import HeroImage from "../assets/HeroSvg.svg";
import Cloud from "../assets/Cloud.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import "../waves.css";
import Waves from "./Waves";
import Tape from "../assets/Tape.svg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(Pic1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === Pic1 ? Pic2 : Pic1));
    }, 1000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  const currentImageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  const buttonsVartiants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 3 } },
  };

  const cloudVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: "100%",
      transition: { duration: 5, ease: "linear", loop: Infinity },
    },
  };

  return (
    <div>
      {" "}
      <motion.div
        className="relative flex flex-col justify-center items-center mt-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {/* Left Cloud */}
          <motion.div
            key="leftCloud"
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute left-0 top-[55%] md:top-0 w-32 md:w-48 lg:w-64 cloud"
          >
            <Image
              key="leftCloudImage"
              src={Cloud}
              priority
              className="w-full h-full relative"
              alt="Cloud"
              layout="/"
            />
          </motion.div>

          {/* Hero Paragraph */}
          <motion.div
            variants={currentImageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={currentImage}
              priority
              className="w-[15rem] md:w-[20rem] mr-8"
              alt="Where is the Image?"
              layout="/"
            />
          </motion.div>

          {/* Right Cloud */}
          <motion.div
            key="rightCloud"
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute right-0 md:top-0 top-[70%] w-32 md:w-48 lg:w-64 cloud1"
          >
            <Image
              key="rightCloudImage"
              src={Cloud}
              priority
              className="w-full h-full"
              alt="Cloud"
              layout="/"
            />
          </motion.div>
        </AnimatePresence>

        <motion.p
          className="text-second/60 text-center md:text-xl mx-6 md:w-[75%] lg:w-[50%]"
          id="ibmsemi"
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
        >
          مُطوِّر ومُصمِّم يُسهِّل وجودك الرقمي، أقدّم حلول تقنية متقدمة وتصميم
          فريد لتعزيز تجربة عملائك ونجاح علامتك التجارية على الإنترنت
        </motion.p>

        <motion.div
          variants={buttonsVartiants}
          initial="hidden"
          animate="visible"
          className="flex gap-8 my-8"
          id="ibmbold"
        >
          <Link href="/" className="bg-second rounded-sm text-main">
            <p className="m-2"> أعمالــي</p>
          </Link>
          <Link href="/" className="border text-second rounded-sm">
            <p className="m-2"> انستغرامـي</p>
          </Link>
        </motion.div>

        <motion.div
          className="mx-14 mb-8 lg:mb-0 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Image */}
          <Image
            src={HeroImage}
            priority
            layout="responsive"
            alt="Where is the Image?"
          />
        </motion.div>
      </motion.div>
      <Waves />
    </div>
  );
};

export default Hero;
