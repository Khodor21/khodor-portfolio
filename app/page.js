"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import ProcessSection from "./sections/process";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/ar");
  }, [router]);

  return (
    <div className="bg-white">
      <Hero />
      <Portfolio />
      <Services />
      <ProcessSection />
    </div>
  );
};

export default Page;
