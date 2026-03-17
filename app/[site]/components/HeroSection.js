import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const HeroSection = ({ data }) => {
  const { bannerImage, logoImage, storeName, tagline, location } = data;

  return (
    <section className="hero-section relative w-full h-[90vh]">
      {/* Background Banner */}
      <Image
        src={bannerImage}
        alt={`${storeName} banner`}
        z
        fill
        priority
        className="object-cover"
      />

      {/* Top Bar: Logo + Location */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="absolute top-2 left-2 z-20">
          <Image
            src={logoImage}
            alt={`${storeName} logo`}
            width={64}
            height={64}
          />
        </div>

        {/* Location */}
        {location && (
          <div
            dir="rtl"
            className="absolute text-right top-2 right-3 z-20 flex items-center gap-1 text-white text-sm md:text-base"
          >
            <FaMapMarkerAlt />
            <div className="leading-tight">
              <p className="font-bold text-sm">{location.city}</p>
              <p className="text-xs font-regular opacity-80">
                {location.address}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-6xl font-bold mb-1 tracking-wide">{storeName}</h1>
        <p className="text-3xl font-regular opacity-90">{tagline}</p>
      </div>
    </section>
  );
};

export default HeroSection;
