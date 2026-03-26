"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGlobal,
} from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";

import { BsCart2, BsHandbag } from "react-icons/bs";

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
  const [cartCount] = useState(0);

  return (
    <header dir="rtl" className="bg-white sticky top-0 z-50">
      {/* ── TICKER ── */}
      <div className="bg-[#2C3E50] text-white overflow-hidden flex items-center justify-center h-[40px] relative">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-xs md:text-sm px-4">
            شحن مجاني للطلبات فوق 50 دولار لكل لبنان &nbsp;
          </span>
          <span className="text-xs md:text-sm px-4">
            اطلب الآن واستفد من العروض الحصرية &nbsp;
          </span>
        </div>
        <style jsx>{`
          .animate-marquee {
            display: inline-flex;
            animation: marquee-rtl 20s linear infinite;
          }
          @keyframes marquee-rtl {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(50%);
            }
          }
        `}</style>
      </div>

      {/* ── MAIN HEADER ── */}
      <div className="px-4 h-[60px] flex items-center justify-between">
        {/* ── RIGHT: Hamburger + Search (mobile) | empty slot (desktop handled by nav) ── */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-900"
            aria-label="القائمة"
          >
            <AiOutlineMenu size={20} />
          </button>
          <button
            onClick={() => setIsSearchOpen((v) => !v)}
            className="text-gray-900 pr-1"
            aria-label="بحث"
          >
            <RiSearch2Line size={20} />
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

        {/* ── DESKTOP NAV (replaces the right slot on md+) ── */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* ── LEFT: User + Cart (mobile & desktop) ── */}
        <div className="flex items-center gap-1">
          {/* Desktop extras */}
          <div className="hidden md:flex items-center gap-3 ml-4">
            <div className="relative w-56">
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
            <button className="text-gray-700 hover:text-[#C0392B]">
              <AiOutlineGlobal size={22} />
            </button>
          </div>

          {/* User — both mobile & desktop */}
          <button
            className="text-gray-900 hover:text-[#C0392B]"
            aria-label="حسابي"
          >
            <AiOutlineUser size={20} />
          </button>

          {/* Cart — both mobile & desktop */}
          <button
            className="text-gray-900 pr-1 hover:text-[#C0392B] relative"
            aria-label="السلة"
          >
            <BsHandbag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1 left-1 bg-[#C0392B] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ── MOBILE SEARCH BAR (drops down) ── */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث هنا..."
              autoFocus
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:border-[#C0392B]"
            />
            <AiOutlineSearch
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>
      )}

      {/* ── MOBILE MENU DRAWER ── */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[60] bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-lg">القائمة</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <AiOutlineClose size={24} />
              </button>
            </div>
            <nav className="flex-1 py-4">
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
      )}
    </header>
  );
}
