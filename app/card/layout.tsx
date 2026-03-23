import type { Metadata } from "next";
import "./card.css";

export const metadata: Metadata = {
  title: "عبايات | متجر العبايات الفاخرة",
  description: "أحدث تشكيلات العبايات النسائية بأفضل الأسعار",
};

export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
