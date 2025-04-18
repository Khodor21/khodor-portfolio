import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Testimonial from "./sections/Testimonial";

const Page = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Testimonial />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Page;
