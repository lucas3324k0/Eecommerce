import { useContext, useLayoutEffect, useState } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import { Link } from "react-router-dom";
import "./CategoriaSlider.css";

export const CategoriaSlider = () => {
  const [products, setProducts] = useState([]);
  const { valor, setValor } = useContext(CategoryContext);

  useLayoutEffect(() => {
    const ApiCategories = () => {
      fetch(`https://fakestoreapi.com/products/categories`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProducts(data);
        });
    };
    ApiCategories();
  }, []);

  return (
    <>
      <div className="Categories">
        {products.length > 1 ? (
          products.map((item) => (
            <div key={item.id}>
              <Link
                onClick={() => setValor(item)}
                className="title-categories"
                to={"/categorias"}
              >
                <div className="title-categories">
                  <h2>{item}</h2>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <h1>Aguarde...</h1>
          </div>
        )}
      </div>
    </>
  );
};
