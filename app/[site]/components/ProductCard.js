"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { useCart } from "../context/cartContext";
import { slugify } from "../lib/slugify.js";
import AddToCartPopup from "./AddToCartPopup.js";

export default function ProductCard({ product, categoryId }) {
  const { addToCart, toggleFavorite, isFavorite, hydrated } = useCart();
  const favorited = hydrated && isFavorite(product.id);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setShowPopup(true);
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <>
      <Link
        href={`/mustaqar/${categoryId}/${slugify(product.name)}`}
        dir="rtl"
        className="group relative bg-white flex flex-col h-full rounded-sm overflow-hidden"
      >
        {/* ── IMAGE ── */}
        <div className="relative w-full aspect-[1.5/2] overflow-hidden bg-[#F7F7F7] shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* ── MOBILE: top-corner icons ── */}
          {/* Top-right: Eye — mobile only */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            aria-label="عرض سريع"
            className="md:hidden absolute top-2.5 right-2.5 z-10 bg-white rounded-full flex items-center justify-center shadow-sm w-6 h-6"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>

          {/* Top-left: Heart — mobile only */}
          <button
            onClick={handleToggleFavorite}
            aria-label="أضف للمفضلة"
            className="md:hidden absolute top-2.5 left-2.5 z-10 bg-white rounded-full flex items-center justify-center shadow-sm w-6 h-6"
          >
            {favorited ? (
              <AiFillHeart size={12} color="#C0392B" />
            ) : (
              <AiOutlineHeart size={12} color="#1A1A1A" />
            )}
          </button>

          {/* ── DESKTOP: bottom-center icons, revealed on hover ── */}
          <div className="hidden md:flex absolute bottom-3 left-1/2 -translate-x-1/2 z-10 items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {/* Eye */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              aria-label="عرض سريع"
              className="bg-white rounded-full flex items-center justify-center shadow-md w-9 h-9 hover:bg-gray-50 active:scale-90 transition-transform"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>

            {/* Heart */}
            <button
              onClick={handleToggleFavorite}
              aria-label="أضف للمفضلة"
              className="bg-white rounded-full flex items-center justify-center shadow-md w-9 h-9 hover:bg-gray-50 active:scale-90 transition-transform"
            >
              {favorited ? (
                <AiFillHeart size={16} color="#C0392B" />
              ) : (
                <AiOutlineHeart size={16} color="#1A1A1A" />
              )}
            </button>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="flex flex-col gap-1 pt-2.5 px-2 pb-1 flex-1">
          {/* Product name */}
          <h3 className="font-extrabold text-[#020202] leading-snug text-sm md:text-base">
            {product.name}
          </h3>

          {/* Feature */}
          <p className="text-gray-500 text-[12px] font-regular leading-snug">
            {product.feature}
          </p>

          {/* Price */}
          <p className="font-extrabold text-[#020202] mt-1 text-lg">
            {product.price}$
          </p>

          {/* Stars */}
          <div className="flex items-center gap-0.5 mt-0.5">
            {[1, 2, 3, 4, 5].map((star) => {
              const rating = product.rating ?? 4; // fallback to 4 if no rating
              const filled = star <= Math.floor(rating);
              const half =
                !filled && star === Math.ceil(rating) && rating % 1 !== 0;
              return (
                <svg
                  key={star}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill={filled ? "#F59E0B" : half ? "url(#half)" : "none"}
                  stroke="#F59E0B"
                  strokeWidth="2"
                >
                  {half && (
                    <defs>
                      <linearGradient id="half">
                        <stop offset="50%" stopColor="#F59E0B" />
                        <stop offset="50%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  )}
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              );
            })}
            {product.reviewCount && (
              <span className="text-gray-400 text-[10px] mr-1">
                ({product.reviewCount})
              </span>
            )}
          </div>
        </div>

        {/* ── ADD TO CART BUTTON — always at bottom ── */}
        <button
          onClick={handleAddToCart}
          aria-label="أضف للسلة"
          className="mb-3 mt-2 w-[90%] font-extrabold rounded mx-auto flex items-center justify-center gap-2 text-white bg-primary : py-2 text-sm hover:bg-primary hover:text-white transition-colors duration-200"
        >
          <BsHandbag size={15} />
          <span>إضافة للسلة</span>
        </button>
      </Link>

      <AddToCartPopup
        product={product}
        show={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
}
