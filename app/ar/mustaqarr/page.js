import React from "react";
import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
// 1. Change the import to a named import using curly braces
import categories  from "./CategoriesData.js";

const Page = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <TopBar />
      <HeroSection />{" "}
      {/* 2. Update the variable name here to match the import */}
      {categories.map((section) => (
        <CategorySection key={section.id} section={section} />
      ))}
    </div>
  );
};

export default Page;
