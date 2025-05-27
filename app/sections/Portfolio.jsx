"use client";
import React, { useState, useEffect } from "react";
import folder from "../assets/animation/folder.json";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { data } from "../data/data";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";

function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="project-container relative cursor-pointer w-full"
    >
      {/* Blurred glass title box */}
      <div
        className="absolute top-3 left-3 right-3 z-20 flex justify-center"
        style={{ pointerEvents: "none" }}
      >
        <div className="backdrop-blur-md bg-white/40 rounded-md px-4 py-2 shadow text-black font-semibold text-base md:text-lg text-center w-full max-w-[90%]">
          {project.title}
        </div>
      </div>
      {/* Arrow button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick(project);
        }}
        className="arrow-btn absolute top-3 right-3 bg-white rounded-full p-2 shadow transition z-30 group"
        aria-label="View project"
        type="button"
      >
        <MdOutlineArrowOutward
          size={24}
          className="text-black transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125 group-hover:text-blue-600"
        />
      </button>
      {project.isVideo ? (
        <video
          src={project.imageCover}
          width="100%"
          height={300}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover rounded-sm w-full h-[200px] md:h-[300px]"
        />
      ) : (
        <Image
          src={project.imageCover}
          alt={project.title}
          width={1920}
          height={400}
          className="object-cover rounded-lg w-full h-[200px] md:h-[400px]"
        />
      )}
    </div>
  );
}

function ProjectCarousel({ projects, onProjectClick }) {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [autoplaySpeed, setAutoplaySpeed] = useState(5000);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
        setAutoplaySpeed(4000);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
        setAutoplaySpeed(4000);
      } else {
        setSlidesToShow(3);
        setAutoplaySpeed(5000);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1, // always slide one card at a time
    arrows: true,
    autoplay: true,
    autoplaySpeed,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="px-2">
            <ProjectCard project={project} onClick={onProjectClick} />
          </div>
        ))}
      </Slider>
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
      className="flex flex-col items-center justify-center min-h-[40vh] mx-4 md:mx-24 rounded-xl relative"
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3">
          <div className="bg-black rounded shadow-xl hover:scale-120 hover:-rotate-[0.2rad] flex items-center justify-center">
            <Lottie
              animationData={folder}
              className="m-2 w-3 h-3 md:w-6 md:h-6"
              loop={true}
            />
          </div>
          <span className="text-black semiBold text-[1.4rem] md:text-[2rem]">
            My Projects
          </span>
        </div>
        <p className="text-black playfair font-bold flex flex-col items-center text-[1rem] md:text-[2rem]">
          The Studio of Possibilities
        </p>
      </div>

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
      <div className="pt-6 flex flex-col items-center w-full">
        <ProjectCarousel
          projects={filteredProjects}
          onProjectClick={handleProjectClick}
        />
      </div>
    </div>
  );
};

export default Portfolio;
