"use client";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Image from "next/image";
import Texture from "../assets/Texture.svg";
import TextureWithNoStars from "../assets/TextureWithNoStars.svg";
import { data } from "../data/data";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
    <div id="portfolio" className="text-center bg-main relative">
      <div className="flex justify-end">
        <Image
          src={Texture}
          priority
          alt="Services Title"
          className="w-[20rem] md:w-[28rem] mx-4 mt-6"
        />
      </div>

      <h3
        className="mb-6 mt-2 text-third text-right mx-6 md:text-lg"
        id="ibmsemi"
      >
        تمثل هذه المشاريع جهودي وإبداعاتي في مجالات متعددة. تفضل بالاطلاع على
        بعض المشاريع التي قمت بتنفيذها
      </h3>

      <div id="arabic" className="flex justify-center mb-4">
        <button
          onClick={() => handleFilterChange("design")}
          className={`mx-4 w-24 p-2 border border-third rounded-sm ${
            currentFilter === "design" ? " bg-third text-main" : "text-third"
          }`}
        >
          تصاميم
        </button>
      </div>

      <div className="pt-6">
        <div className="flex flex-col md:flex-row justify-center items-center text-center mx-12 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="mb-4 project-container relative shadow-2xl"
            >
              <Image
                src={project.imageCover}
                alt={project.title}
                width={500}
                height={400}
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
