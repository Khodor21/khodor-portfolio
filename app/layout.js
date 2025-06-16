import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./sections/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khodor Hasan Developer | Designer",
  description: "Khodor Hasan Portfolio | Where You Can Find The Magician",
  favicon:
    "https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/character.svg?alt=media&token=b960320f-7613-4b66-982e-5fa29dad0541",
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
