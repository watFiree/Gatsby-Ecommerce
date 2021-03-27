import "src/styles/global.css";
import React from "react";
import { CartProvider } from "./src/hooks/useCart";

export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
);
