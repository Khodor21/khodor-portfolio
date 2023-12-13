"use client";
import React from "react";
import MainLogo from "../assets/GreyLogo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-third grid grid-rows-2 text-center">
      <div>
        <Image
          alt="Logo"
          layout="/"
          src={MainLogo}
          priority
          className="mx-auto w-16 md:w-24 mt-10"
        />
      </div>
      <div
        className="flex flex-row-reverse gap-4 md:gap-16 border-b-2 border-[#e0e0e0] justify-center items-center text-white"
        id="ibmbold"
      >
        <Link
          href="#main"
          className="hover:text-second hover:bg-main hover:p-2 rounded"
        >
          الرئيسية
        </Link>
        <Link
          href="#main"
          className="hover:text-second hover:bg-main hover:p-2 rounded"
        >
          خدماتي
        </Link>
        <Link
          href="#main"
          className="hover:text-second hover:bg-main hover:p-2 rounded"
        >
          أعمالي
        </Link>
        <Link
          href="#main"
          className="hover:text-second hover:bg-main hover:p-2 rounded"
        >
          آراء العملاء
        </Link>
        <Link
          href="#main"
          className="hover:text-second hover:bg-main hover:p-2 rounded"
        >
          {" "}
          تواصل معي
        </Link>
      </div>
      <div className="my-2 text-main" id="poppins">
        {" "}
        © {currentYear} Khodor Hasan. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
