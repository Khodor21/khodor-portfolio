"use client";

import React from "react";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/app/assets/images/logo.png";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const fadeDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="pt-5 px-4 md:px-14 lg:px-20 relative z-50">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeDown}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex justify-between items-center"
      >
        {/* STATUS INDICATOR */}
        <div className="flex items-center gap-2 text-[#30b874] medium text-sm md:text-base">
          <motion.div
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex items-center gap-2"
          >
            <FaCircle size={10} className="text-[#30b874]" />
            <span>Available for new project</span>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
