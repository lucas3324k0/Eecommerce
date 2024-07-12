import { createContext, useState } from "react";

export const MeuCartContext = createContext();

export const MeuCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    console.log('products:', products, 'value:', cart)
    return setCart([...cart, products]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <MeuCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </MeuCartContext.Provider>
  );
};
