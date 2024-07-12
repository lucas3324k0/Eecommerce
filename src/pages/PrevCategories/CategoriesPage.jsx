import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import { useContext, useEffect, useState } from "react";
import { CategoriaSlider } from "../../components/CategoriaSlider/CategoriaSlider";
import ProductList from "../../hooks/ProductList";
import { CategoryContext } from "../../context/CategoryContext";
import { Link } from "react-router-dom";
import { MeuCartContext } from "../../context/CartContext";

const CategoriesPage = () => {
  const { valor, setValor } = useContext(CategoryContext);
  const [productsFire, setProductsFire] = useState("");
  const { addToCart } = useContext(MeuCartContext);
  const { data } = ProductList();

  return (
    <div className="Category-container">
      <CategoriaSlider />
      <div className="Mais-vendidos">
        <h3 className="h2">{valor}</h3>
      </div>

      {/* PRODUTOS  CONTAINERS */}
      <div className="products">
        {data.map((item, index) =>
          item.category === valor ? (
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
                <Link to={`info/${item.id}`} className="buy">
                  Comprar
                </Link>
                <Link onClick={() => addToCart(item.id)}>
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

export default CategoriesPage;
