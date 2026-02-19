import Image from "next/image";
import { BiHeart } from "react-icons/bi";

export default function ProductCard({ product }) {
  return (
    <div className="w-[calc(50%-8px)] flex-[0_0_calc(50%-8px)] md:flex-[0_0_220px] bg-white rounded-lg flex flex-col snap-center relative shadow-sm border border-[#eaeaea] overflow-hidden">
      {/* Favorite Icon */}
      <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 z-10 bg-white/80 p-1.5 rounded-full backdrop-blur-sm">
        <BiHeart size={20} />
      </button>

      <div className="relative w-full aspect-[4/5] bg-[#f8f8f8] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 mix-blend-multiply transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Product Details - Tighter padding like Zbrand */}
      <div className="flex flex-col flex-grow p-3 text-right">
        <h3 className="font-bold text-[#0B1261] text-xl md:text-xl line-clamp-1">
          {product.name}
        </h3>

        <p className="text-gray-500 font-regular text-base mt-1 line-clamp-1">
          {product.feature}
        </p>

        <div className="mt-2 font-bold text-black flex gap-1 items-center">
          <p className="text-black/90 text-base font-regular">السعر:</p>
          <span className="text-lg">{product.price}$</span>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full mt-3 bg-[#0B1261] text-white py-2 rounded-md font-bold text-base md:text-lg transition hover:bg-blue-900 active:scale-95">
          أضف للسّـلـة
        </button>
      </div>
    </div>
  );
}
