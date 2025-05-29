"use client";

import { motion } from "framer-motion";
import money from "../assets/animation/money.json";
import response from "../assets/animation/response.json";
import time from "../assets/animation/time.json";
import Lottie from "lottie-react";

const features = [
  { id: 1, icon: time, title: "Response in 24 hours" },
  { id: 2, icon: money, title: "Affordable Excellence" },
  { id: 3, icon: response, title: "Fast Turnaround" },
];

export default function FeatureSection() {
  return (
    <section className="md:px-12 px-4 flex items-start md:items-center">
      <div
        className="flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-12
        w-full md:justify-center"
      >
        {features.map(({ id, icon, title }, i) => (
          <motion.div
            key={id}
            className="flex items-center space-x-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.3, ease: "easeOut" }}
          >
            <div className="bg-gray rounded p-2">
              <div>
                <Lottie
                  animationData={icon}
                  loop={true}
                  className="text-black/90 w-6 h-6 md:w-8 md:h-8"
                />
              </div>
            </div>
            <h3 className="text-base md:text-lg medium">{title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
