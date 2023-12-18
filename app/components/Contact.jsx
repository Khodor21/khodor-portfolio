"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Character from "../assets/ContactCharacter.svg";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formRef, formInView] = useInView({
    rootMargin: "-100px 0px", // Adjust the rootMargin as needed
  });

  const [imgRef, imgInView] = useInView({
    rootMargin: "-100px 0px", // Adjust the rootMargin as needed
  });

  useEffect(() => {
    if (formInView) {
      console.log("Form is in view!");
      // Additional actions when the form is in view
    }
  }, [formInView]);

  useEffect(() => {
    if (imgInView) {
      console.log("Character image is in view!");
      // Additional actions when the character image is in view
    }
  }, [imgInView]);

  return (
    <div>
      <div className="bg-main px-10 pt-8">
        <h1
          className="text-right text-third text-3xl md:text-4xl mb-2"
          id="ibmbold"
        >
          لِنقُم بِتوسِـــيع عَلامَتك
        </h1>
        <h3
          id="ibmbold"
          className="text-right text-third text-3xl md:text-4xl mt-4"
        >
          .التِجاريّــــــة، معـــــــــاً
        </h3>
      </div>{" "}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-main">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-8"
          ref={formRef}
        >
          <form className="text-third text-right px-6 ">
            <div className="mb-4" id="arabic">
              <label htmlFor="name">اسمك</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="اسمك هنا"
                className="w-full p-2 mt-2 border border-third rounded-sm shadow-xl  placeholder:text-third/50 placeholder:text-right"
              />
            </div>
            <div className="mb-4" id="arabic">
              <label htmlFor="email">بريدك - اختياري</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="بريدك هنا اذا تحب"
                className="w-full p-2 mt-2  border border-third rounded-sm shadow-xl  placeholder:text-third/50 placeholder:text-right"
              />
            </div>
            <div className="mb-4" id="arabic">
              <label htmlFor="message">رسالتك</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="...بانتظار رسالتك"
                className="w-full p-2 mt-2 border border-third rounded-sm shadow-xl  placeholder:text-third/50 placeholder:text-right"
              ></textarea>
            </div>
            <div className="mb-4" id="arabic">
              <label htmlFor="service">اختر الخدمة</label>
              <select
                id="service"
                name="service"
                className="w-full p-2 mt-2 border border-third text-right rounded-sm shadow-xl  placeholder:text-third/50 placeholder:text-right"
              >
                <option value="web">برمــــــجة تطبيقــــــات الويب</option>
                <option value="social-media">
                  تصــــــاميـــم ســــوشــل ميديـــــــا
                </option>
                <option value="video">
                  تصميــــم فيديوهــــات إعلانيّــــــة
                </option>
              </select>
            </div>
            <div id="ibmsemi" className="flex flex-col justify-center">
              <button className="custom-button py-2 px-4 rounded-md">
                ارســــــال
              </button>
              <div className="text-main flex justify-center gap-10 p-4">
                <Link href="https://wa.me/">
                  <FaWhatsapp size="38" className="icon-link" />
                </Link>
                <Link href="https://www.instagram.com/">
                  <FaInstagram size="38" className="icon-link" />
                </Link>
                <Link href="mailto:">
                  <FaEnvelope size="38" className="icon-link" />
                </Link>
              </div>
            </div>
          </form>
        </motion.div>
        {/* Character Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-8"
          ref={imgRef} // Add reference to the motion.div
        >
          <Image
            layout=""
            src={Character}
            alt="Character"
            className="w-full px-8 lg:px-24 h-auto"
          />
        </motion.div>{" "}
      </div>
    </div>
  );
};

export default Contact;
