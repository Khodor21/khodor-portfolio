import "./mustaqar.css";
import BottomNavigation from "./components/BottomNavigation"; // Adjust path if you saved it elsewhere

export const metadata = {
  title: "مستقر",
};

export default function MustaqarLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="mustaqar-font bg-black">
        {children}

        <BottomNavigation />
      </body>
    </html>
  );
}
