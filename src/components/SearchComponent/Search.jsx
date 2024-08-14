import { useState, useEffect, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import { MeuCartContext } from "../../context/CartContext";
import ProductList from "../../hooks/ProductList";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("name") || "";
  const url = "https://fakestoreapi.com/products";
  const { data, loading, error } = ProductList(url);
  const { addToCart } = useContext(MeuCartContext);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = data.filter(item =>
        item.title.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredData(filtered);
    }
  }, [data, query]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar produtos: {error.message}</p>;

  return (
    <div className="Category-container">
      {/* PRODUTOS CONTAINERS */}
      <div className="products">
        {filteredData.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          filteredData.map((item) => (
            <div className="product-container" key={item.id}>
              <div className="Product-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="product-info">
                <h2>{item.title}</h2>
                <p>
                  <strong>R$ {item.price.toFixed(2)}</strong>
                </p>
                <Rating
                  name={`rating-${item.id}`}
                  value={item.rating.rate}
                  readOnly
                  precision={0.5}
                  className="stars"
                />
              </div>
              <div className="product-button">
                <Link to={`/categorias/info/${item.id}`} className="buy">
                  Ver detalhes
                </Link>
                <button
                  onClick={() => addToCart(item)}
                  aria-label={`Adicionar ${item.title} ao carrinho`}
                  className="add-to-cart-button"
                >
                  <AddShoppingCartIcon />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
