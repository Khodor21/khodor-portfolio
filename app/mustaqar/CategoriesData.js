import NewArrivalsBanner from "./images/New-Arrivals-Banner.jpg";
import MensWatchBanner from "./images/Men's Watch Banner.jpg";
import WomenWatchBanner from "./images/Women's-Watch-Banner.jpg";
import Watch1 from "./images/Watch-1.png";

const categoriesData = [
  {
    id: "new-arrivals",
    title: "وصل حديثاً",
    banner: {
      imageUrl: NewArrivalsBanner,
      ratio: "4:1",
      alt: "مستقر - وصل حديثاً",
    },
    discoverLink: "/category/new-arrivals",
    products: [
      {
        id: "p1",
        name: "ساعة الحرمين - إطار بلاستيك",
        image: Watch1,
        feature: "تنبيه بأوقات الصلاة",
        price: "40",
        currency: "$",
      },
      {
        id: "p2",
        name: "ساعة شفافة بأرقام عربية",
        image: Watch1,
        feature: "ضمان سنة واحدة",
        price: "20",
        currency: "$",
      },
      {
        id: "p3",
        name: "ساعة رياضية",
        image: Watch1,
        feature: "مقاومة للماء",
        price: "35",
        currency: "$",
      },
    ],
  },
  {
    id: "mens-watches",
    title: "ساعات رجّالية",
    banner: {
      imageUrl: MensWatchBanner,
      ratio: "2:1",
      alt: "ساعات مستقر تبقي حضورك ثابتاً",
    },
    discoverLink: "/category/mens-watches",
    products: [
      {
        id: "p4",
        name: "AUDEMARS PIGUET",
        image: Watch1,
        feature: "ضمان سنة واحدة",
        price: "60",
        currency: "$",
      },
      {
        id: "p5",
        name: "Rolex - Black",
        image: Watch1,
        feature: "متوفر لونين",
        price: "12",
        currency: "$",
      },
    ],
  },
  {
    id: "womens-watches",
    title: "ساعات نسائيّة",
    banner: {
      imageUrl: WomenWatchBanner,
      ratio: "2:1",
      alt: "ساعات مستقر تبقي حضوركِ ملفتاً",
    },
    discoverLink: "/category/women-watches",
    products: [
      {
        id: "p4",
        name: "AUDEMARS PIGUET",
        image: Watch1,
        feature: "ضمان سنة واحدة",
        price: "60",
        currency: "$",
      },
      {
        id: "p5",
        name: "Rolex - Black",
        image: Watch1,
        feature: "متوفر لونين",
        price: "12",
        currency: "$",
      },
    ],
  },
];
export default categoriesData;
