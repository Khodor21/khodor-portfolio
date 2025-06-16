"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useRouter } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { data } from "../data/data";
import Image from "next/image";

function ImageShowcase({ images, alt, autoplay = true, interval = 2500 }) {
  const [index, setIndex] = useState(0);
  const timer = useRef();

  useEffect(() => {
    if (!autoplay || images.length < 2) return;
    timer.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer.current);
  }, [autoplay, images.length, interval]);

  if (!images || images.length === 0) return null;

  const imgs =
    images.length >= 3 ? images : [...images, ...images, ...images].slice(0, 3);

  const leftIdx = (index - 1 + imgs.length) % imgs.length;
  const centerIdx = index;
  const rightIdx = (index + 1) % imgs.length;

  const imgConfigs = [
    {
      key: "left",
      className:
        "absolute left-0 w-[55%] max-w-[110px] md:max-w-[150px] aspect-[4/5] rounded overflow-hidden z-10 transition-all duration-500 ease-in-out",
      style: {
        transform: "scale(0.88) rotate(-14deg)",
        filter: "brightness(0.88) blur(1.2px)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      },
      img: imgs[leftIdx],
    },
    {
      key: "center",
      className:
        "relative z-20 w-[70%] max-w-[180px] md:max-w-[220px] aspect-[4/5] rounded-lg overflow-hidden shadow-lg mx-auto transition-all duration-500 ease-in-out",
      style: {
        transform: "scale(1) rotate(0deg)",
        filter: "brightness(1)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
      },
      img: imgs[centerIdx],
    },
    {
      key: "right",
      className:
        "absolute right-0 w-[55%] max-w-[110px] md:max-w-[150px] aspect-[4/5] rounded overflow-hidden z-10 transition-all duration-500 ease-in-out",
      style: {
        transform: "scale(0.88) rotate(14deg)",
        filter: "brightness(0.88) blur(1.2px)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      },
      img: imgs[rightIdx],
    },
  ];

  return (
    <div className="relative w-full flex items-center justify-center h-[260px] md:h-[320px]">
      {imgConfigs.map(({ key, className, style, img }) => (
        <div key={key} className={className} style={style}>
          <Image
            src={img}
            alt={alt}
            fill
            className="object-cover transition-all duration-500 ease-in-out"
            draggable={false}
          />
          {/* Subtle dark overlay for back images */}
          {key !== "center" && (
            <div className="absolute inset-0 bg-black/10 transition-all duration-500" />
          )}
        </div>
      ))}
    </div>
  );
}

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
        <p className="medium text-sm mb-4">{project.description}</p>
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
          className="mt-2 text-sm rounded inline-flex items-center medium bg-[#d64a40] text-white px-2 py-1 w-max"
        >
          View Projects <MdOutlineArrowOutward className="ml-1" />
        </button>
      </div>
      {/* Right Section */}
      <div className="relative w-full md:w-1/2 mt-4 md:mt-0 md:ml-4 flex-shrink-0 flex items-center justify-center">
        <ImageShowcase
          images={project.images || [project.imageCover]}
          alt={project.title}
        />
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
