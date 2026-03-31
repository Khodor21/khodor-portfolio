import { CartProvider } from "./context/cartContext";
import BottomNavbar from "./components/BottomNavbar";
import { getSiteConfig } from "./lib/getSiteConfig";

export default async function SiteLayout({ children, params }) {
  const { site } = await params;
  const config = getSiteConfig(site);

  return (
    <CartProvider>
      <div style={{ "--primary-color": config?.primaryColor }}>
        <main className="pb-24 md:pb-0">{children}</main>
        <BottomNavbar site={site} />
      </div>
    </CartProvider>
  );
}
