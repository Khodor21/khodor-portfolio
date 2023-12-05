import React from "react";
import Image from "next/image";
import Title from "../assets/ServicesTitle.svg";
import Service1 from "../assets/Service1.svg";
import Service2 from "../assets/Service2.svg";
import Star from "../assets/Star.png";
const Services = () => {
  return (
    <div className="text-center bg-third">
      <Image
        src={Star}
        alt="/"
        priority
        className="md:w-20 w-12 absolute left-0 mx-8 mt-10 starLeft"
      />
      <Image
        src={Star}
        alt="/"
        priority
        className="md:w-14 w-8 absolute right-0 mx-8 mt-7 starRight"
      />

      <div>
        <Image
          src={Title}
          priority
          alt="Texture"
          className="inset-0 w-48 md:w-80 mx-auto pt-6"
        />{" "}
        <Image
          src={Star}
          alt="/"
          priority
          className="md:w-16 w-10 mt-4 absolute left-1/3 starMiddle"
        />
        <h3 className="mb-6 mt-2 text-main text-center" id="arabic">
          مشــاريع مبتكــرة تـرفع مســتوى نجاحـك{" "}
        </h3>
      </div>
      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-6 mx-8">
        {/* Card 1 */}
        <div className="border p-4">
          <Image
            src={Service1}
            priority
            alt=""
            className="border border-b-white"
          />
          <h3 className="mb-2 text-main relative" id="arabic">
            برمــجة تطبيقــات الويـــب
          </h3>
        </div>

        {/* Card 2 */}
        <div className="border p-4">
          <Image
            src={Service2}
            priority
            alt=""
            className="border border-b-white"
          />{" "}
          <h3 className="mb-2 text-main relative" id="arabic">
            برمــجة تطبيقــات الويـــب
          </h3>
        </div>

        {/* Card 3 */}
        <div className="border p-4">
          {/* Add content for the third card here */}
          <h3 className="mb-2 text-second/60 relative" id="arabic">
            {/* Content for the third card */}
          </h3>
        </div>
      </div>

      {/* Title */}
    </div>
  );
};

export default Services;
