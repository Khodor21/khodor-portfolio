"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Clock from "../assets/Feature1.png";
import Money from "../assets/Feature2.png";
import Creative from "../assets/Feature3.png";
import Design from "../assets/Feature4.png";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const gradientColor = [68, 27, 35];
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div
      ref={ref}
      className={`bg-third mb-2  text-center ${inView ? "in-view" : ""}`}
      id="arabic"
    >
      <div className="text-main ">
        <Marquee gradient gradientColor={gradientColor} gradientWidth={200}>
          <motion.div
            className="flex justify-between gap-60 my-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={featureVariants}
          >
            <motion.div className="mr-6 flex flex-col justify-between my-auto">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Image src={Clock} priority alt="#" className="w-24 ml-4" />
              </motion.div>
              <p>سرعة التنفيذ</p>
            </motion.div>
            <motion.div className="mr-6 flex flex-col justify-between my-auto">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Image src={Money} priority alt="#" className="w-32" />
              </motion.div>
              <p>أسعار تنافسية</p>
            </motion.div>
            <motion.div className="mr-6 flex flex-col justify-between my-auto">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Image src={Creative} priority alt="#" className="w-24" />
              </motion.div>
              <p> خــارج الصــندوقـ</p>
            </motion.div>
            <motion.div className="mr-60 flex flex-col justify-between my-auto">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Image
                  src={Design}
                  priority
                  alt="#"
                  className="w-24 ml-4 mb-2 "
                />
              </motion.div>
              <p> تصميم مبتكــر</p>
            </motion.div>
          </motion.div>
        </Marquee>
      </div>
    </div>
  );
};

export default Features;
