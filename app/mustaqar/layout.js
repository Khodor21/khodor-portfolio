import "./mustaqar.css";
import BottomNavigation from "./components/BottomNavigation";
import { CartProvider } from "./context/cartContext";

// ✅ Import assets locally
import favicon from "./assets/favicon.ico";
import icon16 from "./assets/icon-16x16.png";
import icon32 from "./assets/icon-32x32.png";
import appleIcon from "./assets/apple-touch-icon.png";
import android192 from "./assets/android-chrome-192x192.png";
import android512 from "./assets/android-chrome-512x512.png";
import ogImage from "./assets/og-image.jpg";

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "متجر مستقر الإلكتروني لبيع الساعات الأصلية في سوريا",
    template: "%s | متجر مستقر",
  },

  description:
    "متجر مستقر الإلكتروني لبيع الساعات الأصلية والمكفولة في سوريا. أحدث موديلات الساعات الرجالية والنسائية بأسعار منافسة وجودة مضمونة. تحكم في الوقت لتتحكم في الحياة.",

  keywords: [
    "متجر ساعات في سوريا",
    "ساعات أصلية",
    "شراء ساعات أونلاين سوريا",
    "ساعات رجالية",
    "ساعات نسائية",
    "أفضل متجر ساعات في سوريا",
    "ساعات مكفولة",
    "متجر مستقر",
  ],

  authors: [{ name: "متجر مستقر" }],
  creator: "متجر مستقر",
  publisher: "متجر مستقر",

  openGraph: {
    title: "متجر مستقر الإلكتروني لبيع الساعات الأصلية في سوريا",
    description:
      "تسوق أحدث الساعات الأصلية والمكفولة في سوريا بأسعار تنافسية وجودة عالية. مستقر — تحكم في الوقت لتتحكم في الحياة.",
    url: "https://yourdomain.com/mustaqar",
    siteName: "متجر مستقر",
    locale: "ar_SY",
    type: "website",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "متجر مستقر لبيع الساعات الأصلية في سوريا",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "متجر مستقر الإلكتروني لبيع الساعات الأصلية",
    description: "أفضل متجر ساعات أصلية ومكفولة في سوريا بأسعار منافسة.",
    images: [ogImage.src],
  },

  icons: {
    icon: [
      { url: favicon.src },
      { url: icon32.src, sizes: "32x32", type: "image/png" },
      { url: icon16.src, sizes: "16x16", type: "image/png" },
      { url: android192.src, sizes: "192x192", type: "image/png" },
      { url: android512.src, sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: appleIcon.src, sizes: "180x180", type: "image/png" }],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function MustaqarLayout({ children }) {
  return (
    <div className="mustaqar-font bg-[#fefefe]" dir="rtl">
      <CartProvider>
        {children}
        <BottomNavigation />
      </CartProvider>
    </div>
  );
}
