import "./mustaqar.css";
import BottomNavigation from "./components/BottomNavigation"; // Adjust path if you saved it elsewhere
import { CartProvider } from "./context/cartContext";

export const metadata = {
  title: "مستقر",
};

export default function MustaqarLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="mustaqar-font bg-[#fefefe]">
        <CartProvider>
          {children}
          <BottomNavigation />
        </CartProvider>
      </body>
    </html>
  );
}
