"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import Image from "next/image";
import Texture from "../assets/Texture.svg";
import TextureWithNoStars from "../assets/TextureWithNoStars.svg";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentFilter, setCurrentFilter] = useState("web");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImage, setCurrentImage] = useState(Texture);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend2024.vercel.app/api/portfolio"
        );

        const updatedProjects = response.data.map((project) => ({
          ...project,
          images: project.images
            .map((imageArray) => imageArray.map((image) => image.imagesUrl))
            .flat(),
        }));

        setProjects(updatedProjects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchProjects();
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
  const handleShowAll = () => {
    setCurrentFilter(null); // Reset the filter to show all projects
  };

  const filteredProjects = currentFilter
    ? projects.filter(
        (project) => project.category.toLowerCase() === currentFilter
      )
    : projects;

  if (loading) {
    return <p>Loading...</p>; // You can customize the loading indicator
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Display an error message
  }

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
          onClick={() => handleFilterChange("design")}
          className={`mx-4 w-24 p-2 border border-third rounded-sm ${
            currentFilter === "design" ? " bg-third text-main" : "text-third"
          }`}
        >
          تصاميم
        </button>
        <button
          onClick={() => handleFilterChange("web")}
          className={`mx-4 w-24 p-2 rounded-sm border border-third  ${
            currentFilter === "web" ? " bg-third text-main" : "text-third"
          }`}
        >
          برمجة
        </button>
      </div>
      <div className="pt-6">
        <div className="flex flex-col md:flex-row justify-center items-center text-center mx-12 gap-4">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => handleProjectClick(project)}
              className="mb-4 project-container relative"
            >
              <Image
                key={0}
                src={project.images[0]}
                alt={project.title}
                width={500}
                height={400}
                layout="/"
                className="rounded"
              />
              <div className="overlay">
                <div className="overlay-content">
                  <h4 className="text-white">{project.title}</h4>
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
