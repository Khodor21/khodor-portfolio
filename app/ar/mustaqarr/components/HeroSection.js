import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Hero from "../images/Hero-banner.jpg"
import Logo from "../images/Logo-White.svg"
const HeroSection = () => {
  return (
    <section className="hero-section relative w-full h-[90vh]">

      <Image
        src={Hero}
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <Image
          src={Logo}
          alt="Logo"
          width={56}
          height={56}
        />
      </div>

      {/* Location */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-2 text-white text-sm md:text-base">
        <FaMapMarkerAlt />
        <div className="leading-tight">
          <p className="font-bold">مدينة إدلب</p>
          <p className="text-xs font-regular opacity-80">جنوب ساحة الساعة - بناية...</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">

        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
          مُــسْـتـقَـــــــر
        </h1>

        <p className="text-lg md:text-2xl font-regular opacity-90">
          أصالة تُكمل شخصيتك
        </p>

      </div>

    </section>
  );
};

export default HeroSection;
