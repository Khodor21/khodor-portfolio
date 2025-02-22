"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Title from "../assets/ServicesTitle.svg";
import WebAppDevelopment from "../assets/Coding.svg";
import SocialMediaDesign from "../assets/Design.svg";
import AdvertisementsDesign from "../assets/Video.svg";
import NextJs from "../assets/Nextjs.svg";
import Nodejs from "../assets/Nodejs.svg";
import MongoDB from "../assets/MongoDB.svg";
import Figma from "../assets/Figma.svg";
import AdobePremiere from "../assets/Adobe Premiere.svg";
import RightArrow from "../assets/RightArrow.svg";

const ServiceCard = ({ image, title, description, icons }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="border bg-main px-6 h-auto"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div id="services" className="my-4 h-28 flex items-center justify-center">
        <Image src={image} priority alt="" className="h-full" />
      </div>
      <h3 className="mb-2 text-third text-lg" id="arabic">
        {title}
      </h3>
      <p id="ibmsemi" className="text-third/70 text-base">
        {description}
      </p>
      <div className="flex flex-col lg:pb-2 justify-center items-center gap-2 pt-4">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {icons.map((icon, index) => (
            <div key={index} className="bg-third rounded-full p-2 mb-2 md:mb-0">
              <Image src={icon} alt="" className="h-6 w-6" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-2 ">
          <Link href="/portfolio">
            <div className="flex items-center justify-center text-third">
              <p className="mr-1 mb-1 " id="arabic">
                انتقل إلى معرض الأعمال
              </p>
              <Image
                src={RightArrow}
                alt="Arrow Right"
                width={20}
                height={20}
              />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="text-center bg-third pb-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={container}
        transition={{ duration: 2 }}
      >
        <div className="flex justify-end">
          <Image
            src={Title}
            priority
            alt="Services Title"
            className="w-48 md:w-80 pt-6 mx-8"
          />
        </div>

        <h3
          className="mb-6 mt-2 text-main text-right mx-10 md:text-lg"
          id="ibmsemi"
        >
          خَدمات متميّزة تُســــاعدك عَلــى تحقِيـق أهدَافك وتطْوير مَشروعك
          بِكَفاءة عَاليّة
        </h3>
      </motion.div>
      <motion.div
        className=""
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col justify-center items-center lg:flex-row gap-4 mb-6 mx-8">
          <motion.div variants={item} transition={{ duration: 1 }}>
            <ServiceCard
              image={WebAppDevelopment}
              title="برمــــــجة تطبيقــــــات الويـــــــب"
              description="تطوير تطبيقات الويب باستخدام أحدث التقنيات. أُقــدّم حلولًا مخصصة وفعّالة لتلبية احتياجات عملك"
              icons={[NextJs, Nodejs, MongoDB]}
            />
          </motion.div>
          <motion.div variants={item} transition={{ duration: 1 }}>
            <ServiceCard
              image={SocialMediaDesign}
              title="تصــــــاميـــم ســــوشــل ميديـــــــا"
              description="تصميم محتوى جذاب لوسائط التواصل الاجتماعي. أُساعدك في بناء هوية قوية لمنصات التواصل الاجتماعي"
              icons={[Figma]}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
