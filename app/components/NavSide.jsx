import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const NavSide = ({ onCloseNav }) => {
  const handleCloseNav = () => {
    onCloseNav();
  };
  return (
    <div className="" id="arabic">
      <div className="bg-[#ffff] -l -main shadow-lg xs:w-[50%] md:w-[35%] absolute left-0 right-0 top-0 ">
        <div className=" w-full">
          <div className="flex flex-col items-end gap-6 p-10 text-second">
            <div
              className="text-2xl text-third relative z-10"
              onClick={handleCloseNav}
            >
              <AiOutlineClose />
            </div>
            <Link href="/" className="hover:text-main">
              الرئيسية
            </Link>
            <Link href="#services" className="hover:text-main">
              خدماتي{" "}
            </Link>{" "}
            <Link href="#works" className="hover:text-main">
              أعمالي{" "}
            </Link>
            <Link href="#contact" className="hover:text-main">
              تواصل معي
            </Link>
            <Link href="#testimonial" className="hover:text-main">
              آراء العملاء
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSide;
