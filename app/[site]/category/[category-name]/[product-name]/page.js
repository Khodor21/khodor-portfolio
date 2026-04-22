"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../../../components/ProductCard";
import { slugify } from "../../../lib/slugify";
import { useCart } from "../../../context/cartContext";
import {
  PiShoppingCartSimpleLight,
  PiHeart,
  PiHeartFill,
  PiShareNetwork,
} from "react-icons/pi";

export default function ProductPage({ params }) {
  const {
    site,
    "category-name": categorySlug,
    "product-name": productSlug,
  } = params;
  const { addToCart, toggleFavorite, isFavorite: checkFavorite } = useCart();

  // ── Data fetching ──────────────────────────────────────────────
  // Replace this with however you load config in this project
  const { getSiteConfig } = require("../../../lib/getSiteConfig");
  const config = getSiteConfig(site);
  if (!config) return null;

  const categoryData = config.categories.find((cat) => cat.id === categorySlug);
  if (!categoryData) return <div>Category not found</div>;

  const productData = categoryData.products.find(
    (prod) => slugify(prod.name) === decodeURIComponent(productSlug),
  );
  if (!productData) return <div>Product not found</div>;

  // ── Gallery ────────────────────────────────────────────────────
  // Uses product images if available, fallback to single image
  const galleryImages = productData.images ?? [productData.image];
  const [activeImage, setActiveImage] = useState(galleryImages[0]);
  const [isFading, setIsFading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
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
    <div
      dir="rtl"
      className="w-full mb-16 md:max-w-6xl md:mx-auto px-4 py-6"
      style={{ "--primary-color": config.primaryColor }}
    >
      {/* Breadcrumb */}
      <div className="text-sm text-black/50 font-regular mb-3 flex items-center gap-1 flex-wrap">
        <Link href={`/${site}`} className="hover:underline">
          الرئيسية
        </Link>
        <span>/</span>
        <Link
          href={`/${site}/category/${categorySlug}`}
          className="hover:underline"
        >
          {categoryData.title}
        </Link>
        <span>/</span>
        <span className="text-black font-medium">{productData.name}</span>
      </div>

      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* LEFT — Image Gallery */}
        <div>
          {/* Main image */}
          <div className="bg-gray-100 aspect-ratio[2/1] rounded-2xl p-8 flex items-center justify-center aspect-square">
            <Image
              src={activeImage}
              alt={productData.name}
              className={`object-contain transition-opacity duration-200 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
          </div>

          {/* Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="flex gap-3 mt-4">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => handleImageChange(img)}
                  className={`bg-gray-100 rounded-xl w-20 h-20 flex items-center justify-center transition-all duration-200 ${
                    activeImage === img
                      ? "ring-2 ring-offset-1"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  style={
                    activeImage === img
                      ? { ringColor: "var(--primary-color)" }
                      : {}
                  }
                >
                  <Image
                    src={img}
                    alt={`thumb-${i}`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — Info */}
        <div className="flex flex-col gap-2">
          {/* Name and actions */}
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-extrabold text-gray-900">
              {productData.name}
            </h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleFavorite(productData)}
                className={`flex items-center justify-center rounded-xl transition-all duration-200 ${
                  favoriteState
                    ? "bg-[#D50000] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {favoriteState ? (
                  <PiHeartFill size={20} />
                ) : (
                  <PiHeart size={20} />
                )}
              </button>

              {/* Share */}
              <button
                onClick={handleShare}
                className="flex items-center justify-center rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 transition-all duration-200"
              >
                <PiShareNetwork size={20} />
              </button>
            </div>
          </div>
          {/* Rating */}
          {/* <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-gray-400 text-[12px]">4.5 / 5</span>
          </div> */}

          {/* Price */}
          <div className="text-[22px] font-extrabold text-black mt-1">
            ${productData.price}
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-3 leading-relaxed text-sm font-regular">
            {productData.name} تحتوي على ميزة {productData.feature}، تصميم أنيق
            وجودة عالية تناسب الاستخدام اليومي.
          </p>
          {/* Size selector — only if sizeShown is true */}
          {productData.sizeShown && (
            <div className="mt-2">
              <p className="font-bold text-gray-900 mb-2">اختر المقاس</p>
              <div className="flex flex-wrap gap-2">
                {[38, 39, 40, 41, 42, 43, 44].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-lg text-sm font-bold border transition-all duration-200 ${
                      selectedSize === size
                        ? "text-white border-transparent"
                        : "bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-400"
                    }`}
                    style={
                      selectedSize === size
                        ? {
                            backgroundColor: "var(--primary-color)",
                            borderColor: "var(--primary-color)",
                          }
                        : {}
                    }
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* Color picker — only if product has colors */}
          {productData.colors?.length > 0 && (
            <div>
              <p className="font-bold text-gray-900 mb-2">اختر اللون</p>
              <div className="flex gap-2">
                {productData.colors.map((color, i) => (
                  <button
                    key={i}
                    className="flex-1 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-500 transition-colors"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-3 mt-2">
            {/* Quantity + Favorite + Share */}
            <div className="flex items-center justify-between gap-3">
              {/* Favorite */}
            </div>

            {/* Add to Cart */}
            <button
              onClick={() =>
                addToCart({
                  id: productData.id,
                  name: productData.name,
                  price: productData.price,
                  currency: productData.currency,
                  image: activeImage,
                  quantity,
                })
              }
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-extrabold text-xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <PiShoppingCartSimpleLight size={24} />
              أضف للسلّة
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <div className="container mx-auto mb-4">
          {/* Title + divider matching CategorySection style */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
              منتجات مشابهة
            </h2>
          </div>
          <div className="relative w-full h-[1px] bg-gray-200 mb-6">
            <div
              className="absolute right-0 w-16 h-[2px] -top-[0.5px]"
              style={{ backgroundColor: "var(--primary-color)" }}
            />
          </div>
        </div>

        {/* Carousel — same pattern as CategorySection mobile */}
        <div className="flex flex-row gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {categoryData.products
            .filter((p) => p.id !== productData.id)
            .map((product) => (
              <div
                key={product.id}
                className="snap-start shrink-0 w-[45vw] md:w-[22vw]"
              >
                <ProductCard product={product} categoryId={categoryData.id} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
