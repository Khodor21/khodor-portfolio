"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BiHomeAlt,
  BiSolidHome,
  BiUser,
  BiSolidUser,
  BiSearch,
  BiHeart,
  BiSolidHeart,
} from "react-icons/bi";
import { BsBagCheck, BsBagCheckFill } from "react-icons/bs";

export default function BottomNavigation() {
  const pathname = usePathname();

  // Define navigation items with both an outline (inactive) and filled (active) icon
  const navItems = [
    {
      name: "الرئيسية",
      path: "/",
      Icon: BiHomeAlt,
      ActiveIcon: BiSolidHome,
    },
    {
      name: "حسابي",
      path: "/profile",
      Icon: BiUser,
      ActiveIcon: BiSolidUser,
    },
    {
      name: "بحث",
      path: "/search",
      Icon: BiSearch,
      ActiveIcon: BiSearch, // Search rarely needs a filled state, but you can change this if preferred
    },
    {
      name: "طلباتي",
      path: "/orders",
      Icon: BsBagCheck,
      ActiveIcon: BsBagCheckFill,
    },
    {
      name: "المفضلة",
      path: "/favorites",
      Icon: BiHeart,
      ActiveIcon: BiSolidHeart,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white rounded-t-[2.5rem] shadow-[0_-8px_30px_rgba(0,0,0,0.06)] z-50 pt-4 pb-2 px-2 border-t broder-1 border-[#0B1261]">
      <ul className="flex justify-between items-center w-full">
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;

          // Determine which icon to show based on the active state
          const CurrentIcon = isActive ? item.ActiveIcon : item.Icon;

          return (
            <li key={index} className="flex-1 flex justify-center">
              <Link
                href={item.path}
                className="flex flex-col items-center gap-1.5 w-full relative pb-3"
              >
                {/* React Icon Component */}
                <div
                  className={`text-2xl transition-colors ${isActive ? "text-[#0B1261]" : "text-black"}`}
                >
                  <CurrentIcon />
                </div>

                {/* Text Label */}
                <span
                  className={`text-[13px] font-medium transition-colors ${isActive ? "text-[#0B1261] font-bold" : "text-black"}`}
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
