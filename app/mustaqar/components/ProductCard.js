import Image from "next/image";
import { BiHeart } from "react-icons/bi";

export default function ProductCard({ product }) {
  return (
    <div className="w-[45vw] flex-[0_0_45vw] md:w-[220px] md:flex-[0_0_220px] bg-white rounded-lg flex flex-col snap-center relative shadow-sm border border-[#eaeaea] overflow-hidden">
      {" "}
      <button className="absolute bg-white rounded-full top-2 left-2 text-gray-200 hover:text-red-500 z-10 p-2 backdrop-blur-sm">
        <BiHeart size={18} />
      </button>
      <div className="relative w-full aspect-square bg-[#f8f8f8] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 mix-blend-multiply transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="flex flex-col flex-grow p-3 text-right">
        <h3 className="font-regular text-black/90 text-xl md:text-xl line-clamp-1">
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
        <button className="w-full mt-3 bg-[#0B1261] text-white py-1 rounded-md font-bold text-xl md:text-lg transition hover:bg-blue-900 active:scale-95">
          أضِــــف للسّـلـــــة
        </button>
      </div>
    </div>
  );
}
