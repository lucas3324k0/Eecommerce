import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Category.css";
import Rating from "@mui/material/Rating";
import ProductList from "../../hooks/ProductList";
import { CategoryContext } from "../../context/CategoryContext";
import { CategoriaSlider } from "../CategoriaSlider/CategoriaSlider";

const Category = () => {
  const { data } = ProductList();

  return (
    <div className="Category-container">
      <CategoriaSlider />
      <div className="Mais-vendidos">
        <h3 className="h2">Mais vendidos</h3>
      </div>
      {/* PRODUTOS  CONTAINERS */}
      <div className="products">
        {data.map((item) =>
          item.rating.count >= 400 ? (
            <div className="product-container" key={item.id}>
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
                <button className="buy">Comprar</button>
                <Link>
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
