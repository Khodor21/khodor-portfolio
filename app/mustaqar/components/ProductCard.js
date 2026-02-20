import Image from "next/image";
import { BiHeart } from "react-icons/bi";

export default function ProductCard({ product }) {
  return (
    <div className="w-[70vw] flex-[0_0_70vw] md:w-[220px] md:flex-[0_0_220px] bg-white rounded-lg flex flex-col snap-center relative shadow-sm border border-[#eaeaea] overflow-hidden">
      {" "}
      {/* Favorite Icon */}
      {/* Changed 'ledt-2' to 'left-2', increased padding-x to 'px-3', and kept y-padding at 'py-1.5' */}
      <button className="absolute bg-white rounded-full top-2 left-2 text-gray-200 hover:text-red-500 z-10 p-2 backdrop-blur-sm">
        <BiHeart size={26} />
      </button>
      {/* Image Container - Changed aspect-[4/5] to aspect-square to lower the height */}
      <div className="relative w-full aspect-square bg-[#f8f8f8] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 mix-blend-multiply transition-transform duration-300 hover:scale-110"
        />
      </div>
      {/* Product Details */}
      <div className="flex flex-col flex-grow p-3 text-right">
        <h3 className="font-bold text-[#0B1261] text-2xl md:text-xl line-clamp-1">
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
