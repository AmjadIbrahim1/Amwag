import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  let [cartItems, setCartItems] = useState([]);
  let [totalAmount, setTotalAmount] = useState(0);

  const addItemToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.productId === product._id);

      if (existing) {
        return prevItems.map((item) =>
          item.productId === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevItems,
        {
          productId: product._id,
          title: product.title,
          image: product.image,
          unitPrice: product.price,
          quantity: 1,
        },
      ];
    });

    setTotalAmount((prevTotal) => prevTotal + product.price);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
