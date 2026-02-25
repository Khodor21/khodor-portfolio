"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useCart } from "../context/cartContext";

// Import your custom SVGs
import homeIcon from "../images/icons/home.svg";
import userIcon from "../images/icons/user.svg";
import searchIcon from "../images/icons/search.svg";
import cartIcon from "../images/icons/cart.svg";
import heartIcon from "../images/icons/heart.svg";

export default function BottomNavigation() {
  const pathname = usePathname();
  const { cartItems, favorites } = useCart(); // ✅ fixed: favorites instead of favoriteItems

  // ✅ Total cart quantity
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  // ✅ Total favorite count
  const favCount = favorites.length;

  // Define navigation items with your custom SVGs
  const navItems = [
    {
      name: "الرئيسية",
      path: "/mustaqar",
      icon: homeIcon,
    },
    {
      name: "حسابي",
      path: "/mustaqar/not-found",
      icon: userIcon,
    },
    {
      name: "بحث",
      path: "/mustaqar/not-found",
      icon: searchIcon,
    },
    {
      name: "طلباتي",
      path: "/mustaqar/cart",
      icon: cartIcon,
    },
    {
      name: "المفضلة",
      path: "/mustaqar/favorites",
      icon: heartIcon,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white rounded-t-[20px] shadow-[0_-8px_30px_rgba(0,0,0,0.06)] z-50 pt-4 px-2 border-t-[1px] border-[#0B1261]">
      <ul className="flex justify-between items-center w-full">
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;
          const isCart = item.path === "/mustaqar/cart";
          const isFav = item.name === "المفضلة";

          return (
            <li key={index} className="flex-1 flex justify-center">
              <Link
                href={item.path}
                className="flex flex-col items-center gap-1.5 w-full relative pb-3"
              >
                {/* Icon Container */}
                <div
                  className={`relative w-5 h-5 transition-all duration-300 ${
                    isActive ? "opacity-100 scale-110" : "opacity-100 grayscale"
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />

                  {/* ✅ Cart Counter Badge */}
                  {isCart && cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[11px] font-bold text-white rounded-full bg-[#D50000]">
                      {cartCount > 99 ? "99+" : cartCount}
                    </span>
                  )}

                  {/* ✅ Favorite Counter Badge */}
                  {isFav && favCount > 0 && (
                    <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[11px] font-bold text-white rounded-full bg-[#D50000]">
                      {favCount > 9 ? "9+" : favCount}
                    </span>
                  )}
                </div>

                {/* Text Label */}
                <span
                  className={`text-base font-regular transition-colors ${
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
