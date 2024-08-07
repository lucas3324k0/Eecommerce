import { createContext, useEffect, useState } from "react";

export const MeuCartContext = createContext();

export const MeuCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([]);
  const [conta, setConta] = useState(0);

  const delItemCart = (products) => {
    setCart(cart.filter((item) => item.id !== products.id));
  };

  useEffect(() => {
    setConta(cart.length )
  }, [cart])


  const addToCart = (products) => {
    const CartProducts = cart.find((item) => item.id === products.id);
    if (CartProducts) {
      setCart(
        cart.map((item) =>
          item.id === products.id
            ? {
                ...item,
                unitPrice: item.unitPrice || item.price, // Inicializa unitPrice com o valor original de price
                price: (item.unitPrice || item.price) * (item.quantity + 1), // Calcula o preço total com base no unitPrice
                quantity: item.quantity + 1, // Incrementa a quantidade
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        { ...products, quantity: 1, unitPrice: products.price },
      ]);
    }
  };

  const someCart = () => {
    const someCartTotal = cart.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    setTotal(someCartTotal);
  };

  useEffect(() => {
    someCart();
  }, [cart]);

  return (
    <MeuCartContext.Provider value={{ cart, addToCart, delItemCart, total, conta }}>
      {children}
    </MeuCartContext.Provider>
  );
};
