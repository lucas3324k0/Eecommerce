const ProductDetail = (prop) => {
  const url = "https://fakestoreapi.com/products/categories/" + category;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fechData = async () => {
      const req = await fetch(url);
      const res = await req.json();
      setData(res);
    };
    fechData();
  }, []);
  console.log(data);
  return { data };
};

ProductDetail("jewelery");

export default ProductDetail;
