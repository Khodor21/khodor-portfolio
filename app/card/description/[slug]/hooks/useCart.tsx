import { useState } from "react";
interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  qty: number;
  image: string;
}

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const cartTotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  const addItem = (item: Omit<CartItem, "qty"> & { qty: number }) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.size === item.size,
      );
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, qty: i.qty + item.qty }
            : i,
        );
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: number, size: string) =>
    setCartItems((prev) =>
      prev.filter((i) => !(i.id === id && i.size === size)),
    );

  const updateQty = (id: number, size: string, delta: number) =>
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.id === id && i.size === size ? { ...i, qty: i.qty + delta } : i,
        )
        .filter((i) => i.qty > 0),
    );

  return {
    cartItems,
    cartOpen,
    setCartOpen,
    cartTotal,
    cartCount,
    addItem,
    removeItem,
    updateQty,
  };
}
