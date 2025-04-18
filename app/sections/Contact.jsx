"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Character from "../assets/images/ContactCharacter.svg";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://portfolio-backend2024.vercel.app/api/client",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("تمّ إرسال طلبك بنجاح");
      } else {
        toast.error("الرجاء التأكّد من المعلومات");
      }
    } catch (error) {
      toast.error("الرجاء التأكّد من المعلومات");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact">
      <ToastContainer />
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
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center bg-main">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 p-8"
        >
          <form className="text-third text-right px-6 " onSubmit={handleSubmit}>
            <div className="mb-4" id="arabic">
              <label htmlFor="name">اسمك</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="اسمك هنا"
                className="w-full p-2 mt-2 border border-third rounded-sm shadow-xl  placeholder:text-third/50 placeholder:text-right"
                onChange={handleChange} // Add this line
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
                value={formData.service}
                onChange={handleChange}
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
              <button
                type="submit"
                className="custom-button py-2 px-4 rounded-md tracking-wide"
              >
                إرســــــال
              </button>
              <div className="text-main flex justify-center gap-10 p-4">
                <Link href="https://wa.me/96171708103">
                  <FaWhatsapp size="38" className="icon-link" />
                </Link>
                <Link href="https://www.instagram.com/khodorhasan._/">
                  <FaInstagram size="38" className="icon-link" />
                </Link>
                <Link href="mailto:khodorhasan17@gmail.com">
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
          className="w-[70%] lg:w-1/2 px-8"
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
}

export default Contact;
