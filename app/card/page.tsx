"use client";


import SallaHeader from "./header";
import HeroSection from "./HeroSection";
import ShopByCategory from "./ShopByCategory";
import BestSellersCarousel from "./BestSellersCarousel";

export default function HomePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#FAFAF8]">
   
      <SallaHeader />
      <HeroSection />
      <ShopByCategory />
      <BestSellersCarousel />

      <footer className="text-center py-10 text-xs text-gray-300">
        جميع الأسعار شاملة ضريبة القيمة المضافة
      </footer>
    </main>
  );
}