"use client";
import React from "react";
import MainLogo from "../assets/images/GreyLogo.svg";
import Image from "next/image";
import Link from "next/link";
import Eyes from "../components/Eyes";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-white flex flex-col justify-between h-full w-full px-8 md:px-16 py-6">
      <div className="flex flex-col-reverse items-start md:flex-row md:justify-between md:items-end my-8">
        <div className="directive text-[72px] text-black flex flex-col leading-none space-y-[-4px] items-start">
          {" "}
          <h3>Soooooo,</h3>
          <h3>what’s next?</h3>
        </div>
        <Eyes className="" />
      </div>
      <div className="flex flex-col gap-4 directive">
        <Link
          href="mailto:khodorhasan17@gmail.com"
          className="bg-green text-black w-fit px-2 py-2 rounded transition duration-500 hover:bg-black hover:text-white hover:-rotate-[10deg]"
        >
          <div className="flex justify-center gap-3 items-center">
            <p className="text-xl">Inbox always open</p>
            <FaEnvelope className="text-[#dddddd] text-xl" />
          </div>
        </Link>
        <Link
          href="https://wa.me/96171708103"
          className="bg-green text-black w-fit px-2 py-2 rounded transition duration-500 hover:bg-black hover:text-white hover:-rotate-[10deg]"
        >
          <div className="flex gap-3 items-center">
            <p className="text-xl">Let’s make it happen</p>
            <FaWhatsapp className="text-[#dddddd] text-2xl" />
          </div>
        </Link>
        <Link
          href="tel:+96171708103"
          className="bg-green text-black w-fit px-2 py-2 rounded transition duration-500 hover:bg-black hover:text-white hover:-rotate-[10deg]"
        >
          <div className="flex gap-3 items-center">
            <p className="text-xl">Let’s talk possibilities</p>
            <FaPhoneAlt className="text-[#dddddd] text-xl" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-2 md:flex-row justify-between items-start  md:items-end mt-4">
        <Link href="/#">
          <Image
            alt="Logo"
            layout="/"
            src={MainLogo}
            priority
            className="w-24 md:w-36 mt-6"
          />
        </Link>

        <div className="text-black text-xs directive">
          {" "}
          © {currentYear} Khodor Hasan. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
