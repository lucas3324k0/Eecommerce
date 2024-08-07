import React, { useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Category.css";
import Rating from "@mui/material/Rating";
import ProductList from "../../hooks/ProductList";
import { CategoriaSlider } from "../CategoriaSlider/CategoriaSlider";
import { Link } from "react-router-dom";
import { MeuCartContext } from "../../context/CartContext";

const url = "https://fakestoreapi.com/products";

const Category = () => {
  const { data } = ProductList(url);
  const { addToCart } = useContext(MeuCartContext);

  return (
    <div className="Category-container">
      <CategoriaSlider />
      <div className="Mais-vendidos">
        <h3 className="h2">Mais vendidos</h3>
      </div>
      {/* PRODUTOS  CONTAINERS */}
      <div className="products">
        {data.map((item, index) =>
          item.rating.count >= 400 ? (
            <div className="product-container" key={index}>
              <div className="Product-img">
                <img src={item.image} />
              </div>
              <div className="product-info">
                <h2>{item.title}</h2>
                <p>
                  <strong>R$ {item.price}</strong>
                </p>
                <Rating
                  name="simple-controlled"
                  value={item.rating.rate}
                  readOnly
                  precision={0.5}
                  className="stars"
                />
              </div>

              <div className="product-button">
                <Link to={`/categorias/info/${item.id}`} className="buy">
                  Comprar
                </Link>
                <Link onClick={() => addToCart(item)}>
                  <AddShoppingCartIcon />
                </Link>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Category;
