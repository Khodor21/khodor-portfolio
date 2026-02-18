import "./mustaqar.css";

export const metadata = {
  title: "مستقر",
};

export default function MustaqarLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="mustaqar-font bg-black">
        {children}
      </body>
    </html>
  );
}
