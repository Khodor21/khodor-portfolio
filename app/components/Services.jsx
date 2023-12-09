"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "../assets/ServicesTitle.svg";
import Service1 from "../assets/Service1.svg";
import Service2 from "../assets/Service2.svg";
import Service3 from "../assets/Service3.svg";

const Services = () => {
  // Animation variants for each service card
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="text-center bg-third pb-4">
      <div className="flex justify-end">
        <Image
          src={Title}
          priority
          alt="Texture"
          className="w-48 md:w-80 pt-6 mx-8"
        />
      </div>

      <h3
        className="mb-6 mt-2 text-main text-right mx-10 md:text-lg"
        id="ibmbold"
      >
        خدمات متميزة تســــاعدك علــى تحقيـق أهدافك وتطوير مشروعك بكفاءة عالية{" "}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-6 mx-8">
        {/* Service 1 */}
        <motion.div
          className="border bg-white p-6 h-full"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={Service1}
            priority
            alt=""
            className="border border-b-white object-contain h-48 mx-auto"
          />
          <h3 className="mb-2 text-third text-lg" id="arabic">
            برمــــــجة تطبيقــــــات الويـــــــب
          </h3>
          <p id="ibmsemi" className="text-third text-base">
            تطوير تطبيقات الويب باستخدام أحدث التقنيات. نقدم حلولًا مخصصة
            وفعّالة لتلبية احتياجات عملك
          </p>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="border bg-white p-6 h-full"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={Service2}
            priority
            alt=""
            className="border object-contain h-48 mx-auto"
          />
          <h3 className="mb-2 text-third text-lg" id="arabic">
            تصــــــاميـــم ســــوشــل ميديـــــــا
          </h3>
          <p id="ibmsemi" className="text-third text-base">
            تصميم محتوى جذاب لوسائط التواصل الاجتماعي. نساعدك في بناء هوية قوية
            على منصات التواصل الاجتماعي
          </p>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="border bg-white p-6 h-full"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={Service3}
            priority
            alt=""
            className="border object-contain h-48 mx-auto"
          />
          <h3 className="mb-2 text-third text-lg" id="arabic">
            تصميــــم فيديوهــــات إعلانيّــــــة
          </h3>
          <p id="ibmsemi" className="text-third text-base">
            إنشاء فيديوهات إعلانية فاعلة ومبتكرة. نحن نقدم خدمات الإنتاج الفني
            بجودة عالية لتعزيز علامتك التجارية
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
