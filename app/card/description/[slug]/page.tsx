"use client";
import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { products } from "../../products";

import { useCart } from "./hooks/useCart";
import { useToast } from "./hooks/useToast";

import { Toast } from "./components/Toast";
import { CartDrawer } from "./components/CartDrawer";
import { ProductGallery, ThumbnailStrip } from "./components/ProductGallery";
import { ProductInfo } from "./components/ProductInfo";
import { BottomCTA } from "./components/BottomCTA";

/* ─── Resolve StaticImageData | string → string ─── */
function resolveSrc(img: any): string {
  return typeof img === "string" ? img : (img?.src ?? "/placeholder.jpg");
}

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  /* ── Gallery state ── */
  const images: string[] = (product as any).productImages?.length
    ? (product as any).productImages.map(resolveSrc)
    : (product as any).images?.length
      ? (product as any).images.map(resolveSrc)
      : [resolveSrc(product.image)];

  const [activeImage, setActiveImage] = useState(0);

  const prevImage = () =>
    setActiveImage((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () =>
    setActiveImage((i) => (i === images.length - 1 ? 0 : i + 1));

  /* ── Product state ── */
  const [selectedSize, setSelectedSize] = useState(
    (product as any).sizes?.[0] ?? "",
  );
  const [quantity, setQuantity] = useState(1);
  const [wished, setWished] = useState(false);

  /* ── Cart & toast ── */
  const cart = useCart();
  const toast = useToast();

  /* ── Actions ── */
  const handleAddToCart = () => {
    cart.addItem({
      id: product.id,
      name: product.name,
      size: selectedSize,
      price: product.price,
      qty: quantity,
      image: images[activeImage],
    });
    toast.show();
    setTimeout(() => cart.setCartOpen(true), 400);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: product.name, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const savings = (product as any).oldPrice
    ? (product as any).oldPrice - product.price
    : null;

  return (
    <div className="bg-white min-h-screen text-[#1A1A1A]">
      <Toast visible={toast.visible} />

      <CartDrawer
        open={cart.cartOpen}
        onClose={() => cart.setCartOpen(false)}
        items={cart.cartItems}
        cartCount={cart.cartCount}
        cartTotal={cart.cartTotal}
        onRemove={cart.removeItem}
        onUpdateQty={cart.updateQty}
      />

      <main className="container py-6 pb-28 md:pb-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <ProductInfo
            product={product as any}
            selectedSize={selectedSize}
            wished={wished}
            onSizeSelect={setSelectedSize}
            onWishToggle={() => setWished((w) => !w)}
            onShare={handleShare}
            onAddToCart={handleAddToCart}
          />

          <ProductGallery
            images={images}
            activeImage={activeImage}
            productName={product.name}
            savings={savings}
            onPrev={prevImage}
            onNext={nextImage}
            onSelectImage={setActiveImage}
          />

          <ThumbnailStrip
            images={images}
            activeImage={activeImage}
            onSelect={setActiveImage}
          />
        </div>
      </main>

      <BottomCTA
        quantity={quantity}
        onIncrease={() => setQuantity((q) => q + 1)}
        onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
