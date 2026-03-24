"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGlobal,
} from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/category/abayas", label: "عبايات" },
  { href: "/category/dresses", label: "فساتين" },
  { href: "/category/hijab", label: "حجاب" },
  { href: "/offers", label: "العروض" },
];

export default function SallaHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <header dir="rtl" className="bg-white sticky top-0 z-50 shadow-sm">
      {/* --- Infinite News Ticker Bar --- */}
      <div className="bg-[#2C3E50] text-white overflow-hidden py-2 relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* We repeat the text twice to ensure a seamless loop */}
          <span className="text-xs md:text-sm px-4">
            شحن مجاني للطلبات فوق 50 دولار لكل لبنان   
          </span>
          <span className="text-xs md:text-sm px-4">
              اطلب الآن واستفد من العروض الحصرية  
          </span>
        </div>

        {/* CSS for the animation */}
        <style jsx>{`
          .animate-marquee {
            display: inline-flex;
            animation: marquee 20s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(50%); } 
          }
          
          /* For RTL, we move positive 50% to push it along the x-axis */
          [dir="rtl"] .animate-marquee {
            animation: marquee-rtl 20s linear infinite;
          }

          @keyframes marquee-rtl {
            0% { transform: translateX(0); }
            100% { transform: translateX(50%); }
          }
        `}</style>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <span className="text-xl md:text-2xl font-bold text-[#1A1A1A]">
                متجر<span className="text-[#C0392B]">سلة</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#C0392B] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="hidden md:block relative w-64">
              <input
                type="text"
                placeholder="ابحث عن منتج..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:border-[#C0392B] transition-colors"
              />
              <AiOutlineSearch
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>

            <button className="md:hidden p-2 text-gray-700" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <AiOutlineSearch size={22} />
            </button>

            <button className="hidden md:block text-gray-700 hover:text-[#C0392B]">
              <AiOutlineGlobal size={22} />
            </button>

            <button className="text-gray-700 hover:text-[#C0392B]">
              <AiOutlineUser size={22} />
            </button>

            <button className="text-gray-700 hover:text-[#C0392B] relative">
              <AiOutlineHeart size={22} />
            </button>

            <button className="text-gray-700 hover:text-[#C0392B] relative">
              <BsCart2 size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -left-1 bg-[#C0392B] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث هنا..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:border-[#C0392B]"
              />
              <AiOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-bold text-lg">القائمة</span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <AiOutlineClose size={24} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-6 py-3 text-gray-800 hover:bg-gray-50 border-r-4 border-transparent hover:border-[#C0392B] transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}