import { Inter } from "next/font/google";
import "@/app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/app/sections/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khodor Hasan Developer | Designer",
  description: "Khodor Hasan Portfolio | Where You Can Find The Magician",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href={metadata.favicon} />
        {children} <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
