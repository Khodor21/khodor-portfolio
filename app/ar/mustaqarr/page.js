import React from "react";
import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";

const Page = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <TopBar />
      <HeroSection />
    </div>
  );
};

export default Page;
