import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./sections/Footer";

export const metadata = {
  title: "خضور حسن | مطوّر ومصمّم",
  description: "بورتفوليو خضور حسن — حيث تجد السحر",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-paper text-ink thmanya-medium antialiased">
        {children}
        <SpeedInsights />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
