"use client";
import React from "react";
import Image from "next/image";

import { FaDownload } from "react-icons/fa6";
import LogoImage from "../assets/images/Logo Course.png";
import BannerImage from "../assets/images/Banner Course.jpg";

const page = () => {
  const images = [
    {
      src: LogoImage,
      filename: "Logo Course.png",
      label: "Download Logo",
      downloadSrc: LogoImage,
    },
    {
      src: BannerImage,
      filename: "Banner Course.jpg",
      label: "Download Banner",
      downloadSrc: BannerImage,
    },
  ];

  const handleDownload = (src, filename) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center gap-8 p-10 min-h-screen">
      {images.map((image, index) => (
        <div key={index} className="text-center">
          <Image
            src={image.src}
            alt={image.filename}
            width={400}
            height={250}
            className="shadow-lg mb-4"
          />
          <button
            onClick={() => handleDownload(image.downloadSrc, image.filename)}
            className="bg-red/70 medium text-white px-6 py-2 rounded-xs transition-all"
          >
            <FaDownload />
          </button>
        </div>
      ))}
    </div>
  );
};

export default page;
