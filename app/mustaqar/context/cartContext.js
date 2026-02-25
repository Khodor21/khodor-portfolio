"use client";

import { createContext, useContext, useState, useMemo, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // -------------------------
  // INITIAL STATE FROM LOCAL STORAGE
  // -------------------------
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cartItems");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  const [favorites, setFavorites] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  // -------------------------
  // SYNC TO LOCAL STORAGE
  // -------------------------
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // -------------------------
  // CART LOGIC
  // -------------------------
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item,
        );
      }

      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  // -------------------------
  // FAVORITES LOGIC
  // -------------------------
  const addToFavorites = (product) => {
    setFavorites((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (product) => {
    if (favorites.find((item) => item.id === product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  // -------------------------
  // CONTEXT VALUE
  // -------------------------
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        totalPrice,
        favorites,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
