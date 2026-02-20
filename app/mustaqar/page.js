import React from "react";
import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import categories from "./CategoriesData.js";
import Features from "./components/Features";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <div className="w-full mb-10 min-h-screen overflow-hidden">
      <TopBar />
      <HeroSection />
      {categories.map((section) => (
        <CategorySection key={section.id} section={section} />
      ))}
      <Features />
      <Footer />
    </div>
  );
};

export default Page;
