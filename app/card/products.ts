import Hijab1 from "./images/Hijab-1.jpeg";
import Hijab2 from "./images/Hijab-2.png";
import Hijab3 from "./images/Hijab-3.jpeg";
import Hijab4 from "./images/Hijab-4.jpeg";

import Desc1 from "./images/Desc-1.jpeg";
import Desc2 from "./images/Desc-2.jpeg";
import Desc3 from "./images/Desc-3.jpeg";
import Desc4 from "./images/Desc-4.jpeg";

import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  slug: string;
  // brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number; // 0–5
  badge?: { type: "new" | "sale" | "best" };
  colors: { hex: string; name: string }[];
  sizes: string[];
  soldOut?: string[];
  stock?: number;
  stockTotal?: number;
  image: StaticImageData;
  productImages?: StaticImageData[]; // Fixed: Changed from string[] to StaticImageData[] and made optional
}

export const products: Product[] = [
  {
    id: 1,
    slug: "abaya-black-classic",
    name: "عباية نيدا مطرزة",
    price: 385,
    oldPrice: 520,
    discount: 26,
    rating: 4.8,
    badge: { type: "best" },
    colors: [
      { hex: "#1a1410", name: "أسود غامق" },
      { hex: "#3B2F2F", name: "بني داكن" },
      { hex: "#4A4060", name: "كحلي" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: Hijab1,
    productImages: [Desc1, Desc2, Desc3, Desc4],
  },
  {
    id: 2,
    slug: "abaya-black-classic-2",
    name: "عباية كريب مكسرة مع حزام",
    price: 460,
    rating: 4.5,
    badge: { type: "best" },

    colors: [
      { hex: "#2D2040", name: "بنفسجي" },
      { hex: "#1a1410", name: "أسود" },
      { hex: "#8B7355", name: "كاميل" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    soldOut: ["XXL"],
    image: Hijab2,
    productImages: [Desc1, Desc2, Desc3, Desc4],
  },
  {
    id: 3,
    slug: "abaya-linen-open",
    name: "عباية كتان مفتوحة",
    price: 290,
    oldPrice: 440,
    discount: 34,
    rating: 4.2,
    badge: { type: "best" },
    colors: [
      { hex: "#8B7355", name: "كاميل" },
      { hex: "#1a1410", name: "أسود" },
      { hex: "#5C4A6E", name: "بنفسجي" },
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 5,
    stockTotal: 16,
    image: Hijab3,
  },
  {
    id: 4,
    slug: "abaya-lace-embroidered",
    name: "عباية مزخرفة بالدانتيل",
    price: 550,
    oldPrice: 720,
    discount: 24,
    rating: 4.6,
    badge: { type: "best" },
    colors: [
      { hex: "#1a1410", name: "أسود" },
      { hex: "#4A2040", name: "عنابي" },
      { hex: "#8B7355", name: "كاميل" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    soldOut: ["XS"],
    stock: 3,
    stockTotal: 20,
    image: Hijab4,
  },
];
