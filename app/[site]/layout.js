import { CartProvider } from "./context/cartContext";

export default function SiteLayout({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
