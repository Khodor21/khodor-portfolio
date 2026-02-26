"use client";

import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import Link from "next/link";
import { slugify } from "../lib/slugify.js";
import { CgShoppingBag } from "react-icons/cg";
import { useCart } from "../context/cartContext";
import { useState } from "react";
import AddToCartPopup from "./AddToCartPopup.js";

export default function ProductCard({ product, categoryId }) {
  const { addToCart, toggleFavorite, isFavorite } = useCart();
  const favorited = isFavorite(product.id);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault(); // prevent link navigation
    addToCart(product);
    setShowPopup(true);
  };

  return (
    <>
      <Link
        href={`/mustaqar/${categoryId}/${slugify(product.name)}`}
        className="w-full border-[0.25px] border-[#f8f8f8] rounded-lg flex flex-col snap-center relative overflow-hidden"
      >
        {/* Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(product);
          }}
          className={`absolute top-2 left-2 z-10 p-2 rounded-full backdrop-blur-sm transition-colors ${
            favorited
              ? "bg-red-500 text-white"
              : "bg-white text-gray-200 hover:text-red-500"
          }`}
        >
          <BiHeart size={16} />
        </button>

        {/* Product Image */}
        <div className="relative w-full aspect-square bg-[#f8f8f8] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6 mix-blend-multiply transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-grow p-3 text-right">
          <h3 className="font-bold text-black/90 text-xl line-clamp-1">
            {product.name}
          </h3>
          <p className="text-black/60 font-regular text-base mt-1 line-clamp-1">
            {product.feature}
          </p>
          <div className="mt-2 text-black flex gap-1 items-center">
            <p className="text-black/90 text-2xl font-regular">السعر:</p>
            <span className="text-2xl font-extrabold">{product.price}$</span>
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="text-[#0B1261] hover:text-white flex justify-center items-center gap-2 w-full mt-3 border-[0.5px] border-[#0B1261] hover:bg-[#0B1261] py-1 rounded-md font-regular text-lg transition active:scale-95"
          >
            <CgShoppingBag className="" />
            أضِــــف للسّـلـــــة
          </button>
        </div>
      </Link>

      <AddToCartPopup
        product={product}
        show={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
}
