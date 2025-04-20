"use client";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Image from "next/image";
import Texture from "../assets/images/Texture.svg";
import TextureWithNoStars from "../assets/images/TextureWithNoStars.svg";
import PortfolioTitle from "../assets/images/PortfolioTitle.svg";

import { data } from "../data/data";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const [currentFilter, setCurrentFilter] = useState("design");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImage, setCurrentImage] = useState(Texture);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === Texture ? TextureWithNoStars : Texture
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    setSelectedItem(null);
  };

  const handleProjectClick = (project) => {
    setSelectedItem(project);
  };

  const filteredProjects = currentFilter
    ? projects.filter(
        (project) =>
          project.title.includes("تصاميم") || currentFilter === "design"
      )
    : projects;

  return (
    <div id="portfolio" className="text-center bg-black relative">
      <Image
        src={PortfolioTitle}
        priority
        className="w-[15rem] md:w-[20rem] mx-auto"
        alt="Where is the Image?"
        layout="/"
      />

      <h3 className="mb-6 ibmbold text-green text-center mx-6 text-sm md:text-lg">
        نتائج تهمّك: تصميم يشدّ، تجربة تبقى، وتطوير يشتغل بذكاء
      </h3>
      <div className="flex justify-center mb-4 ">
        <button
          onClick={() => handleFilterChange("design")}
          className={`mx-4 w-24 p-2 border text-sm ibmbold rounded-sm ${
            currentFilter === "design" ? " bg-white text-black" : "text-third"
          }`}
        >
          تصاميم
        </button>
      </div>

      <div className="pt-6">
        <div className="flex flex-col md:flex-row justify-center items-center text-center mx-4 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="mb-4 project-container relative shadow-2xl"
            >
              <Image
                src={project.imageCover}
                alt={project.title}
                width={600}
                height={300}
                className=""
              />
              <div className="overlay">
                <div className="overlay-content">
                  <h4 className="text-main">{project.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <Modal project={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default Portfolio;
