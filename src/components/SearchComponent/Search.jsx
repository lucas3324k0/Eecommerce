import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import { Link, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { MeuCartContext } from "../../context/CartContext";
import ProductList from "../../hooks/ProductList";

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = `https://fakestoreapi.com/products?${searchParams.toString()}`;
  const { data } = ProductList(url);
  const { addToCart } = useContext(MeuCartContext);

  return (
    <div className="Category-container">
      {/* PRODUTOS CONTAINERS */}
      <div className="products">
        {data.map((item, index) => (
          <div className="product-container" key={index}>
            <div className="Product-img">
              <img src={item.image} alt={item.title} />{" "}
              {/* Adicionado atributo alt */}
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
              <Link
                onClick={() => addToCart(item)}
                aria-label={`Adicionar ${item.title} ao carrinho`}
              >
                <AddShoppingCartIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Search;
