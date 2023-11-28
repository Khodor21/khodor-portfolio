import React from "react";
import Image from "next/image";
import Title from "../assets/TextureServices.svg";

const Services = () => {
  return (
    <div className="text-center">
      <div>
        <Image
          src={Title}
          priority
          alt="Texture"
          className="inset-0 w-64 md:w-96 mx-auto relative"
        />
        <h3 className="mb-6 text-second/60 relative text-center" id="arabic">
          مشــاريع مبتكــرة تـرفع مســتوى نجاحـك{" "}
        </h3>
      </div>
      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-6 mx-8">
        {/* Card 1 */}
        <div className="border p-4">
          {/* Add content for the first card here */}
          <h3 className="mb-2 text-second/60 relative" id="arabic">
            {/* Content for the first card */}
          </h3>
        </div>

        {/* Card 2 */}
        <div className="border p-4">
          {/* Add content for the second card here */}
          <h3 className="mb-2 text-second/60 relative" id="arabic">
            {/* Content for the second card */}
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
