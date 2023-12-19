"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import Image from "next/image";
import MyInstagramDesigns from "../assets/Instagram Post.jpg";
import MyInstargramPosts1 from "../assets/My Instargram Posts1.jpg";
import DentalInstagramDesign from "../assets/Instagram post1.jpg";
import DietitianInstagramDesign from "../assets/Instagram post2.jpg";
import Texture from "../assets/Texture.svg";
import TextureWithNoStars from "../assets/TextureWithNoStars.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const projects = {
  design: [
    {
      id: 1,
      title: "@khodorD تصميمات لحساب",
      subtitle: "",
      images: [MyInstagramDesigns, DentalInstagramDesign],
    },
    {
      id: 2,
      title: "@sana_10 تصميمات لحساب",
      subtitle: "",
      images: [DentalInstagramDesign, DentalInstagramDesign],
    },
    {
      id: 3,
      title: "@sana_10 تصميمات لحساب",
      subtitle: "",
      images: [DietitianInstagramDesign, DentalInstagramDesign],
    },
  ],
  web: [
    {
      id: 4,
      title: "خدمات ويب مشروع 1",
      subtitle: "",
      images: [MyInstagramDesigns, DentalInstagramDesign],
    },
    {
      id: 5,
      title: "خدمات ويب مشروع 2",
      subtitle: "",
      images: [MyInstagramDesigns, DentalInstagramDesign],
    },
  ],
};

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("design");
  const selectedItem = projects[selectedCategory].find(
    (project) => project.id === selectedId
  );

  const [currentImage, setCurrentImage] = useState(Texture);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === Texture ? TextureWithNoStars : Texture
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="portfolio" className="text-center bg-main relative">
      <div className="flex justify-end">
        <Image
          src={currentImage}
          priority
          alt="Services Title"
          className="w-[20rem] md:w-[28rem] mx-4"
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
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="mb-4 project-container relative"
            >
              <Image
                src={project.images[0]}
                alt={project.title}
                width={500}
                height={400}
              />
              <div className="overlay">
                <div className="overlay-content">
                  <h4 className="text-white">{project.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <Modal project={selectedItem} onClose={() => setSelectedId(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
