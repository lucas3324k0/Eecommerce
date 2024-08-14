import { useContext, useEffect, useRef } from "react";
import "./Carrinho.css";
import { MeuCartContext } from "../../context/CartContext";
import TablePrice from "../tablePrice/TablePrice";
import { Link } from "react-router-dom";

const Carrinho = ({ isOpen, onClose }) => {
  const { cart, delItemCart } = useContext(MeuCartContext);

  if (!isOpen) return null;

  return (
    <>
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
                      {parseFloat(item.price).toFixed(2)}
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
                      <Link
                        className="buy"
                        value="Comprar Apenas Este"
                        type="submit"
                        to={`/categorias/info/${item.id}`}
                      >
                        Comprar
                      </Link>

                      <button className="del" onClick={() => delItemCart(item)}>
                        <img
                          src="https://img.icons8.com/?size=100&id=43949&format=png&color=000000"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <TablePrice />
      </div>
    </>
  );
};

export default Carrinho;
