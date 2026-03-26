import type { Metadata } from "next";
import "./card.css";
import SallaHeader from "./header";

export const metadata: Metadata = {
  title: "عبايات | متجر العبايات الفاخرة",
  description: "أحدث تشكيلات العبايات النسائية بأفضل الأسعار",
};

export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <SallaHeader />
  {children}</>;
}
