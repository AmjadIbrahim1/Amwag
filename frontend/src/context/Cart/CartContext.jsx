import { createContext, useContext } from "react";

export const CartContext = createContext({
  cartItems: [],
  totalAmount: 0,
  addItemToCart: () => {},
});

export const useCart = () => useContext(CartContext);
