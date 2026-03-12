import { notFound } from "next/navigation";
import { getSiteConfig } from "./lib/getSiteConfig";

// import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
// import CategorySection from "./components/CategorySection";
// import Features from "./components/Features";
// import Footer from "./components/Footer";

// This generates static pages at build time (optional, for performance)
export async function generateMetadata({ params }) {
  const config = getSiteConfig(params.site);
  if (!config) return {};

  return {
    title: config.meta?.title || config.hero.storeName,
    description: config.meta?.description || config.hero.tagline,
    openGraph: {
      title: config.meta?.title || config.hero.storeName,
      description: config.meta?.description || config.hero.tagline,
    },
  };
}

export default function SitePage({ params }) {
  const config = getSiteConfig(params.site);

  // If no config found for this slug → 404
  if (!config) return notFound();

  return (
    <div className="w-full mb-10 min-h-screen overflow-hidden">
      {/* <TopBar data={config.topBar} /> */}

      <HeroSection data={config.hero} />

      {/* {config.categories.map((section) => (
        <CategorySection key={section.id} section={section} />
      ))}

      <Features data={config.features} />

      <Footer data={config.footer} /> */}
    </div>
  );
}
