"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShareAlt,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { BsCart2, BsTruck, BsShieldCheck, BsArrowLeftRight } from "react-icons/bs";
import { products } from "../../products";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: product.name, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Images array — fall back to single image if no gallery
  const images: string[] = (product as any).images?.length
    ? (product as any).images
    : [(product.image as any).src ?? (product.image as any)];

  const prevImage = () => setActiveImage((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () => setActiveImage((i) => (i === images.length - 1 ? 0 : i + 1));

  const savings = product.oldPrice ? product.oldPrice - product.price : null;

  return (
    <div
      dir="rtl"
      className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]"
      style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif" }}
    >
      {/* ── TICKER ── */}
      <div className="bg-[#2C3E50] text-white overflow-hidden py-2 border-b border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-xs md:text-sm px-4">
            شحن مجاني للطلبات فوق 50 دولار لكل لبنان — اطلب الآن واستفد من العروض الحصرية —&nbsp;
          </span>
          <span className="text-xs md:text-sm px-4">
            شحن مجاني للطلبات فوق 50 دولار لكل لبنان — اطلب الآن واستفد من العروض الحصرية —&nbsp;
          </span>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2">
              <AiOutlineMenu size={24} />
            </button>
            <Link href="/" className="text-xl md:text-2xl font-bold">
              متجر<span className="text-[#C0392B]">سلة</span>
            </Link>
            <nav className="hidden md:flex space-x-8 space-x-reverse font-medium">
              <Link href="/" className="hover:text-[#C0392B]">الرئيسية</Link>
              <Link href="#" className="hover:text-[#C0392B]">التيشيرتات</Link>
              <Link href="#" className="hover:text-[#C0392B]">وصلنا حديثاً</Link>
              <Link href="#" className="text-[#C0392B]">العروض</Link>
            </nav>
            <div className="flex items-center space-x-4 space-x-reverse">
              <AiOutlineSearch size={22} className="cursor-pointer" />
              <AiOutlineUser size={22} className="hidden md:block" />
              <div className="relative cursor-pointer">
                <BsCart2 size={22} />
                <span className="absolute -top-2 -left-2 bg-[#C0392B] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── PRODUCT SECTION ── */}
      <main className="pb-28 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:container lg:mx-auto lg:px-4 lg:pt-8">

          {/* ── IMAGE COLUMN ── */}
          <div className="relative w-full">

            {/* Full-bleed image — no margin/padding on mobile */}
            <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden bg-[#F5F5F5] md:rounded-xl">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
              />

              {/* Savings badge — top right over image */}
              {savings && (
                <span className="absolute top-3 right-3 z-10 bg-[#C0392B] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  وفر {savings} ر.س
                </span>
              )}

              {/* Prev / Next arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="الصورة السابقة"
                    className="absolute top-1/2 -translate-y-1/2 right-3 z-10 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform"
                  >
                    <AiOutlineRight size={18} color="#1A1A1A" />
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="الصورة التالية"
                    className="absolute top-1/2 -translate-y-1/2 left-3 z-10 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform"
                  >
                    <AiOutlineLeft size={18} color="#1A1A1A" />
                  </button>
                </>
              )}

              {/* Dot indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        i === activeImage ? "bg-white w-4" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnails — desktop only */}
            {images.length > 1 && (
              <div className="hidden md:flex gap-2 mt-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === idx ? "border-[#C0392B]" : "border-transparent"
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── INFO COLUMN ── */}
          <div className="flex flex-col px-4 pt-4 lg:px-0 lg:pt-0">

            {/* Name row with fav + share */}
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-xl md:text-xl leading-tight text-[#1A1A1A]">
                  {product.name}
                </h1>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setWished((w) => !w)}
                  aria-label="أضف للمفضلة"
                  className="flex items-center justify-center active:scale-90 transition-transform"
                >
                  {wished ? (
                    <AiFillHeart size={22} color="#C0392B" />
                  ) : (
                    <AiOutlineHeart size={22} color="#555" />
                  )}
                </button>
                <button
                  onClick={handleShare}
                  aria-label="شارك المنتج"
                  className="flex items-center justify-center active:scale-90 transition-transform"
                >
                  <AiOutlineShareAlt size={22} color="#555" />
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="text-base text-semiBold text-[#C0392B]">
                {product.price} ر.س
              </span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-sm">
                  {product.oldPrice} ر.س
                </span>
              )}
            </div>

            {/* Size Selection — full width grid */}
            {product.sizes.length > 0 && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="font-bold text-sm">اختر المقاس:</label>
                  <button className="text-[#C0392B] text-xs underline">جدول المقاسات</button>
                </div>
                <div
                  className="grid gap-2"
                  style={{ gridTemplateColumns: `repeat(${product.sizes.length}, 1fr)` }}
                >
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      disabled={product.soldOut?.includes(size)}
                      className={`h-9 flex items-center justify-center rounded-sm border-[1px] border-[#BABABA] font-medium transition-all text-sm w-full
                        ${
                          product.soldOut?.includes(size)
                            ? "border-gray-100 text-gray-300 cursor-not-allowed line-through"
                            : selectedSize === size
                            ? "border-[#C0392B] bg-[#C0392B]/5 text-[#C0392B]"
                            : "border-gray-200 text-gray-600 hover:border-gray-400"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 py-5 border-t border-b border-gray-100 mb-6">
              <div className="flex flex-col items-center text-center">
                <BsTruck className="text-gray-400 mb-1" size={22} />
                <span className="text-[10px] text-gray-500">توصيل سريع</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <BsShieldCheck className="text-gray-400 mb-1" size={22} />
                <span className="text-[10px] text-gray-500">دفع آمن 100%</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <BsArrowLeftRight className="text-gray-400 mb-1" size={22} />
                <span className="text-[10px] text-gray-500">استبدال مرن</span>
              </div>
            </div>

            {/* Colors */}
            {product.colors?.length > 0 && (
              <div className="mb-6">
                <label className="font-bold text-sm block mb-3">الألوان المتاحة:</label>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((c) => (
                    <div
                      key={c.hex}
                      title={c.name}
                      className="w-7 h-7 rounded-full border-2 border-white shadow cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to Cart — desktop only inline (mobile is fixed bottom) */}
            <div className="hidden md:flex flex-row gap-4 mt-auto">
              <div className="flex items-center border-2 border-gray-200 rounded-lg h-14 px-2 bg-white">
                <button onClick={() => setQuantity((q) => q + 1)} className="p-2 text-xl">+</button>
                <input readOnly value={quantity} className="w-12 text-center font-bold bg-transparent" />
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-2 text-xl">-</button>
              </div>
              <button
                onClick={handleAdd}
                className={`flex-1 h-14 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-lg
                  ${added
                    ? "bg-[#0F6E56] text-white shadow-green-200"
                    : "bg-[#C0392B] text-white hover:bg-[#A93226] shadow-red-200"
                  }`}
              >
                <BsCart2 size={20} />
                {added ? "تمت الإضافة ✓" : "إضافة للسلة"}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ── FIXED BOTTOM CTA — mobile only ── */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-3">
        <div className="flex items-center border-2 border-gray-200 rounded-lg h-12 px-2 bg-white shrink-0">
          <button onClick={() => setQuantity((q) => q + 1)} className="px-2 text-xl">+</button>
          <span className="w-8 text-center font-bold text-sm">{quantity}</span>
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-2 text-xl">-</button>
        </div>
        <button
          onClick={handleAdd}
          className={`flex-1 h-12 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors
            ${added
              ? "bg-[#0F6E56] text-white"
              : "bg-[#C0392B] text-white active:bg-[#A93226]"
            }`}
        >
          <BsCart2 size={18} />
          {added ? "تمت الإضافة ✓" : "إضافة للسلة"}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50" onClick={() => setIsMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-lg">القائمة</span>
              <AiOutlineClose size={24} onClick={() => setIsMenuOpen(false)} className="cursor-pointer" />
            </div>
            <div className="flex flex-col space-y-4 font-medium">
              <Link href="/">الرئيسية</Link>
              <Link href="#">التيشيرتات</Link>
              <Link href="#">العروض اليومية</Link>
              <Link href="#">اتصل بنا</Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee-rtl 25s linear infinite;
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}</style>
    </div>
  );
}