import React from "react";
import Lamp1 from "../assets/Lamp1.svg";
import Lamp2 from "../assets/Lamp2.svg";
import Image from "next/image";
const page = () => {
  return (
    <div id="portfolio" className="text-center bg-third relative h-screen">
      <div className="">
        {" "}
        <Image
          src={Lamp1}
          alt="Lamp1"
          className="absolute top-0 left-0 w-48 md:w-96 md:mx-16"
        />
        <Image
          src={Lamp2}
          alt="Lamp2"
          className="absolute top-0 right-0 w-48 md:w-96 md:mx-16"
        />{" "}
      </div>
    </div>
  );
};

export default page;
