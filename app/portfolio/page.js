"use client";
import React, { useState, useEffect } from "react";
import Pic1 from "../assets/HeroCaption1.svg";
import Pic2 from "../assets/HeroCaption.svg";
import Image from "next/image";

const Page = () => {
  const [currentImage, setCurrentImage] = useState(Pic1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === Pic1 ? Pic2 : Pic1));
    }, 1000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []); // Empty dependency array ensures that the effect runs once on mount

  return (
    <div>
      <Image src={currentImage} alt="/" priority layout="responsive" />
    </div>
  );
};

export default Page;
