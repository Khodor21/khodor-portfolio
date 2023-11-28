"use client";
import React, { useState } from "react";
import Image from "next/image";
import DesignProject1 from "../assets/Project1.jpg";
import DesignProject2 from "../assets/Project2.jpg";
import WebProject1 from "../assets/Feature3.png";
import WebProject2 from "../assets/Feature4.png";
import Lamp1 from "../assets/Lamp1.svg";
import Lamp2 from "../assets/Lamp2.svg";
import Texture from "../assets/Texture.svg";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("design");

  const projects = {
    design: [
      { title: "@khodorD تصميمات لحساب  ", image: DesignProject1 },
      { title: "@sana_10 تصميمات لحساب", image: DesignProject2 },
    ],
    web: [
      { title: "خدمات ويب مشروع 1", image: WebProject1 },
      { title: "خدمات ويب مشروع 2", image: WebProject2 },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div id="portfolio" className="text-center py- bg-third relative">
      <Image
        src={Lamp1}
        alt="Lamp1"
        className="absolute top-0 left-0 w-48 md:w-96"
      />
      <Image
        src={Lamp2}
        alt="Lamp2"
        className="absolute top-0 right-0 w-48 md:w-96"
      />
      <div>
        <Image
          src={Texture}
          priority
          alt="Texture"
          className="inset-0 w-64 md:w-96 mx-auto relative"
        />
        <h3 className="mb-6 text-main/60 relative" id="arabic">
          مشــاريع مبتكــرة تـرفع مســتوى نجاحـك{" "}
        </h3>
      </div>

      <div id="arabic" className="flex justify-center mb-4">
        <button
          onClick={() => handleCategoryClick("design")}
          className={`mx-4 w-24 p-2 border border-main rounded-sm ${
            selectedCategory === "design" ? " bg-main text-third" : "text-main"
          }`}
        >
          تصاميم
        </button>
        <button
          onClick={() => handleCategoryClick("web")}
          className={`mx-4 w-24 p-2 rounded-sm border border-main  ${
            selectedCategory === "web" ? " bg-main text-third" : "text-main"
          }`}
        >
          برمجة
        </button>
      </div>

      <div className="pt-6">
        <div className="flex flex-col md:flex-row justify-center items-center text-center mx-12 gap-4">
          {projects[selectedCategory].map((project, index) => (
            <div key={index} className="mb-4">
              <Image
                src={project.image}
                alt={project.title}
                layout="responsive"
              />
              <p className="text-main mt-2" id="ibmsemi">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
