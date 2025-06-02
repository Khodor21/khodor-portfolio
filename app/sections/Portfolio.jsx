"use client";
import React, { useState } from "react";
import folder from "../assets/animation/folder.json";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { data } from "../data/data";
import Image from "next/image";

function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="relative bg-gray border-[#8f8f8f] rounded-xl p-4 md:p-6 overflow-hidden shadow-lg transition cursor-pointer mb-8 w-full max-w-3xl flex flex-col md:flex-row"
    >
      {/* Left Section */}
      <div className="z-10 relative text-black w-full md:w-1/2 flex flex-col justify-between">
        <span className="inline-block py-1 mb-2 text-sm medium rounded-full">
          {project.category}
        </span>
        <h3 className="text-xl md:text-2xl semiBold mb-2">{project.title}</h3>
        <p className="medium text-sm mb-4">
          Created a bold, innovative brand identity, improving recognition by
          45%.
        </p>
        {/* Tags */}
        <div className="flex flex-wrap medium gap-2 text-xs md:text-sm text-black/40 mb-4">
          <span className="py-1 rounded-full">Identity</span>
          <span className="py-1 rounded-full">Branding</span>
          <span className="py-1 rounded-full">Portfolio</span>
          <span className="py-1 rounded-full">Design</span>
        </div>
        {/* View Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick(project);
          }}
          className="mt-2 text-sm rounded inline-flex items-center medium bg-black text-white px-2 py-1 w-max"
        >
          View Identity <MdOutlineArrowOutward className="ml-1" />
        </button>
      </div>
      {/* Right Section */}
      <div className="relative w-full md:w-1/2 h-48 md:h-auto mt-4 md:mt-0 md:ml-4 flex-shrink-0">
        <div className="relative w-full h-48 md:h-full">
          <Image
            src={project.imageCover}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}

const Portfolio = () => {
  const [currentFilter, setCurrentFilter] = useState("design");
  const router = useRouter();

  const handleFilterChange = (filter) => setCurrentFilter(filter);

  const handleProjectClick = () => {
    router.push(`/projects`);
  };

  const filteredProjects = currentFilter
    ? data.filter(
        (project) =>
          project.title.includes("تصاميم") || currentFilter === "design"
      )
    : data;

  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center min-h-[40vh] mx-4 md:mx-24 rounded-xl relative mt-2"
    >
      <div className="absolute left-1/2 -top-[32px] -translate-x-1/2 z-0 w-[320px] h-[120px] md:w-[480px] md:h-[180px] bg-[#d64a40] opacity-30 blur-2xl rounded-full pointer-events-none" />
      <h2 className="text-black text-center semiBold md:w-[</div>50%] text-[1.2rem] md:text-[2rem]">
        A{" "}
        <span className="playfair text-[#d64a40] text-[1.4rem] md:text-[2.2rem]">
          Showcase
        </span>{" "}
        of Ideas Transformed into Impactful Experiences
      </h2>

      <div className="flex justify-center my-4">
        <button
          onClick={() => handleFilterChange("design")}
          className={`mx-4 w-24 p-2 border text-sm medium rounded-sm ${
            currentFilter === "design" ? " bg-white text-black" : "text-third"
          }`}
        >
          Designs
        </button>
      </div>
      {/* Cards in flex-col */}
      <div className="pt-6 flex flex-col items-center w-full">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={handleProjectClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
