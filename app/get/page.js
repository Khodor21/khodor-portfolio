"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Modal from "../components/Modal";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/portfolio");

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
    <div className="container mx-auto px-4">
      <div className="mb-4">
        <button
          onClick={() => handleFilterChange("design")}
          className={`mr-2 px-4 py-2 ${
            currentFilter === "design"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
        >
          Design
        </button>
        <button
          onClick={() => handleFilterChange("web")}
          className={`mr-2 px-4 py-2 ${
            currentFilter === "web" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Website
        </button>
        <button
          onClick={handleShowAll}
          className={`px-4 py-2 ${
            !currentFilter ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Show All
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
}

export default Projects;
