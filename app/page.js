import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import ClientWeb from "./components/ClientWeb";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <ClientWeb />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
