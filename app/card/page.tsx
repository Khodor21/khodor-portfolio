import HeroSection from "./HeroSection";
import ShopByCategory from "./ShopByCategory";
import BestSellersCarousel from "./BestSellersCarousel";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 bg-[#FAFAF8]">
      <HeroSection />
      {/* <ShopByCategory /> */}
      <BestSellersCarousel />
      <Footer />
    </main>
  );
}
