import { useEffect, useState } from "react";

const ProductList = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fechData = async () => {
      const req = await fetch(url);
      const res = await req.json();
      setData(res);
    };
    fechData();
  }, [url]);
  return { data };
};

export default ProductList;
