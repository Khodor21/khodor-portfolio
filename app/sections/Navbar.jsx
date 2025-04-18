"use client";

import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { PiWechatLogoLight } from "react-icons/pi";
import { motion } from "framer-motion";
import MainLogo from "../assets/images/MainLogo.svg";
import NavSide from "./NavSide";
import Image from "next/image";
import Link from "next/link";

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
      <nav className="pt-4 px-2 md:pt-8 md:px-16 relative z-10 ibmmed">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={topDataVariants}
          transition={{ duration: 1.2 }}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex pl-4">
              <Image
                src={MainLogo}
                className="lg:w-36 md:w-32 w-24 mr-2"
                alt="خضر حسن"
              />
            </div>

            {/*Right Side*/}
            <div className="flex items-center gap-10">
              <div className="lg:flex gap-6 hidden flex-row-reverse ibmmed">
                <Link
                  href="/#services"
                  className="text-white/80 hover:text-white "
                >
                  خدماتي
                </Link>
                <Link
                  href="/#works"
                  className="text-white/80 hover:text-white "
                >
                  أعمالي
                </Link>
                <Link
                  href="/#contact"
                  className="text-white/80 hover:text-white "
                >
                  تواصل معي
                </Link>
                <Link
                  href="/#testimonial"
                  className="text-white/80 hover:text-white "
                >
                  آراء العملاء
                </Link>
              </div>
              <div className="flex gap-2">
                <button className="bg-third rounded-sm text-white flex">
                  <Link href="tel:+961-71708103">
                    <div className="my-1 mx-2 flex justify-center items-center gap-2">
                      <PiWechatLogoLight className="" />
                      <p className="text-base">اتصل بي</p>
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
                      <HiOutlineMenuAlt3 className="text-3xl text-white" />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
