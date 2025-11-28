import React, { useState, createContext } from "react";
import { products } from "../data/products";
import { faCcAmazonPay } from "@fortawesome/free-brands-svg-icons";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, qty = 1, size = "") => {
    if (!size) {
      alert("Please select a size");
      return;
    }

    const existingIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.selectedSize === size
    );

    if (existingIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += qty;
      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: qty, selectedSize: size },
      ]);
    }
  };

  return (
    <cartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export { CartProvider, cartContext };
