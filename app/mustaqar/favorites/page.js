"use client";

import { useCart } from "../context/cartContext";
import TopBar from "../components/TopBar";
import Image from "next/image";
import { PiTrash } from "react-icons/pi";
import { CgShoppingBag } from "react-icons/cg";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites, addToCart } = useCart();

  if (!favorites || favorites.length === 0)
    return (
      <div className="mb-14">
        <TopBar />
        <h1 className="text-3xl font-bold text-[#0B1261] mb-4">المفضلة</h1>
        <p className="text-gray-500">لم تقم بإضافة أي منتجات للمفضلة بعد.</p>
        <a
          href="/mustaqar"
          className="mt-6 inline-block px-6 py-3 bg-[#0B1261] text-white rounded-xl font-bold hover:opacity-90 transition"
        >
          تصفح المنتجات
        </a>
      </div>
    );

  return (
    <>
      <TopBar />
      <div className="w-full mb-14 md:max-w-6xl md:mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-[#0B1261] mb-6">المفضلة</h1>

        <div className="flex flex-col gap-6">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="bg-[#F9F9F9] rounded-2xl p-4 flex flex-col md:flex-row items-center md:items-start gap-4 relative"
            >
              <div>
                <div className="relative w-32 h-32 flex-shrink-0 order-1 md:order-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col gap-2 order-2 md:order-1 w-full">
                <h2 className="font-bold text-lg text-[#0B1261]">
                  {item.name}
                </h2>
                <p className="text-[#0B1261] font-extrabold text-xl">
                  {item.currency}
                  {item.price}
                </p>

                {/* Add to Cart & Remove Favorite */}
                <div className="flex gap-2 mt-2 w-full">
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-2 w-[75%] text-[#0B1261] hover:text-white flex justify-center items-center gap-2 border-[0.5px] border-[#0B1261] py-2 rounded-md font-regular text-lg hover:bg-[#0B1261] transition"
                  >
                    <CgShoppingBag />
                    أضِــــف للسّـلـــــة
                  </button>
                  <button
                    onClick={() => removeFromFavorites(item.id)}
                    className="flex-1 text-red-600 hover:text-white bg-red-100 hover:bg-red-600 flex justify-center items-center gap-2 border-[0.5px] border-red-600 py-2 rounded-md font-regular text-lg transition"
                  >
                    <PiTrash />
                    إزالة
                  </button>
                </div>
              </div>

              {/* Product Image */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
