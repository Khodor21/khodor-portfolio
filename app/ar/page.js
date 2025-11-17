import React from "react";
import Hero from "./Ar-Sections/Ar-Hero.js";
import Media from "./Ar-Sections/Ar-Media.js";
import About from "./Ar-Sections/Ar-About.js";
const page = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Media />
      <About />
    </div>
  );
};

export default page;
