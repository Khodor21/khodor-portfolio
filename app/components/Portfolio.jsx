"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MyInstagramDesigns from "../assets/Instagram Post.jpg";
import DentalInstagramDesign from "../assets/Instagram post1.jpg";
import DietitianInstagramDesign from "../assets/Instagram post2.jpg";
import Texture from "../assets/Texture.svg";
import TextureWithNoStars from "../assets/TextureWithNoStars.svg";

const projects = {
  design: [
    {
      title: "@khodorD تصميمات لحساب",
      subtitle: "",
      image: MyInstagramDesigns,
    },
    {
      title: "@sana_10 تصميمات لحساب",
      subtitle: "",
      image: DentalInstagramDesign,
    },
    {
      title: "@sana_10 تصميمات لحساب",
      subtitle: "",
      image: DietitianInstagramDesign,
    },
  ],
  web: [
    { title: "خدمات ويب مشروع 1", subtitle: "", image: MyInstagramDesigns },
    { title: "خدمات ويب مشروع 2", subtitle: "", image: MyInstagramDesigns },
  ],
};

const Modal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      className="p-4 rounded-md bg-white"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        className="mb-2 rounded-md"
      />
      <motion.h2 className="text-lg font-bold" id="arabic">
        {project.title}
      </motion.h2>
      <AnimatePresence>
        {project.subtitle && (
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm"
            id="swissra"
          >
            {project.subtitle}
          </motion.h5>
        )}
      </AnimatePresence>
      <motion.button
        className="mt-2 p-2 w-full custom-button rounded-md "
        onClick={onClose}
        id="arabic"
      >
        إغـــلاق
      </motion.button>
    </motion.div>
  </motion.div>
);

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
                src={project.image}
                alt={project.title}
                width={600}
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
