import React from "react";
import Afnan from "../assets/Afnan Mockup project.jpg";
import AlMu3in from "../assets/Al Mu3in Mockup.jpg";
import Almas from "../assets/Almas Dental Centre Mockup.jpg";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="grid grid-row md:grid-cols-2 justify-between items-center">
      <div className="relative">
        <Image className="object-cover" alt="project" src={Almas} />
        <div className="overlay absolute inset-0 bg-blue opacity-0 transition-opacity duration-300 hover:opacity-90">
          <div className="flex flex-col gap-4 justify-start items-start h-full">
            <h1
              id="gelasio"
              className="text-white font-bold text-center text-xl pt-2 pb-2"
            >
              Almas Dental Centre
            </h1>
            <p id="poppins" className="text-[#ffffffee] pt-2 pb-2">
              Dental Health Redefined: Simplified Appointments & Expert
              Guidance.{" "}
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="relative">
        <Image className="object-cover" alt="project" src={Afnan} />
        <div className="overlay absolute inset-0 bg-blue opacity-0 transition-opacity duration-300 hover:opacity-90">
          <div className="flex flex-col gap-4 justify-start items-start h-full">
            <h1
              id="gelasio"
              className="text-white font-bold text-center text-xl pt-2 pb-2"
            >
              Al-Fann Portfolio
            </h1>
            <p id="poppins" className="text-[#ffffffee] pt-2 pb-2">
              This is concise, piques curiosity, and highlights the value
              proposition of this portfolio - showcasing impactful work.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image className="object-cover" alt="project" src={AlMu3in} />
        <div className="overlay absolute inset-0 bg-blue opacity-0 transition-opacity duration-300 hover:opacity-90">
          <div className="flex flex-col gap-4 justify-start items-start h-full">
            <h1
              id="gelasio"
              className="text-white font-bold text-center text-xl pt-2 pb-2"
            >
              Al-Muein Website
            </h1>
            <p id="poppins" className="text-[#ffffffee] pt-2 pb-2">
              A contemporary Islamic website with advanced design and features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
