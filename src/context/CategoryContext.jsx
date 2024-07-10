import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  const [valor, setValor] = useState('');

  return (
    <CategoryContext.Provider value={{ valor, setValor }}>
      {children}
    </CategoryContext.Provider>
  );
};
