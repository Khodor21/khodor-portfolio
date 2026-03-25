"use client";

import React, { useState, useEffect } from "react";
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
  AiOutlineDelete,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import {
  BsCart2,
  BsTruck,
  BsShieldCheck,
  BsArrowLeftRight,
} from "react-icons/bs";
import { HiMinus, HiPlus } from "react-icons/hi";
import { products } from "../../products";

/* ─── Cart item type ─── */
interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  qty: number;
  image: string;
}

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [wished, setWished] = useState(false);

  /* Cart drawer */
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  /* Top-right toast */
  const [toast, setToast] = useState(false);

  const productImage =
    (product as any).images?.[0] ??
    (product.image as any).src ??
    (product.image as any);

  const images: string[] = (product as any).images?.length
    ? (product as any).images
    : [productImage];

  const prevImage = () =>
    setActiveImage((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () =>
    setActiveImage((i) => (i === images.length - 1 ? 0 : i + 1));

  const savings = product.oldPrice ? product.oldPrice - product.price : null;

  /* Add to cart handler */
  const handleAdd = () => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.size === selectedSize,
      );
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.size === selectedSize
            ? { ...i, qty: i.qty + quantity }
            : i,
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          size: selectedSize,
          price: product.price,
          qty: quantity,
          image: productImage,
        },
      ];
    });

    /* Show toast */
    setToast(true);
    setTimeout(() => setToast(false), 2800);

    /* Open drawer after toast appears */
    setTimeout(() => setCartOpen(true), 400);
  };

  const removeItem = (id: number, size: string) =>
    setCartItems((prev) =>
      prev.filter((i) => !(i.id === id && i.size === size)),
    );

  const updateQty = (id: number, size: string, delta: number) =>
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.id === id && i.size === size ? { ...i, qty: i.qty + delta } : i,
        )
        .filter((i) => i.qty > 0),
    );

  const cartTotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: product.name, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  /* Lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  return (
    <div
      dir="rtl"
      className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]"
      style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif" }}
    >
      {/* ── TOP-RIGHT TOAST ── */}
      <div
        className={`fixed top-5 left-4 z-[100] transition-all duration-500 ease-out
          ${toast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="bg-[#1A1A1A] text-white text-sm px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 min-w-[220px]">
          <AiOutlineCheckCircle size={18} className="text-green-400 shrink-0" />
          <span>تمت الإضافة إلى السلة</span>
        </div>
      </div>

      {/* ── CART DRAWER OVERLAY ── */}
      <div
        className={`fixed inset-0 z-[80] bg-black/40 transition-opacity duration-300
          ${cartOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setCartOpen(false)}
      />

      {/* ── CART DRAWER — slides up on mobile, slides in from left on desktop ── */}
      <div
        className={`fixed z-[90] bg-white shadow-2xl transition-transform duration-400 ease-out
          /* Mobile: bottom sheet */
          bottom-0 inset-x-0 rounded-t-2xl max-h-[85vh]
          /* Desktop: right sidebar (in RTL "right" = left side of screen visually = ltr left) */
          md:bottom-auto md:top-0 md:right-auto md:left-0 md:h-full md:w-[380px] md:rounded-none md:rounded-r-2xl
          ${
            cartOpen
              ? "translate-y-0 md:translate-x-0"
              : "translate-y-full md:-translate-x-full md:translate-y-0"
          }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base">محتويات السلة</span>
            {cartCount > 0 && (
              <span className="bg-[#C0392B] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="p-1 active:scale-90 transition-transform"
          >
            <AiOutlineClose size={22} color="#555" />
          </button>
        </div>

        {/* Drawer items */}
        <div
          className="overflow-y-auto flex-1 px-5 py-4 space-y-4"
          style={{ maxHeight: "calc(85vh - 180px)" }}
        >
          {cartItems.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <BsCart2 size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">السلة فارغة</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-3 items-start"
              >
                {/* Delete */}
                <button
                  onClick={() => removeItem(item.id, item.size)}
                  className="mt-1 text-gray-400 hover:text-[#C0392B] transition-colors shrink-0"
                >
                  <AiOutlineDelete size={18} />
                </button>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium leading-snug line-clamp-1">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {item.size} {item.id.toString().padStart(2, "0")}
                  </p>

                  {/* Qty controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQty(item.id, item.size, 1)}
                      className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center active:scale-90"
                    >
                      <HiPlus size={12} />
                    </button>
                    <span className="text-sm font-bold w-5 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.size, -1)}
                      className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center active:scale-90"
                    >
                      <HiMinus size={12} />
                    </button>
                  </div>

                  {/* Free shipping bar */}
                  <div className="mt-2">
                    <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all"
                        style={{
                          width: `${Math.min(((item.price * item.qty) / 300) * 100, 100)}%`,
                        }}
                      />
                    </div>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      حصلت على شحن مجاني
                    </p>
                  </div>
                </div>

                {/* Price + image */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-sm font-bold text-[#C0392B]">
                    ﷼{(item.price * item.qty).toLocaleString("ar-SA")}
                  </span>
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 space-y-3 bg-white">
            <div className="flex justify-between text-sm text-gray-500">
              <span>المجموع الفرعي (منتج {cartCount})</span>
              <span className="font-bold text-[#1A1A1A]">
                ﷼{cartTotal.toLocaleString("ar-SA")}
              </span>
            </div>
            <div className="flex justify-between text-sm font-bold">
              <span>المجموع</span>
              <span>﷼{cartTotal.toLocaleString("ar-SA")}</span>
            </div>
            <div className="flex gap-2 pt-1">
              <button
                onClick={() => setCartOpen(false)}
                className="flex-1 h-12 border-2 border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:border-gray-400 transition-colors"
              >
                سلة المشتريات
              </button>
              <button className="flex-1 h-12 bg-[#1A1A1A] text-white rounded-lg text-sm font-bold hover:bg-[#333] transition-colors">
                إتمام الطلب
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── TICKER ── */}
      <div className="bg-[#2C3E50] text-white overflow-hidden py-2 border-b border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-xs md:text-sm px-4">
            شحن مجاني للطلبات فوق 50 دولار لكل لبنان — اطلب الآن واستفد من
            العروض الحصرية —&nbsp;
          </span>
          <span className="text-xs md:text-sm px-4">
            شحن مجاني للطلبات فوق 50 دولار لكل لبنان — اطلب الآن واستفد من
            العروض الحصرية —&nbsp;
          </span>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2"
            >
              <AiOutlineMenu size={24} />
            </button>
            <Link href="/" className="text-xl md:text-2xl font-bold">
              متجر<span className="text-[#C0392B]">سلة</span>
            </Link>
            <nav className="hidden md:flex space-x-8 space-x-reverse font-medium">
              <Link href="/" className="hover:text-[#C0392B]">
                الرئيسية
              </Link>
              <Link href="#" className="hover:text-[#C0392B]">
                التيشيرتات
              </Link>
              <Link href="#" className="hover:text-[#C0392B]">
                وصلنا حديثاً
              </Link>
              <Link href="#" className="text-[#C0392B]">
                العروض
              </Link>
            </nav>
            <div className="flex items-center space-x-4 space-x-reverse">
              <AiOutlineSearch size={22} className="cursor-pointer" />
              <AiOutlineUser size={22} className="hidden md:block" />
              <div
                className="relative cursor-pointer"
                onClick={() => setCartOpen(true)}
              >
                <BsCart2 size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -left-2 bg-[#C0392B] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── PRODUCT SECTION ── */}
      <main className="pb-28 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:container lg:mx-auto lg:px-4 lg:pt-8">
          {/* IMAGE COLUMN */}
          <div className="relative w-full">
            <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden bg-[#F5F5F5] md:rounded-xl">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
              />
              {savings && (
                <span className="absolute top-3 right-3 z-10 bg-[#C0392B] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  وفر {savings} ر.س
                </span>
              )}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="السابق"
                    className="absolute top-1/2 -translate-y-1/2 right-3 z-10 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform"
                  >
                    <AiOutlineRight size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="التالي"
                    className="absolute top-1/2 -translate-y-1/2 left-3 z-10 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform"
                  >
                    <AiOutlineLeft size={18} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`h-1.5 rounded-full transition-all ${i === activeImage ? "bg-white w-4" : "bg-white/50 w-1.5"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div className="hidden md:flex gap-2 mt-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx ? "border-[#C0392B]" : "border-transparent"}`}
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* INFO COLUMN */}
          <div className="flex flex-col px-4 pt-4 lg:px-0 lg:pt-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex-1 min-w-0">
                {(product as any).brand && (
                  <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">
                    {(product as any).brand}
                  </span>
                )}
                <h1 className="text-xl md:text-xl leading-tight text-[#1A1A1A]">
                  {product.name}
                </h1>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setWished((w) => !w)}
                  aria-label="مفضلة"
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
                  aria-label="مشاركة"
                  className="flex items-center justify-center active:scale-90 transition-transform"
                >
                  <AiOutlineShareAlt size={22} color="#555" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="text-base font-semibold text-[#C0392B]">
                {product.price} ر.س
              </span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-sm">
                  {product.oldPrice} ر.س
                </span>
              )}
            </div>

            {product.sizes.length > 0 && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="font-bold text-sm">اختر المقاس:</label>
                  <button className="text-[#C0392B] text-xs underline">
                    جدول المقاسات
                  </button>
                </div>
                <div
                  className="grid gap-2"
                  style={{
                    gridTemplateColumns: `repeat(${product.sizes.length}, 1fr)`,
                  }}
                >
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      disabled={product.soldOut?.includes(size)}
                      className={`h-9 flex items-center justify-center rounded-sm border font-medium text-sm w-full transition-all
                        ${
                          product.soldOut?.includes(size)
                            ? "border-gray-100 text-gray-300 cursor-not-allowed line-through"
                            : selectedSize === size
                              ? "border-[#C0392B] bg-[#C0392B]/5 text-[#C0392B]"
                              : "border-[#BABABA] text-gray-600 hover:border-gray-400"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

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

            {product.colors?.length > 0 && (
              <div className="mb-6">
                <label className="font-bold text-sm block mb-3">
                  الألوان المتاحة:
                </label>
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

            {/* Desktop add to cart */}
            <div className="hidden md:flex flex-row gap-4 mt-auto">
              <div className="flex items-center border-2 border-gray-200 rounded-lg h-14 px-2 bg-white">
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-xl"
                >
                  +
                </button>
                <input
                  readOnly
                  value={quantity}
                  className="w-12 text-center font-bold bg-transparent"
                />
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-xl"
                >
                  -
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 h-14 rounded-lg font-bold flex items-center justify-center gap-2 bg-[#C0392B] text-white hover:bg-[#A93226] transition-colors shadow-lg shadow-red-200"
              >
                <BsCart2 size={20} />
                إضافة للسلة
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ── FIXED BOTTOM CTA — mobile only ── */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-3">
        <div className="flex items-center border-2 border-gray-200 rounded-lg h-12 px-2 bg-white shrink-0">
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-2 text-xl"
          >
            +
          </button>
          <span className="w-8 text-center font-bold text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-2 text-xl"
          >
            -
          </button>
        </div>
        <button
          onClick={handleAdd}
          className="flex-1 h-12 rounded-lg font-bold flex items-center justify-center gap-2 bg-[#C0392B] text-white active:bg-[#A93226] transition-colors"
        >
          <BsCart2 size={18} />
          إضافة للسلة
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-lg">القائمة</span>
              <AiOutlineClose
                size={24}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer"
              />
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
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }
      `}</style>
    </div>
  );
}
