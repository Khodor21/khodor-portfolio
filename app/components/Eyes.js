"use client";

import { useEffect } from "react";

export default function Eyes() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll(".eye").forEach((eye) => {
        const pupil = eye.querySelector(".pupil");
        const rect = eye.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const radius = 10;
        const pupilX = radius * Math.cos(angle);
        const pupilY = radius * Math.sin(angle);
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex gap-2 justify-center items-center py-10">
      <div className="eye w-10 h-10 bg-[#ffffff] shadow-2xl border-1 border-black rounded-full flex items-center justify-center relative">
        <div className="pupil w-4 h-4 bg-black rounded-full absolute transition-transform duration-100"></div>
      </div>
      <div className="eye w-10 h-10 bg-[#ffffff] shadow-2xl border-1 border-black rounded-full flex items-center justify-center relative">
        <div className="pupil w-4 h-4 bg-black rounded-full absolute transition-transform duration-100"></div>
      </div>
    </div>
  );
}
