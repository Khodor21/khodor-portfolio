"use client";
import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Footer from "./sections/Footer";
import Testimonial from "./sections/Testimonial";
import FeatureSection from "./components/FeatureSection";

const Page = () => {
  return (
    <div className="bg-white">
      <Hero />
      <FeatureSection />
      <Portfolio />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Page;
