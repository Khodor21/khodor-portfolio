"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCart } from "../context/cartContext";

import homeIcon from "../images/icons/home.svg";
import userIcon from "../images/icons/user.svg";
import searchIcon from "../images/icons/search.svg";
import cartIcon from "../images/icons/cart.svg";
import heartIcon from "../images/icons/heart.svg";

export default function BottomNavbar({ site }) {
  const pathname = usePathname();
  const { cartItems, favorites } = useCart();

  const basePath = site ? `/${site}` : "";

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const favCount = favorites.length;

  const navItems = [
    { name: "الرئيسية", path: basePath, icon: homeIcon, exact: true },
    { name: "حسابي", path: `${basePath}/profile`, icon: userIcon },
    { name: "بحث", path: `${basePath}/not-found`, icon: searchIcon },
    { name: "طلباتي", path: `${basePath}/cart`, icon: cartIcon },
    { name: "المفضلة", path: `${basePath}/favorites`, icon: heartIcon },
  ];

  if (!site) return null;

  const normalizedPathname = pathname.replace(/\/$/, "") || "/";

  return (
    <nav
      dir="rtl"
      aria-label="Main navigation"
      className="fixed bottom-0 left-0 w-full bg-white rounded-t-[20px] shadow-[0_-8px_30px_rgba(0,0,0,0.06)] z-50 pt-4 px-2 border-t border-gray-100 md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <ul className="flex justify-between items-center w-full">
        {navItems.map((item) => {
          const normalizedItemPath = item.path.replace(/\/$/, "") || "/";

          const isActive = item.exact
            ? normalizedPathname === normalizedItemPath
            : normalizedPathname === normalizedItemPath ||
              normalizedPathname.startsWith(normalizedItemPath + "/");

          const isCart = item.path === `${basePath}/cart`;
          const isFav = item.path === `${basePath}/favorites`;

          return (
            <li key={item.path} className="flex-1 flex justify-center">
              <Link
                href={item.path}
                aria-current={isActive ? "page" : undefined}
                className="flex flex-col items-center gap-1.5 w-full relative pb-3"
              >
                {/* Icon + badges */}
                <div className="relative w-5 h-5 transition-all duration-300">
                  {/* Mask-based icon for color control */}
                  <span
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      backgroundColor: isActive
                        ? "var(--primary-color)"
                        : "#eeeeee",
                      WebkitMaskImage: `url(${item.icon.src})`,
                      maskImage: `url(${item.icon.src})`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      transition: "background-color 0.3s",
                    }}
                  />

                  {/* Cart Badge */}
                  {isCart && cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[11px] font-bold text-white rounded-full bg-[#D50000]">
                      {cartCount > 9 ? "9+" : cartCount}
                    </span>
                  )}

                  {/* Favorite Badge */}
                  {isFav && favCount > 0 && (
                    <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[11px] font-bold text-white rounded-full bg-[#D50000]">
                      {favCount > 9 ? "9+" : favCount}
                    </span>
                  )}
                </div>

                {/* Label */}
                <span
                  className={`text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-primary font-extrabold"
                      : "text-black font-bold"
                  }`}
                >
                  {item.name}
                </span>

                {/* Active underline indicator */}
                {isActive && (
                  <div className="absolute bottom-0 w-10 h-1 bg-primary rounded-t-md" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Home indicator visual hint (iOS style) */}
      <div className="w-[120px] h-[4px] bg-gray-100 rounded-full mx-auto mt-2" />
    </nav>
  );
}
