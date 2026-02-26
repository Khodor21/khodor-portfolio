import "./mustaqar.css";
import BottomNavigation from "./components/BottomNavigation"; // Adjust path if you saved it elsewhere
import { CartProvider } from "./context/cartContext";

export const metadata = {
  title: "مستقر",
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
