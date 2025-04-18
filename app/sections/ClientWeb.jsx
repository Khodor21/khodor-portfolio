"use client";
import React, { useState, useEffect } from "react";
import webClient1 from "../assets/ClientWeb1.svg";
import webClient2 from "../assets/ClientWeb2.svg";
import webClient3 from "../assets/ClientWeb3.svg";
import Image from "next/image";
const ClientWeb = () => {
  const [currentImage, setCurrentImage] = useState(webClient1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => {
        switch (prevImage) {
          case webClient1:
            return webClient2;
          case webClient2:
            return webClient3; // Change to the next image
          case webClient3:
            return webClient1; // Change to the next image

          default:
            return webClient3;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);
  return (
    <div className="bg-third">
      <div>
        {" "}
        <div className="">
          <Image
            src={currentImage}
            priority
            alt="Services Title"
            className="w-[14rem] md:w-[22rem] mx-auto"
          />
        </div>
        <h3
          className="mb-6 mt-2 text-main text-center mx-6 md:text-lg"
          id="ibmsemi"
        >
          قصص نجاح: إلهام يعكس تأثيرنا الإيجابي{" "}
        </h3>
      </div>
    </div>
  );
};

export default ClientWeb;
