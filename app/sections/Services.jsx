"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import fork from "../assets/animation/fork.json";
import cloudinary from "../assets/animation/cloudinary.json";
import design from "../assets/animation/design.json";
import money from "../assets/animation/money.json";
import response from "../assets/animation/response.json";
import time from "../assets/animation/time.json";

const services = [
  {
    id: 1,
    icon: design,
    title: (
      <>
        <span className="playfair text-lg md:text-2xl relative inline-block">
          Design
        </span>{" "}
        that Connects
      </>
    ),
    description:
      "Eye-catching social media graphics and posters that bring your brand to life.",
  },
  {
    id: 2,
    icon: fork,
    title: (
      <>
        <span className="playfair text-lg md:text-2xl relative inline-block">
          Frontend
        </span>{" "}
        Development
      </>
    ),
    description:
      "Responsive, dynamic UIs built with Next.js, Tailwind CSS, and Framer Motion.",
  },
  {
    id: 3,
    icon: cloudinary,
    title: (
      <>
        <span className="playfair text-lg md:text-2xl relative inline-block">
          Backend
        </span>{" "}
        Development
      </>
    ),
    description:
      "Robust and scalable backends powered by Express.js and MongoDB.",
  },
  {
    id: 4,
    icon: time,
    title: (
      <>
        <span className="playfair text-lg md:text-2xl relative inline-block">
          <span
            className="absolute inset-0 -z-10  bg-no-repeat bg-center bg-contain pointer-events-none"
            aria-hidden="true"
          ></span>
          Response
        </span>{" "}
        in 24 hours
      </>
    ),
    description:
      "Guaranteed replies to your inquiries within a single business day.",
  },
  {
    id: 5,
    icon: money,
    title: (
      <>
        <span className="playfair text-lg md:text-2xl relative inline-block">
          <span
            className="absolute inset-0 -z-10  bg-no-repeat bg-center bg-contain pointer-events-none"
            aria-hidden="true"
          ></span>
          Affordable
        </span>{" "}
        Excellence
      </>
    ),
    description:
      "Premium design and development services without breaking your budget.",
  },
  {
    id: 6,
    icon: response,
    title: (
      <>
        <span className="playfair text-lg md:text-2xl relative inline-block">
          <span
            className="absolute inset-0 -z-10  bg-no-repeat bg-center bg-contain pointer-events-none"
            aria-hidden="true"
          ></span>
          Fast
        </span>{" "}
        Turnaround
      </>
    ),
    description:
      "Swift project delivery to help you launch sooner and succeed faster.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="text-center px-8 pt-14 pb-10 md:px-20 md:py-14">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={container}
        transition={{ duration: 2 }}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-black semiBold md:w-[50%] text-[1.2rem] md:text-[2rem]">
            Tailored Digital
            <span className="playfair text-[1.4rem] md:text-[2.2rem] ml-1">
              Solutions
            </span>{" "}
            to Bring Your Ideas to Life{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3">
          {services.map(({ id, icon, title, description }) => (
            <motion.div
              key={id}
              className="bg-gray rounded-sm flex flex-col items-center text-center p-4 md:p-8 shadow"
              variants={item}
            >
              <div className="mb-4 flex items-center justify-center">
                <Lottie
                  className="w-8 h-8 md:w-10 md:h-10 text-black/80"
                  animationData={icon}
                  loop={true}
                />
              </div>
              <h3 className="semiBold md:text-lg mb-2">{title}</h3>
              <p className="medium text-xs md:text-sm text-black/70 w-[75%]">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
