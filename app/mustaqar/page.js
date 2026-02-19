import React from "react";
import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import categories from "./CategoriesData.js";

const Page = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <TopBar />
      <HeroSection />
      {categories.map((section) => (
        <CategorySection key={section.id} section={section} />
      ))}
    </div>
  );
};

export default Page;
