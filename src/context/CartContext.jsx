import { createContext, useState } from "react";

export const MeuCartContext = createContext();

export const MeuCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    const addToCartVerific = cart.find((item) => item.id == products.id);
    if (addToCartVerific) {
    } else {
    }
    // return ;
  };

  const removeFromCart = (productId) => {
    // setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <MeuCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </MeuCartContext.Provider>
  );
};
