import tirhalBanner from "../images/Tirhal/Tirhal-Banner.jpg";
import tirhalLogo from "../images/Tirhal/Tirhal-Logo.svg";
import tirhalContent from "../images/Tirhal/Tirhal-Word.svg";
import shoesBanner from "../images/Tirhal/Shoes-Banner.jpg";
import tripsBanner from "../images/Tirhal/Trips-Banner.jpg";

import shoe1 from "../images/Tirhal/shoe-1.png";
import shoe2 from "../images/Tirhal/shoe-2.png";
import shoe3 from "../images/Tirhal/shoe-3.png";

import trip1 from "../images/Tirhal/trips-1.png";
import trip2 from "../images/Tirhal/trips-2.png";
import trip3 from "../images/Tirhal/trips-3.png";

const siteConfigs = {
  tirhal: {
    meta: {
      title: "موقع ترحال الالكتروني",
      description: "رائحة الصباح، طعم اللحظة",
    },
    primaryColor: "#BA9D67",
    topBar: {},
    hero: {
      bannerImage: tirhalBanner,
      logoImage: tirhalLogo,
      storeName: "ترحــــــــــــال",
      storesvg: tirhalContent,
      tagline: "مغامرتُـك تَبدأ مِن هُنــا",
      location: {
        city: "مدينة إدلب",
        address: "خلف مبنى وزارة الإعلام - جنوب ساحة السيرياتيل",
      },
    },
    categories: [
      {
        id: "shoes",
        title: "قسم الأحذية",
        banner: {
          ratio: "2:1",
          imageUrl: shoesBanner,
          alt: "قسم الأحذية",
        },
        products: [
          {
            id: "shoe-1",
            name: "حذاء شتوي كعب حديد  ",
            feature: "مناسب لجميع التضاريس",
            price: 45,
            image: shoe1,
          },
          {
            id: "shoe-2",
            name: "حذاء صوف عالي  ",
            feature: "نعل مقاوم ",
            price: 65,
            image: shoe2,
          },
          {
            id: "shoe-3",
            name: "حذاء رياضي للمشي ",
            feature: "خفيف الوزن ومريح",
            price: 38,
            image: shoe3,
          },
        ],
      },
      {
        id: "trips",
        title: "قسم الرحلات",
        banner: {
          ratio: "2:1",
          imageUrl: tripsBanner,
          alt: "قسم الرحلات",
        },
        products: [
          {
            id: "trip-1",
            name: "رحلة جبال الساحل",
            feature: "يومان - شامل الإقامة",
            price: 120,
            image: trip1,
          },
          {
            id: "trip-2",
            name: "رحلة بادية الشام",
            feature: "ثلاثة أيام - تخييم",
            price: 95,
            image: trip2,
          },
          {
            id: "trip-3",
            name: "رحلة وادي العلا",
            feature: "يوم واحد - مشي وتسلق",
            price: 55,
            image: trip3,
          },
        ],
      },
    ],
    features: {},
    footer: {},
  },
};

export function getSiteConfig(slug) {
  return siteConfigs[slug] ?? null;
}

export function getAllSiteSlugs() {
  return Object.keys(siteConfigs);
}
