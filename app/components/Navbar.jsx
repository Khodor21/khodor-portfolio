"use client";

import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import { motion } from "framer-motion";
import MainLogo from "../assets/MainLogo.svg";
import NavSide from "./NavSide";
import Image from "next/image";
import Link from "next/link";
import "fontsource-lora";
const Navbar = () => {
  const topDataVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <nav className="py-4 px-2 md:px-6 relative z-10 arabic">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={topDataVariants}
          transition={{ duration: 1.2 }}
        >
          {" "}
          <div className="flex justify-between items-center">
            {" "}
            <div className="flex pl-4">
              <Image
                src={MainLogo}
                className="lg:w-24 md:w-20 w-16 mr-2"
                alt="خضر حسن"
              />
            </div>
            <div id="arabic" className="text-second">
              <div className="lg:flex gap-14 hidden text-xl flex-row-reverse">
                <Link href="#services" className="hover:underline rounded px-2">
                  خدماتي{" "}
                </Link>{" "}
                <Link href="#works" className="hover:underline rounded px-2">
                  أعمالي{" "}
                </Link>
                <Link href="#contact" className="hover:underline rounded px-2">
                  تواصل معي
                </Link>
                <Link
                  href="#testimonial"
                  className="hover:underline rounded px-2"
                >
                  آراء العملاء
                </Link>
              </div>
            </div>
            <div>
              <button className="bg-second rounded-xl shadow-xl text-main lg:flex hidden">
                <Link href="tel:+961-71708103">
                  <div className="my-2 mx-4 flex gap-2">
                    <BsTelephoneInbound className="mt-1" />
                    <p className="lora tracking-[1px]">+961-71708103</p>
                  </div>
                </Link>
              </button>
              <button className="lg:hidden" onClick={handleNav}>
                {showNav ? (
                  <div className="flex flex-col">
                    <div className="navbar-container">
                      <NavSide onCloseNav={handleNav} />
                    </div>
                  </div>
                ) : (
                  <div>
                    <HiOutlineMenuAlt3 className="text-3xl text-second" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
