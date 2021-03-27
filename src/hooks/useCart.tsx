import React, { useState, useEffect, createContext, useContext } from "react";
import { CartItem } from "types";

const CartContext = createContext<{
  items: CartItem[];
  addItem: (data: CartItem) => void;
  removeItem: (id: string) => void;
}>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const localstorageCart = localStorage.getItem("cart");
    if (!localstorageCart) return;
    return setItems(JSON.parse(localstorageCart));
  }, []);

  useEffect(() => {
    if (items.length) {
      return localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items]);

  const addItem = (newItem: CartItem) => {
    console.log(localStorage.getItem("cart"));
    const isAlreadyInCart = items.find(
      (cartItem) => cartItem.id === newItem.id
    );
    if (isAlreadyInCart) {
      return setItems((prev) =>
        prev.map((cartItem) =>
          cartItem.id === newItem.id
            ? { ...cartItem, quantity: (cartItem.quantity += 1) }
            : cartItem
        )
      );
    }
    return setItems((prev) => [...prev, newItem]);
  };

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((cartItem) => cartItem.id !== id));

  const defaultContext = {
    items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={defaultContext}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export default useCartContext;
