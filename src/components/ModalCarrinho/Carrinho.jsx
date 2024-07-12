import { useContext } from "react";
import "./Carrinho.css";
import { MeuCartContext } from "../../context/CartContext";

const Carrinho = ({ isOpen, onClose }) => {
  const { cart } = useContext(MeuCartContext);
  console.log(cart);
  if (!isOpen) return null;

  return (
    <div className="Cart-container">
      <div className="Cart">
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>

        {cart.map((item) => {
          return (
            <div className="ProductsCart" key={item.id}>
              <div className="ProductsCart-Image">
                <img src={item.image} alt="" />
              </div>
              <div className="ProductsCart-Info">
                <h2>{item.title}</h2>
                {/* <p>{item.description}</p> */}
                <strong>
                  <p>R$ {item.price}</p>
                </strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carrinho;
