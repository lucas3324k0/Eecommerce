import { useContext, useEffect, useState } from "react";
import "./Carrinho.css";
import { MeuCartContext } from "../../context/CartContext";

const Carrinho = ({ isOpen, onClose }) => {
  const { cart } = useContext(MeuCartContext);

  if (!isOpen) return null;

  return (
    <div className="Cart-container">
      <div className="Cart">
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>

        {cart.map((item, index) => {
          return (
            <div className="ProductsCart" key={index}>
              <h2>{item.title}</h2>

              <div className="ProductsCart-Info">
                <div className="ProductsCart-Image">
                  <img src={item.image} alt="" />
                </div>

                <div className="Info">
                  <p>
                    <strong>Categoria:</strong> {item.category}
                  </p>
                  <p>
                    <strong>R$ </strong>
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="ProductsCart-button">
                    <input
                      type="number"
                      value={item.quantity}
                      className="input"
                      disabled
                    />
                  </div>
                  <div className="ProductsCart-button">
                    <input
                      type="submit"
                      className="buy"
                      value="Finalizar compra"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="View-price-container">
          {}
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
