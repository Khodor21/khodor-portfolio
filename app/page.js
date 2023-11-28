import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      {/* <Features /> */}
      <Portfolio />
    </div>
  );
};

export default page;
