"use client";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import { FaDownload } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const topDataVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="pt-4 px-4 md:pt-8 md:px-16 relative z-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={topDataVariants}
        transition={{ duration: 1.2 }}
        className="flex justify-between items-center medium text-[#30b874] text-xs md:text-base"
      >
        <div className="flex gap-1 flex-row">
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="flex gap-1 flex-row items-center"
          >
            <FaCircle size={8} className="text-[#30b874]" />
            Available for new project
          </motion.div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/files")}
            className="p-2 hover:bg-[#bb3229]/10 rounded-full transition duration-300"
            aria-label="Download"
          >
            <FaDownload size={20} className="text-[#bb3229]" />
          </button>

          <Image
            src={logo}
            alt="Logo"
            priority
            className="object-contain w-6 md:w-8"
          />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
