// ProductDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quant, setQuant] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  quant == 0 ? setQuant(1) : null;

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="ProductsDetails-container">
        <div className="img-Details">
          <img src={product.image} alt="" />
        </div>

        <div className="ProductsDetails-info">
          <div className="stars-div">
            <Rating
              name="simple-controlled"
              value={product.rating.rate}
              readOnly
              precision={0.5}
              className="stars"
            />
          </div>
          <h2>{product.title}</h2>
          <p className="description">{product.description}</p>
          <p className="price">
            <strong>R$ {(product.price * quant).toFixed(2)}</strong>
          </p>

          <div className="btn-container">
            <button className="Btn-ProductsDetail">Comprar</button>
            <button className="Btn-ProductsDetail">Pagar Parcelado</button>
          </div>
          <label htmlFor="Quantidade">
            <strong>
              Quantide:{" "}
              <input
                type="number"
                name="Quantidade"
                value={quant}
                onChange={(e) => setQuant(e.target.value)}
              />
            </strong>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
