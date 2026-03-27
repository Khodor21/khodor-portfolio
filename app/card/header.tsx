"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/category/abayas", label: "عبايات" },
  { href: "/category/dresses", label: "فساتين" },
  { href: "/category/hijab", label: "حجاب" },
  { href: "/offers", label: "العروض" },
];

export default function SallaHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false);
  const desktopInputRef = useRef<HTMLInputElement>(null);
  const cartCount = 0;

  // Focus input when desktop search opens
  useEffect(() => {
    if (isDesktopSearchOpen) {
      desktopInputRef.current?.focus();
    }
  }, [isDesktopSearchOpen]);

  // Close desktop search on outside click
  useEffect(() => {
    if (!isDesktopSearchOpen) return;
    const handler = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("#desktop-search-wrapper")) {
        setIsDesktopSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isDesktopSearchOpen]);

  return (
    <header dir="rtl" className="bg-white sticky top-0 z-50 w-full">
      {/* ── TICKER ── */}
      <div className="bg-[#2C3E50] text-white h-10 overflow-hidden flex items-center relative">
        <div className="flex whitespace-nowrap animate-marquee-rtl hover:[animation-play-state:paused]">
          <span className="text-xs md:text-sm px-4 flex-shrink-0">
            شحن مجاني للطلبات فوق 50 دولار لكل لبنان &nbsp;
          </span>
          <span className="text-xs md:text-sm px-4 flex-shrink-0">
            اطلب الآن واستفد من العروض الحصرية &nbsp;
          </span>
          <span className="text-xs md:text-sm px-4 flex-shrink-0">
            شحن مجاني للطلبات فوق 50 دولار لكل لبنان &nbsp;
          </span>
          <span className="text-xs md:text-sm px-4 flex-shrink-0">
            اطلب الآن واستفد من العروض الحصرية &nbsp;
          </span>
        </div>
      </div>

      {/* ── MAIN HEADER ── */}
      <div className="px-4 h-[60px] flex items-center justify-between border-b border-gray-100">
        {/* ── RIGHT: Mobile Controls ── */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-1 text-gray-900 hover:bg-gray-100 rounded transition-colors"
            aria-label="القائمة"
          >
            <AiOutlineMenu size={22} />
          </button>
          <button
            onClick={() => setIsMobileSearchOpen((v) => !v)}
            className="p-1 text-gray-900 hover:bg-gray-100 rounded transition-colors"
            aria-label="بحث"
          >
            <RiSearch2Line size={22} />
          </button>
        </div>

        {/* ── CENTER: Logo ── */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-[#1A1A1A]"
          >
            متجر<span className="text-[#C0392B]">سلة</span>
          </Link>
        </div>

        {/* ── DESKTOP NAV ── */}
        <nav className="hidden md:flex items-center gap-5 h-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 font-bold text-sm md:text-base hover:text-[#C0392B] transition-colors h-full flex items-center"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── LEFT: Actions ── */}
        <div className="flex items-center gap-2">
          {/* ── DESKTOP SEARCH ── */}
          <div
            id="desktop-search-wrapper"
            className="hidden md:flex items-center relative"
          >
            {/* Expanding input — slides in from the right */}
            <div
              className={`
                flex items-center overflow-hidden transition-all duration-300 ease-in-out
                ${isDesktopSearchOpen ? "w-56 opacity-100 mr-1" : "w-0 opacity-0"}
              `}
            >
              <div className="relative w-full">
                <input
                  ref={desktopInputRef}
                  type="text"
                  placeholder="ابحث عن منتج..."
                  className="w-full bg-gray-50 border border-gray-200 rounded pr-4 pl-9 text-sm focus:outline-none focus:border-[#C0392B] focus:ring-1 focus:ring-[#C0392B] transition-all"
                />
                {/* Close / clear button inside input */}
                <button
                  onClick={() => setIsDesktopSearchOpen(false)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="إغلاق البحث"
                >
                  <AiOutlineClose size={14} />
                </button>
              </div>
            </div>

            {/* Search icon button */}
            <button
              onClick={() => setIsDesktopSearchOpen((v) => !v)}
              className={`
                 rounded-full transition-colors
                ${
                  isDesktopSearchOpen
                    ? "text-[#C0392B] bg-red-50"
                    : "text-gray-900 hover:text-[#C0392B] hover:bg-gray-100"
                }
              `}
              aria-label="بحث"
            >
              <AiOutlineSearch size={22} />
            </button>
          </div>

          {/* User Icon */}
          <button
            className="text-gray-900 hover:text-[#C0392B] hover:bg-gray-100 rounded-full transition-colors"
            aria-label="حسابي"
          >
            <AiOutlineUser size={22} />
          </button>

          {/* Cart Icon */}
          <button
            className="text-gray-900 hover:text-[#C0392B] hover:bg-gray-100 rounded-full transition-colors relative"
            aria-label="السلة"
          >
            <BsHandbag size={22} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#C0392B] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ── MOBILE SEARCH BAR ── */}
      {isMobileSearchOpen && (
        <div className="md:hidden px-4 py-2 border-b border-gray-100 bg-white">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث هنا..."
              autoFocus
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 px-4 pr-10 text-sm focus:outline-none focus:border-[#C0392B]"
            />
            <AiOutlineSearch
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
      )}

      {/* ── MOBILE MENU DRAWER ── */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <span className="font-bold text-lg text-gray-800">القائمة</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <AiOutlineClose size={22} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-5 py-3.5 text-gray-800 font-semibold hover:bg-gray-50 border-r-4 border-transparent hover:border-[#C0392B] hover:text-[#C0392B] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-gray-100">
              <button className="w-full bg-[#C0392B] text-white py-2.5 rounded-lg font-semibold hover:bg-[#A93226] transition-colors">
                تسجيل الدخول
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
