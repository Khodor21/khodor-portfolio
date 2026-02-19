"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Loader from "../loading";
const ProjectDesign = ({ image, title, description, id }) => {
  return (
    <div className="relative">
      <Image
        className="object-cover"
        alt="project"
        src={image}
        width={1000}
        height={1000}
      />
      <div className="overlay absolute inset-0 bg-blue opacity-0 transition-opacity duration-300 hover:opacity-90">
        <div className="flex flex-col gap-4 justify-start items-start h-full">
          <h1 className="text-white font-bold text-center text-xl pt-2 pb-2 arabic">
            {title}
          </h1>
          <p className="text-[#ffffffee] pt-2 pb-2 poppins">{description}</p>
        </div>
        <Link className="gelasio" href={`/portfolio/${id}`}>
          <p className="absolute bottom-0 right-0 p-4 text-white hover:text-blue-500">
            View Project
          </p>
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProjects = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://portfolio-backend2024.vercel.app/api/projects",
      );
      setProjects(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="grid grid-row md:grid-cols-2 justify-between items-center">
      {isLoading ? (
        <p>
          <Loader />
        </p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => (
          <ProjectDesign
            key={project.title}
            image={project.images[0][0].imagesUrl}
            title={project.title}
            description={project.description}
            id={project._id}
          />
        ))
      )}
    </div>
  );
};

export default Projects;
