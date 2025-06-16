"use client";
import { data as projects } from "@/app/data/data";
import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../sections/Navbar";

// Custom arrows using react-icons
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
    onClick={onClick}
  >
    <FaChevronLeft size={18} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
    onClick={onClick}
  >
    <FaChevronRight size={18} />
  </button>
);

function Carousel({ details = [], title }) {
  if (!details || details.length === 0) {
    return (
      <div className="h-[400px] flex items-center justify-center bg-gray-100 rounded">
        No images
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768, // Small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Medium devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 9999, // Large devices and above
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    className: "w-full",
  };

  return (
    <div className="relative w-full max-w-[220px] max-h-[275px] lg:max-w-[1080px] lg:max-h-[1350px] mx-auto overflow-hidden">
      <Slider {...settings}>
        {details.map((img, i) => (
          <div
            key={i}
            className="px-0 lg:px-3 flex items-center justify-center"
          >
            <div className="relative aspect-[3/4] w-full rounded overflow-hidden">
              <Image
                src={img}
                alt={title}
                fill
                loading="lazy"
                className="object-cover"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="py-6 px-2 sm:p-4 mx-4 md:mx-24">
      <Navbar />
      <h1 className="text-lg text-center md:text-2xl lg:text-3xl semiBold my-8">
        My Projects : Building Ideas Into{" "}
        <span className="playfair text-[#d64a40]">Reality</span>
      </h1>
      <div className="grid gap-10">
        {projects.map((project) => (
          <section
            key={project.title}
            className="bg-gray rounded p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
          >
            <h2 className="text-lg md:text-2xl mb-4 medium">{project.title}</h2>
            <div className="flex justify-between flex-wrap">
              <div className="w-full h-full">
                <Carousel
                  details={project.details}
                  title={`${project.title} images`}
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
