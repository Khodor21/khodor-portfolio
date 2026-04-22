import tirhalBanner from "../images/Tirhal/Hero-Banner.jpeg";
import tirhalLogo from "../images/Tirhal/Tirhal-Logo.svg";
import tirhalContent from "../images/Tirhal/Tirhal-Word.svg";
import shoesBanner from "../images/Tirhal/Shoes-Banner.jpg";
import tripsBanner from "../images/Tirhal/Trips-Banner.jpg";

import shoe1 from "../images/Tirhal/shoe-1.jpeg";
import shoe2 from "../images/Tirhal/shoe-2.jpeg";
import shoe3 from "../images/Tirhal/shoe-3.jpeg";

import trip1 from "../images/Tirhal/trips-2.jpeg";
import trip2 from "../images/Tirhal/trips-3.jpeg";
import trip3 from "../images/Tirhal/trips-1.jpeg";
import trip4 from "../images/Tirhal/trips-4.jpeg";

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
            sizeShown : true,
            feature: "مناسب لجميع التضاريس",
            price: 45,

            rating: 4.2,
            image: shoe1,
          },
          {
            id: "shoe-2",
            name: "حذاء صوف عالي  ",
            sizeShown : true,
            feature: "نعل مقاوم ",
            price: 65,

            rating: 4.4,
            image: shoe2,
          },
          {
            id: "shoe-3",
            name: "حذاء رياضي للمشي ",
            sizeShown : true,
            feature: "خفيف الوزن ومريح",
            price: 38,

            rating: 5,
            image: shoe3,
          },
          {
            id: "shoe-4",
            name: "حذاء شتوي كعب حديد  ",
            sizeShown : true,
            feature: "مناسب لجميع التضاريس",
            price: 45,

            rating: 4.2,
            image: shoe1,
          },
        ],
      },
      {
        id: "trips",
        title: "قسم التخيم والرحلات",
        banner: {
          ratio: "2:1",
          imageUrl: tripsBanner,
          alt: "قسم الرحلات",
        },
        products: [
          {
            id: "trip-1",
            name: "خيمة المشكات 3x3 مع 3 شبابيك  ",
            sizeShown : false,
            feature: " تتسع لـ 8 أشخاص  ",
            price: 70,
            rating: 4.3,
            image: trip1,
          },
          {
            id: "trip-2",
            name: "كرسي أرضي مع مسند وحزام مكتٌف",
            sizeShown : false,
            feature: "قابل للطي",
            price: 23,

            rating: 4.7,
            image: trip2,
          },
          {
            id: "trip-3",
            name: "فانوس تراثي للرحلات والتخييم",
            sizeShown : false,
            feature: "ينفع لزينة البيت",
            price: 6.5,
            rating: 4.2,
            image: trip3,
          },
          {
            id: "trip-5",
            name: "    كرسي أرضي مع شنطة",
            sizeShown : false,
            feature: "وزن خفيف ومتانة  ",
            price: 21,
            rating: 4.2,
            image: trip4,
          },
        ],
      },
    ],
    features: {},
    footer: {
      brand: {
        name: "ترحال",
        description:
          "المتجر الأول والوحيد في سوريا المتخصص في لوازم الرحلات والتخييم. نوفر معدات عالية الجودة لعشّاق المغامرة—من الأحذية والحقائب وحتى أدوات البقاء—لنرافقك في كل خطوة نحو طريقٍ أبعد وتجربةٍ أقوى.",
      },

      contact: {
        phone: "00963996777273",
        email: "tirhal.store@gmail.com", // (you can change later)
      },

      socials: [
        {
          icon: "FaWhatsapp", // map it later in component if needed
          label: "WhatsApp",
          href: "https://wa.me/963996777273",
        },
        {
          icon: "FaTelegram",
          label: "Telegram",
          href: "https://t.me/TIRHALL_1",
        },
      ],

      paymentMethods: ["الدفع عند الاستلام", "شام كاش "],

      crNumber: "—", // not available

      country: "سوريا",
      language: "العربية",

      links: [
        { label: "من نحن", href: "#" },
        { label: "سياسة الخصوصية", href: "#" },
        { label: "الشروط والأحكام", href: "#" },
        { label: "الدعم الفني", href: "#" },
      ],
    },
  },
};

export function getSiteConfig(slug) {
  return siteConfigs[slug] ?? null;
}

export function getAllSiteSlugs() {
  return Object.keys(siteConfigs);
}
