import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function navbarData() {
  return [
    { name: "الرئيسية" },
    { name: "خدماتي" },
    { name: "أعمالي" },
    { name: " تواصل معي" },
    { name: "آراء العملاء" },
  ];
}

export const MenuItem = () => {
  const navbarList = navbarData();

  return (
    <>
      {navbarList.map((item, index) => (
        <motion.li
          key={index}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <h1>{item.name}</h1>
        </motion.li>
      ))}
    </>
  );
};
