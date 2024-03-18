import React from "react";
import Afnan from "../assets/Afnan Mockup project.jpg";
import AlMu3in from "../assets/Al Mu3in Mockup.jpg";
import Almas from "../assets/Almas Dental Centre Mockup.jpg";
import Link from "next/link";
import Image from "next/image";

const ProjectDesign = ({ image, title, description, id }) => {
  return (
    <div className="relative">
      <Image className="object-cover" alt="project" src={image} />
      <div className="overlay absolute inset-0 bg-blue opacity-0 transition-opacity duration-300 hover:opacity-90">
        <div className="flex flex-col gap-4 justify-start items-start h-full">
          <h1
            id="gelasio"
            className="text-white font-bold text-center text-xl pt-2 pb-2"
          >
            {title}
          </h1>
          <p id="poppins" className="text-[#ffffffee] pt-2 pb-2">
            {description}
          </p>
        </div>
        <Link id="gelasio" href={`/portfolio/${id}`}>
          <p className="absolute bottom-0 right-0 p-4 text-white hover:text-blue-500">
            View Project
          </p>
        </Link>{" "}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="grid grid-row md:grid-cols-2 justify-between items-center">
      <ProjectDesign
        image={Almas}
        title="Almas Dental Centre"
        description="Dental Health Redefined: Simplified Appointments & Expert Guidance."
        id="1"
      />
      <ProjectDesign
        image={Afnan}
        title="Al-Fann Portfolio"
        description="This is concise, piques curiosity, and highlights the value proposition of this portfolio - showcasing impactful work."
        id="2"
      />
      <ProjectDesign
        image={AlMu3in}
        title="Al-Muein Website"
        description="A contemporary Islamic website with advanced design and features."
        id="3"
      />
    </div>
  );
};

export default Projects;
