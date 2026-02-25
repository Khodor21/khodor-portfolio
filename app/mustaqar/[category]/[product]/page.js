"use client";

import { useState } from "react";
import categoriesData from "../../CategoriesData";
import Image from "next/image";
import Link from "next/link";
import TopBar from "../../components/TopBar";
import ProductCard from "../../components/ProductCard";
import { slugify } from "../../lib/slugify";
import { useCart } from "../../context/cartContext";
import {
  PiShoppingCartSimpleLight,
  PiHeart,
  PiHeartFill,
  PiShareNetwork,
} from "react-icons/pi";

// Description images
import Description1 from "../../images/Desc-1.png";
import Description2 from "../../images/Desc-2.png";
import Description3 from "../../images/Desc-3.png";

export default function ProductPage({ params }) {
  const { category, product } = params;
  const { addToCart, toggleFavorite, isFavorite: checkFavorite } = useCart();

  // Find category
  const categoryData = categoriesData.find((cat) => cat.id === category);
  if (!categoryData) return <div>Category not found</div>;

  const decodedProduct = decodeURIComponent(product);
  const productData = categoryData.products.find(
    (prod) => slugify(prod.name) === slugify(decodedProduct),
  );
  if (!productData) return <div>Product not found</div>;

  // Gallery Logic
  const galleryImages = [Description1, Description2, Description3];
  const [activeImage, setActiveImage] = useState(galleryImages[0]);
  const [isFading, setIsFading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleImageChange = (img) => {
    if (img === activeImage) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveImage(img);
      setIsFading(false);
    }, 200);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("تم نسخ رابط المنتج");
    } catch (err) {
      console.error("Share failed", err);
    }
  };

  const favoriteState = checkFavorite(productData.id);

  return (
    <>
      <TopBar />

      <div className="w-full mb-16 md:max-w-6xl md:mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-base max-w-6xl truncate font-regular text-black/60 mb-6">
          <Link href="/" className="hover:underline">
            الرئيسية
          </Link>
          {" > "}
          <span>{categoryData.title}</span>
          {" > "}
          <span className="text-black font-medium">{productData.name}</span>
        </div>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* LEFT - Image Gallery */}
          <div>
            <div className="bg-[#EDEDFF] rounded-2xl p-8 flex items-center justify-center">
              <Image
                src={activeImage}
                alt={productData.name}
                className={`object-contain transition-opacity duration-300 ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
                priority
              />
            </div>

            {/* Thumbnails */}
            <div className="flex w-full justify-between gap-4 mt-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => handleImageChange(img)}
                  className={`bg-[#EDEDFF] p-4 rounded-xl w-24 h-24 flex items-center justify-center cursor-pointer transition-all duration-200 ${
                    activeImage === img ? "ring-2 ring-[#0B1261]" : ""
                  }`}
                >
                  <Image src={img} alt="thumb" className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Info */}
          <div className="flex flex-col md:gap-6">
            <h1 className="text-3xl font-bold">{productData.name}</h1>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-gray-500 text-sm">4.5/5</span>
            </div>

            <div className="text-4xl mt-2 font-extrabold text-[#0B1261]">
              {productData.currency}
              {productData.price}
            </div>

            <p className="font-bold text-[#231F21]">
              {productData.name} تحتوي على ميزة {productData.feature}، تصميم
              أنيق وجودة عالية لتناسب الاستخدام اليومي.
            </p>

            <div>
              <p className="mb-2 font-extrabold text-xl mt-4">اختر اللون</p>
              <div className="flex w-full justify-between gap-2 font-bold">
                <button className="px-4 w-full py-2 border border-black/40 rounded-lg bg-[#f9f9f9] text-bold/80">
                  أسود وذهبي
                </button>
                <button className="px-4 w-full py-2 border border-black/40 rounded-lg text-gray-400">
                  فضي
                </button>
              </div>
            </div>

            {/* Actions Section */}
            <div className="flex flex-col gap-4 mt-6">
              {/* Quantity + Favorite + Share */}
              <div className="flex items-center justify-between">
                {/* Quantity */}
                <div className="flex px-3 py-2 w-[40%] items-center justify-between bg-[#F9F9F9] rounded-xl">
                  <button
                    onClick={() =>
                      setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                    className="text-2xl font-bold"
                  >
                    −
                  </button>
                  <span className="font-extrabold text-xl">{quantity}</span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="text-2xl font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Favorite + Share */}
                <div className="flex gap-3">
                  <button
                    onClick={() => toggleFavorite(productData)}
                    className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 ${
                      favoriteState
                        ? "bg-[#D50000] text-white"
                        : "bg-[#F3F3F3] text-gray-600"
                    }`}
                  >
                    {favoriteState ? (
                      <PiHeartFill size={22} />
                    ) : (
                      <PiHeart size={22} />
                    )}
                  </button>

                  <button
                    onClick={handleShare}
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F3F3F3] text-gray-600 hover:bg-[#EAEAEA] transition-all duration-200"
                  >
                    <PiShareNetwork size={22} />
                  </button>
                </div>
              </div>

              {/* Add To Cart */}
              <button
                onClick={() =>
                  addToCart({
                    id: productData.id,
                    name: productData.name,
                    price: productData.price,
                    currency: productData.currency,
                    image: activeImage,
                    quantity: quantity,
                  })
                }
                className="flex justify-center items-center gap-2 bg-[#0B1261] w-full text-white px-4 py-3 rounded-xl font-extrabold text-2xl hover:opacity-90 transition"
              >
                <PiShoppingCartSimpleLight />
                أضف للسلّة
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          {categoriesData
            .filter((cat) => cat.id === "new-arrivals")
            .map((section) => (
              <section
                key={section.id}
                className="flex flex-col w-full overflow-hidden"
              >
                <div className="px-4 container mx-auto mb-8 text-center">
                  <h2 className="relative inline-block px-2 text-4xl font-extrabold text-[#0B1261] z-10 after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[16px] after:bg-[#C8CEFF] after:-z-10">
                    {section.title}
                  </h2>
                </div>

                <div className="w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4">
                  <div className="flex gap-4 px-4 w-max md:w-full">
                    {section.products.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        categoryId={section.id}
                      />
                    ))}
                  </div>
                </div>
              </section>
            ))}
        </div>
      </div>
    </>
  );
}
