"use client";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
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
        className="flex gap-1 items-center medium text-[#30b874] text-xs md:text-base"
      >
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <FaCircle size={8} className="text-[#30b874]" />
        </motion.div>
        Available for new project
      </motion.div>
    </nav>
  );
};

export default Navbar;
