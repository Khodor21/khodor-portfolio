import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      {/* <Features /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
