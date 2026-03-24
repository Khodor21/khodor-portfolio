import Hijab1 from "./images/Hijab-1.jpg";
import Hijab2 from "./images/Hijab-2.jpg";
import Hijab3 from "./images/Hijab-3.jpg";
import Hijab4 from "./images/Hijab-4.jpg";

import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  badge?: { type: "new" | "sale" | "best" };
  colors: { hex: string; name: string }[];
  sizes: string[];
  soldOut?: string[];
  stock?: number;
  stockTotal?: number;
  image: StaticImageData;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "abaya-black-classic",
    name: "عباية نيدا مطرزة",
    price: 385,
    oldPrice: 520,
    discount: 26,
    badge: { type: "best" },
    colors: [
      { hex: "#1a1410", name: "أسود غامق" },
      { hex: "#3B2F2F", name: "بني داكن" },
      { hex: "#4A4060", name: "كحلي" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: Hijab1,
  },
  {
    id: 2,
    slug: "abaya-black-classic",
    name: "عباية كريب مكسرة مع حزام",
    price: 460,
    // badge: { type: "new" },
    colors: [
      { hex: "#2D2040", name: "بنفسجي" },
      { hex: "#1a1410", name: "أسود" },
      { hex: "#8B7355", name: "كاميل" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    soldOut: ["XXL"],
    image: Hijab2,
  },
  {
    id: 3,
    slug: "abaya-black-classic",
    name: "عباية كتان مفتوحة",
    price: 290,
    oldPrice: 440,
    discount: 34,
    badge: { type: "sale" },
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
    slug: "abaya-black-classic",
    name: "عباية مزخرفة بالدانتيل",
    price: 550,
    oldPrice: 720,
    discount: 24,
    badge: { type: "sale" },
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
