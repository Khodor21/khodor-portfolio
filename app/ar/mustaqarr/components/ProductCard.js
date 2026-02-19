import Image from "next/image";
import { BiHeart } from "react-icons/bi";

export default function ProductCard({ product }) {
  return (
    <div className="min-w-[160px] md:min-w-[220px] bg-white border border-gray-100 rounded-xl p-3 flex flex-col gap-3 snap-start relative shadow-sm">
      {/* Favorite Icon */}
      <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 z-10">
        <BiHeart size={22} />
      </button>

      {/* Product Image */}
      <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col text-center flex-grow gap-1">
        <h3 className="font-bold text-[#0B1261] text-sm md:text-base line-clamp-2">
          {product.name}
        </h3>
        <p className="text-[#0B1261] text-xs md:text-sm font-semibold mt-1">
          {product.feature}
        </p>
        <div className="mt-auto pt-2 font-bold text-black flex justify-center items-center gap-1">
          <span>السعر:</span>
          <span>
            {product.price}
            {product.currency}
          </span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-[#0B1261] text-white py-2 rounded-md font-medium text-sm transition hover:bg-blue-900">
        أضف للسّـلـة
      </button>
    </div>
  );
}
