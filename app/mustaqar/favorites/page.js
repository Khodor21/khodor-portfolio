"use client";

import { useCart } from "../context/cartContext";
import TopBar from "../components/TopBar";
import Image from "next/image";
import Link from "next/link";
import { PiTrash } from "react-icons/pi";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useCart(); // ✅ fixed

  if (!favorites || favorites.length === 0)
    return (
      <div className="mb-14">
        <TopBar />
        <h1 className="text-3xl font-bold text-[#0B1261] mb-4">المفضلة</h1>
        <p className="text-gray-500">لم تقم بإضافة أي منتجات للمفضلة بعد.</p>
        <Link
          href="/mustaqar"
          className="mt-6 inline-block px-6 py-3 bg-[#0B1261] text-white rounded-xl font-bold hover:opacity-90 transition"
        >
          تصفح المنتجات
        </Link>
      </div>
    );

  return (
    <>
      <TopBar />
      <div className="w-full mb-14 md:max-w-6xl md:mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-[#0B1261] mb-6">المفضلة</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="bg-[#F9F9F9] rounded-2xl p-4 flex flex-col items-center gap-4 relative"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="object-contain"
              />
              <h2 className="font-bold text-lg text-[#0B1261] text-center">
                {item.name}
              </h2>
              <p className="text-[#0B1261] font-extrabold text-xl">
                {item.currency}
                {item.price}
              </p>
              <button
                onClick={() => removeFromFavorites(item.id)}
                className="absolute top-3 right-3 text-red-600 hover:text-red-700 transition"
              >
                <PiTrash size={22} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
