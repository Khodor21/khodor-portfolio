"use client";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

// Replace this with your actual data-fetching logic
async function getProductsByCategory(categoryName) {
  // Example: fetch from your API or CMS
  // return await fetch(`/api/products?category=${categoryName}`).then(r => r.json());
  return [];
}

export default function CategoryPage({ params }) {
  const { "category-name": categoryName } = params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory(categoryName).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [categoryName]);

  return (
    <main dir="rtl" className="w-full min-h-screen">
      {/* Page Header */}
      <div className="px-6 md:px-8 py-6 md:py-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-primary capitalize">
          {decodeURIComponent(categoryName).replace(/-/g, " ")}
        </h1>
      </div>

      {/* Product Grid */}
      <div className="px-6 md:px-8 pb-10">
        {loading ? (
          // Skeleton loading state
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg bg-gray-100 animate-pulse aspect-[3/4]"
              />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-lg">
            لا توجد منتجات في هذه الفئة
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                categoryId={categoryName}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
