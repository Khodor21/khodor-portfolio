import NewArrivalsBanner from "./images/New-Arrivals-Banner.jpg";
import NewArrivalsBanner2 from "./images/New-Arrivals-Banner-2.jpg";
import MensWatchBanner from "./images/Men's Watch Banner.jpg";
import WomenWatchBanner from "./images/Women's-Watch-Banner.jpg";
import Watch1 from "./images/Watch-1.png";
import Watch2 from "./images/Watch-2.png";
import Watch3 from "./images/Watch-3.png";
import Watch4 from "./images/Watch-4.png";

import Watch5 from "./images/Watch-5.png";
import Watch6 from "./images/Watch-6.png";
import Watch7 from "./images/Watch-7.png";
import Watch8 from "./images/Watch-8.png";
import Watch9 from "./images/Watch-9.png";
import Watch10 from "./images/Watch-10.png";

const categoriesData = [
  {
    id: "new-arrivals",
    title: "وصل حديثاً",
    banner: {
      imageUrls: [NewArrivalsBanner, NewArrivalsBanner2],
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
        image: Watch2,
        feature: "ضمان سنة واحدة",
        price: "20",
        currency: "$",
      },
      {
        id: "p3",
        name: "ساعة الحرمين - إطار معدن",
        image: Watch3,
        feature: "تنبيه بأوقات الصلاة ",
        price: "65",
        currency: "$",
      },
      {
        id: "p4",
        name: "ساعة كاسيو مقاومة للماء",
        image: Watch4,
        feature: "SKMEI 1123 ",
        price: "20",
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
        id: "p5",
        name: "AUDEMARS PIGUET",
        image: Watch5,
        feature: "ضمان سنة واحدة",
        price: "60",
        currency: "$",
      },
      {
        id: "p6",
        name: "Rolex - Black",
        image: Watch6,
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
        id: "p7",
        name: "سيجما نسائية لون زهري",
        image: Watch7,
        feature: "كفالة سنة واحدة",
        price: "20",
        currency: "$",
      },
      {
        id: "p8",
        name: "سيجما نسائية لون أسود",
        image: Watch8,
        feature: "كفالة سنة واحدة",
        price: "20",
        currency: "$",
      },
      {
        id: "p9",
        name: "سيجما نسائية لون ذهبي",
        image: Watch9,
        feature: "كفالة سنة واحدة",
        price: "20",
        currency: "$",
      },
      {
        id: "p10",
        name: "سيجما نسائية لون فضي",
        image: Watch10,
        feature: "كفالة سنة واحدة",
        price: "20",
        currency: "$",
      },
    ],
  },
];
export default categoriesData;
