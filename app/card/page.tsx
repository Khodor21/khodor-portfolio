"use client";

import HeroSection from "./HeroSection";
import ShopByCategory from "./ShopByCategory";
import BestSellersCarousel from "./BestSellersCarousel";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#FAFAF8]">
      <HeroSection />
      <ShopByCategory />
      <BestSellersCarousel />

      <Footer />
    </main>
  );
}
