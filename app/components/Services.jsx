import React from "react";
import Image from "next/image";
import Title from "../assets/ServicesTitle.svg";
import Service1 from "../assets/Service1.svg";
import Service2 from "../assets/Service2.svg";
import Service3 from "../assets/Service3.svg";
import Star from "../assets/Star.png";

const Services = () => {
  return (
    <div className="text-center bg-third">
      <div className="flex justify-end">
        <Image
          src={Title}
          priority
          alt="Texture"
          className="w-48 md:w-80 pt-6 mx-8 "
        />
      </div>

      <h3
        className="mb-6 mt-2 text-main text-right mx-10 md:text-lg"
        id="ibmbold"
      >
        مشــــــــــــاريع مبتكــرة تـرفع مســــــــــــــــتوى نجاحــــــــــك
      </h3>

      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-6 mx-8">
        {/* Card 1 */}
        <div className="border bg-white p-4">
          <Image
            src={Service1}
            priority
            alt=""
            className="border border-b-white"
          />
          <h3 className="mb-2 text-third relative" id="arabic">
            برمــــــجة تطبيقــــــات الويـــــــب
          </h3>
        </div>

        {/* Card 2 */}
        <div className="border bg-white p-4">
          <Image src={Service2} priority alt="" className="border " />{" "}
          <h3 className="mb-2 text-third relative" id="arabic">
            تصــــــاميـــم ســــوشــل ميديـــــــا
          </h3>
        </div>

        {/* Card 3 */}
        <div className="border bg-white p-4">
          <Image src={Service3} priority alt="" className="border " />{" "}
          <h3 className="mb-2 text-third relative" id="arabic">
            تصميــــم فيديوهــــات إعلانيّـــــة
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
