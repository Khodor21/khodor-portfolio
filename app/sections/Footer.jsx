"use client";
import React from "react";
import Link from "next/link";
import Eyes from "../components/Eyes";
import Lottie from "lottie-react";
import callAnimation from "../assets/animation/call.json";
import whatsappAnimation from "../assets/animation/whatsapp.json";
import emailAnimation from "../assets/animation/email.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id="footer">
      {" "}
      <div className="relative w-full flex justify-center items-center">
        <div className="relative z-20 bg-black flex flex-col justify-center items-center min-h-[50vh] w-full py-6 px-4 overflow-hidden">
          {/* Blurred white gradients INSIDE the black background */}
          <div className="pointer-events-none absolute inset-0 z-10">
            <div className="absolute top-[-10%] left-[-10%] w-40 h-40 bg-white opacity-40 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-[-10%] w-32 h-32 bg-white opacity-30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white opacity-20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="relative z-20 flex flex-col justify-center items-center my-4">
            <div className="text-center medium text-[18px] md:text-[36px] text-white flex justify-center items-center leading-none">
              <h3>
                If you scrolled this far, It's time to{" "}
                <span className="playfair text-xl md:text-4xl">
                  Take a step
                </span>
              </h3>
            </div>
            <Eyes className="" />
          </div>
          <div className="relative z-20 flex flex-col gap-4 items-center">
            <h3 className="text-white medium text-xl md:text-3xl mb-4">
              Ready to Collaborate?
            </h3>
            <Link
              href="mailto:khodorhasan17@gmail.com"
              className="bg-white text-black w-fit px-2 py-2 rounded transition duration-500 hover:-rotate-[6deg]"
            >
              <div className="flex justify-center gap-3 items-center">
                <Lottie
                  animationData={emailAnimation}
                  className="w-5 h-5 md:w-8 md:h-8"
                  loop={true}
                />{" "}
                <p className="md:text-xl medium">Inbox always open</p>
              </div>
            </Link>
            <Link
              href="https://wa.me/96171708103"
              className="bg-white text-black w-fit px-2 py-2 rounded transition duration-500 hover:-rotate-[6deg]"
            >
              <div className="flex gap-3 items-center">
                <Lottie
                  animationData={whatsappAnimation}
                  className="w-5 h-5 md:w-8 md:h-8"
                  loop={true}
                />{" "}
                <p className="md:text-xl medium">Let’s make it happen</p>
              </div>
            </Link>
            <Link
              href="tel:+96171708103"
              className="bg-white text-black w-fit px-2 py-2 rounded transition duration-500 hover:-rotate-[6deg]"
            >
              <div className="flex gap-3 items-center">
                <Lottie
                  animationData={callAnimation}
                  className="w-5 h-5 md:w-8 md:h-8"
                  loop={true}
                />{" "}
                <p className="md:text-xl medium">Let’s talk possibilities</p>
              </div>
            </Link>
          </div>
          <div className="relative z-20 flex flex-col gap-2 md:flex-row justify-center items-center mt-4 w-full">
            <div className="text-white text-xs medium text-center w-full">
              © {currentYear} Khodor Hasan. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
