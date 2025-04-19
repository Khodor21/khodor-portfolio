"use client";
import React, { useState, useEffect } from "react";
import Pic1 from "../assets/images/Name.svg";
import Pic2 from "../assets/images/HeroCaption.svg";
import HeroImage from "../assets/images/Hero.png";
import HeroSentence from "../assets/images/HeroSentence.svg";
import HeroSentenceLg from "../assets/images/HeroSentence-Lg.svg";
import Cloud from "../assets/images/Cloud.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
        className="relative flex flex-col justify-center items-center mt-[3rem]"
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
              src={Pic1}
              priority
              className="w-[15rem] md:w-[20rem] mt-12"
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

        <motion.div
          className="text-white ibmsemi text-center mt-4 md:text-2xl mx-6 md:w-[75%] lg:w-[50%]"
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={HeroSentence}
            priority
            alt="Where is the Image?"
            className="w-[28rem] mx-auto md:hidden"
          />
          <Image
            src={HeroSentenceLg}
            priority
            alt="Where is the Image?"
            className="w-[46rem] mx-auto hidden md:block"
          />
        </motion.div>

        <motion.div
          variants={buttonsVartiants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 mb-8 mt-28"
        >
          <Link
            href="#portfolio"
            className="bg-white ibmsemi text-black rounded-sm text-main"
          >
            <p className="m-2 text-xl"> اطّلع على أعمالي</p>
          </Link>
          <Link
            href="https://wa.me/96171708103"
            className="bg-third ibmsemi text-white  rounded-sm"
          >
            <p className="m-2 text-xl"> خلنا نبدأ مشروعك</p>
          </Link>
        </motion.div>

        <motion.div
          className="mx-4 mb-8 lg:mb-0 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Image */}
          <Image
            src={HeroImage}
            priority
            alt="Where is the Image?"
            className="w-[32rem]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
