import React from "react";
import GetCart from "../../hooks/HookCart/GetCart";
import ProductList from "../../hooks/ProductList";
import "./Carrinho.css";
import { useParams } from "react-router-dom";

const Carrinho = ({ isOpen, onClose }) => {
    const { id } = useParams()
  const { ProductCart } = GetCart();
  const { data } = ProductList();

  if (!isOpen) return null;

  return (
    <div className="Cart-container">
      <div className="Cart">
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>

        {ProductCart.map((item) => {
          const productDetails = data.find(
            (product) => product.id === item.productId
          );

          if (!productDetails) return null;

          return (
            <div className="ProductsCart" key={item.productId}>
              {console.log(productDetails.id)}
              <div className="ProductsCart-Image">
                <img src={productDetails.image} alt="" />
              </div>
              <div className="ProductsCart-Info">
                <h2>{productDetails.title}</h2>
                <p>{productDetails.description}</p>
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
