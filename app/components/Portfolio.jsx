"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MyInstagramDesigns from "../assets/Instagram Post.jpg";
import DentalInstagramDesign from "../assets/Instagram post1.jpg";
import DietitianInstagramDesign from "../assets/Instagram post2.jpg";
import Texture from "../assets/Texture.svg";
import TextureWithNoStars from "../assets/TextureWithNoStars.svg";

const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(Texture);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === Texture ? TextureWithNoStars : Texture
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("design");

  const projects = {
    design: [
      { title: "@khodorD تصميمات لحساب", image: MyInstagramDesigns },
      { title: "@sana_10 تصميمات لحساب", image: DentalInstagramDesign },
      { title: "@sana_10 تصميمات لحساب", image: DietitianInstagramDesign },
    ],
    web: [
      { title: "خدمات ويب مشروع 1", image: MyInstagramDesigns },
      { title: "خدمات ويب مشروع 2", image: MyInstagramDesigns },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div id="portfolio" className="text-center bg-main relative">
      <div className="flex justify-end">
        <Image
          src={currentImage}
          priority
          alt="Services Title"
          className="w-64 md:w-[28rem] mx-4"
        />
      </div>

      <h3
        className="mb-6 mt-2 text-third text-right mx-6 md:text-lg"
        id="ibmsemi"
      >
        خدمات متميزة تســــاعدك علــى تحقيـق أهدافك وتطوير مشروعك بكفاءة عالية
      </h3>

      <div id="arabic" className="flex justify-center mb-4">
        <button
          onClick={() => handleCategoryClick("design")}
          className={`mx-4 w-24 p-2 border border-third rounded-sm ${
            selectedCategory === "design" ? " bg-third text-main" : "text-third"
          }`}
        >
          تصاميم
        </button>
        <button
          onClick={() => handleCategoryClick("web")}
          className={`mx-4 w-24 p-2 rounded-sm border border-third  ${
            selectedCategory === "web" ? " bg-third text-main" : "text-third"
          }`}
        >
          برمجة
        </button>
      </div>

      <div className="pt-6">
        <div className="flex flex-col md:flex-row justify-center items-center text-center mx-12 gap-4">
          {projects[selectedCategory].map((project, index) => (
            <div key={index} className="mb-4 project-container relative">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
              />
              <div className="overlay">
                <div className="overlay-content">
                  <h4 className="text-white">{project.title}</h4>
                  {/* Add more details or customize as needed */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
