import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  let [cartItems, setCartItems] = useState([]);
  let [totalAmount, setTotalAmount] = useState(0);

  const addItemToCart = (item) => {
    console.log("added item:", item); 
    setCartItems((prev) => [...prev, item]);

    
    setTotalAmount((prev) => prev + item.price);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
