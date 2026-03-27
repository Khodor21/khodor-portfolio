import type { Metadata } from "next";
import "./card.css";
import SallaHeader from "./header";

export const metadata: Metadata = {
  title: "عبايات | متجر العبايات الفاخرة",
  description: "أحدث تشكيلات العبايات النسائية بأفضل الأسعار",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="">
        <div className="flex flex-col min-h-screen">
          <SallaHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
