import categoriesData from "../../CategoriesData";
import Image from "next/image";
import Link from "next/link";
import TopBar from "../../components/TopBar"
import ProductCard from "../../components/ProductCard"
import { slugify } from "../../lib/slugify";

export default function ProductPage({ params }) {
  const { category, product } = params;

  // Find category
  const categoryData = categoriesData.find((cat) => cat.id === category);

  if (!categoryData) return <div>Category not found</div>;

  const decodedProduct = decodeURIComponent(product);

  const productData = categoryData.products.find(
    (prod) => slugify(prod.name) === slugify(decodedProduct),
  );

  if (!productData) return <div>Product not found</div>;

  return (
    <>
    <TopBar />
    <div className="max-w-6xl mx-auto px-4 py-6">
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
              src={productData.image}
              alt={productData.name}
              className="object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#EDEDFF] p-4 rounded-xl w-20 h-20 flex items-center justify-center"
              >
                <Image
                  src={productData.image}
                  alt="thumb"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Info */}
        <div className="flex flex-col md:gap-6">
          <h1 className="text-3xl font-bold">{productData.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-500 text-sm">4.5/5</span>
          </div>

          {/* Price */}
          <div className="text-4xl mt-2 font-extrabold text-[#0B1261]">
            {productData.currency}
            {productData.price}
          </div>

          {/* Description */}
          <p className="font-bold text-[#231F21]">
            {productData.name} تحتوي على ميزة {productData.feature}، تصميم أنيق
            وجودة عالية لتناسب الاستخدام اليومي.
          </p>

          {/* Color Selection */}
          <div>
            <p className="mb-2 font-extrabold text-xl mt-4">اختر اللون</p>
            <div className="flex w-full justify-between gap-2 font-bold">
              <button className="px-4 w-full py-2 border border-black/40 rounded-lg bg-[#f9f9f9] text-bold/80">
                أسود وذهبي
              </button>
              <button className="px-4 w-full py-2 border border-black/40 rounded-lg text-gray-400">
فضي              </button>
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-between mt-4">
           <button className="bg-[#0B1261] w-[60%] text-white px-4 py-1 rounded-lg font-extrabold text-2xl">
            أضف للسلّة
            </button>  <div className="flex px-2 py-1 w-[35%] items-center justify-between bg-[#F9F9F9] rounded-xl">
              <button className="text-3xl">-</button>
              <span className="extrabold">1</span>
              <button className="text-xl">+</button>
            </div>

           
          </div>
        </div>
      </div>

    {/* Related Products */}
<div className="mt-16">
  {categoriesData
    .filter((cat) => cat.id === "new-arrivals")
    .map((section) => (
      <section key={section.id} className="flex flex-col w-full overflow-hidden">
        
        {/* Title */}
        <div className="px-4 container mx-auto mb-8 text-center">
          <h2 className="relative inline-block px-2 text-4xl font-extrabold text-[#0B1261] z-10 after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[16px] after:bg-[#C8CEFF] after:-z-10">
            {section.title}
          </h2>
        </div>

        {/* Same scroll style as CategorySection */}
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
    </div> </>
   
  );
}
