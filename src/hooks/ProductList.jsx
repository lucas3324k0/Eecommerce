import { useEffect, useState } from "react";
import Category from "../components/Categorias/Category";

const url = "https://fakestoreapi.com/products";
const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fechData = async () => {
      const req = await fetch(url);
      const res = await req.json();
      setData(res);
    };
    fechData();
  }, []);
  return { data }
};

export default ProductList;
