import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const HeroSection = ({ data }) => {
  const { bannerImage, logoImage, storeName, storesvg, tagline, location } =
    data;

  return (
    <section className="hero-section relative w-full h-[90vh]">
      {/* Background Banner */}
      <Image
        src={bannerImage}
        alt={`${storeName} banner`}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 z-10 bg-[#805302] opacity-60" />

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
              <p className="text-[11px] font-regular opacity-80">
                {location.address}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        {storesvg && <Image src={storesvg} alt={storeName} className="w-48" />}
        <p className="text-2xl font-regular opacity-90">{tagline}</p>
      </div>
    </section>
  );
};

export default HeroSection;
