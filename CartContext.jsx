import React, { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);
const TAX_RATE = 0.07;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity = 1) => {
    if (!product || quantity < 1) return;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const cartSummary = useMemo(() => {
    const subTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subTotal * TAX_RATE;
    const grandTotal = subTotal + tax;
    return { subTotal, tax, grandTotal };
  }, [cart]);

  const value = useMemo(
    () => ({
      cart,
      addItem,
      removeItem,
      clearCart,
      cartSummary,
      taxRate: TAX_RATE,
    }),
    [cart, cartSummary]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

