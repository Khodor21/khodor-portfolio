"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Import your custom SVGs
import homeIcon from "../images/icons/home.svg";
import userIcon from "../images/icons/user.svg";
import searchIcon from "../images/icons/search.svg";
import cartIcon from "../images/icons/cart.svg";
import heartIcon from "../images/icons/heart.svg";

export default function BottomNavigation() {
  const pathname = usePathname();

  // Define navigation items with your custom SVGs
  const navItems = [
    {
      name: "الرئيسية",
      path: "/",
      icon: homeIcon,
    },
    {
      name: "حسابي",
      path: "/profile",
      icon: userIcon,
    },
    {
      name: "بحث",
      path: "/search",
      icon: searchIcon,
    },
    {
      name: "طلباتي",
      path: "/orders",
      icon: cartIcon, // Used cart.svg here for orders/bag
    },
    {
      name: "المفضلة",
      path: "/favorites",
      icon: heartIcon,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white rounded-t-[20px] shadow-[0_-8px_30px_rgba(0,0,0,0.06)] z-50 pt-4 pb-2 px-2 border-t border-1 border-[#0B1261]">
      <ul className="flex justify-between items-center w-full">
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <li key={index} className="flex-1 flex justify-center">
              <Link
                href={item.path}
                className="flex flex-col items-center gap-1.5 w-full relative pb-3"
              >
                {/* Custom SVG Icon Container */}
                <div
                  className={`relative w-4 h-4 transition-all duration-300 ${
                    isActive ? "opacity-100 scale-110" : "opacity-100 grayscale"
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Text Label */}
                <span
                  className={`text-[13px] font-medium transition-colors ${
                    isActive ? "text-[#0B1261] font-bold" : "text-black"
                  }`}
                >
                  {item.name}
                </span>

                {/* Active Underline Indicator */}
                {isActive && (
                  <div className="absolute bottom-0 w-10 h-1 bg-[#0B1261] rounded-t-md" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* iOS-style Bottom Home Indicator */}
      <div className="w-[120px] h-[4px] bg-gray-100 rounded-full mx-auto mt-2" />
    </nav>
  );
}
