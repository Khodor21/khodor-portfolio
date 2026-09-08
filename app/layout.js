import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./sections/Footer";

export const metadata = {
  metadataBase: new URL("https://khodorhasan.com"), // ← غيّره لدومينك
  title: "خضر حسن | مطوّر ومصمّم",
  description: "معرض أعمال خضر حسن — حيث تجد الإبداع",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "خضر حسن",
  },
};

export const viewport = {
  themeColor: "#F7F5F0",
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
