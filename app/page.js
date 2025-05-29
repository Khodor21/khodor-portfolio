"use client";
import React from "react";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Footer from "./sections/Footer";
import ProcessSection from "./sections/process";

const Page = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Portfolio />
      <Services />
      <ProcessSection />
      <Footer />
    </div>
  );
};

export default Page;
