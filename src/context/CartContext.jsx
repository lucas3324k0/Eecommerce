import { createContext, useState } from "react";

export const MeuCartContext = createContext();

export const MeuCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    const CartProducts = cart.find((item) => item.id === products.id);
    if (CartProducts) {
      setCart(
        cart.map((item) =>
          item.id === products.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...products, quantity: 1 }]);
    }
  };

  return (
    <MeuCartContext.Provider value={{ cart, addToCart }}>
      {children}
    </MeuCartContext.Provider>
  );
};
