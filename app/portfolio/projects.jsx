import React from "react";
import Afnan from "../assets/Afnan Mockup project.jpg";
import AlMu3in from "../assets/Al Mu3in Mockup.jpg";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="project-image relative">
        <Image
          className="h-[50%] w-full object-cover " // Adjust styles as needed
          alt="project"
          src={Afnan}
        />
        <div className="overlay absolute inset-0 bg-blue-500 opacity-0 transition-opacity duration-300 hover:opacity-70 "></div>
      </div>
      <div className="project-image relative">
        <Image
          className="h-[50%] w-full object-cover " // Adjust styles as needed
          alt="project"
          src={AlMu3in}
        />
        <div className="overlay absolute inset-0 bg-blue-500 opacity-0 transition-opacity duration-300 hover:opacity-70 "></div>
      </div>
    </div>
  );
};

export default Projects;
