"use client";
import React, { useRef } from "react";
import Lottie from "lottie-react";
import wave from "../assets/animation/Wave.json";
import confettie from "../assets/animation/Confettie.json";
import service from "../assets/animation/service.json";
import { motion, useInView } from "framer-motion";

const processSteps = [
  {
    nb: "1",
    icon: service,
    title: "1. Choose the service",
    description: "Select the service that fits your needs from my offerings.",
  },
  {
    nb: "2",
    icon: wave,
    title: "2. Text me",
    description: "Reach out via the contact form or your preferred method.",
  },
  {
    nb: "3",
    icon: confettie,
    title: "3. Get your project",
    description: "Receive the initial version of your project quickly.",
  },
];

const ProcessSection = () => {
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
    <section className="relative px-4 md:py-16 py-8">
      {/* Blurred Gradient Circle */}
      <div className="absolute -top-[100px] -left-[100px] w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-[radial-gradient(circle,#B23E36_0%,transparent_70%)] blur-[80px] z-0" />
      <div className="absolute -bottom-[100px] -right-[100px] w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-[radial-gradient(circle,#B23E36_0%,transparent_70%)] blur-[80px] z-0" />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={container}
        transition={{ duration: 2 }}
        className="relative z-10"
      >
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-black text-center semiBold text-[1.2rem] md:text-[2rem] mb-1">
            From
            <span className="playfair mx-1 text-[#d64a40] text-[1.4rem] md:text-[2.2rem]">
              Concept
            </span>
            to Launch
          </h2>
          <p className="text-black/70 text-center medium text-xs md:text-sm">
            A streamlined process that transforms your ideas into functional,
            beautifully designed digital experiences.
          </p>
        </div>
        <div className="flex gap-8 justify-center flex-wrap">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-gray rounded-sm items-center p-8 min-w-[220px] max-w-[300px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] text-black text-center flex-1"
              variants={item}
            >
              <Lottie
                className="w-8 h-8 mx-auto md:w-10 md:h-10"
                animationData={step.icon}
                loop={true}
              />
              <h3 className="mb-4 text-black text-lg semiBold">{step.title}</h3>
              <p className="text-black medium text-xs md:text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;
