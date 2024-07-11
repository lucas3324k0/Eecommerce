import React, { useEffect, useState } from "react";

const url = 'https://fakestoreapi.com/carts'
const GetCart = () => {
    const [ProductCart, setProductCart] = useState([])

    useEffect(() => {
        const GetData = async () => {
            const req = await fetch(url)
            const res = await req.json()
            setProductCart(res)
        }
        GetData()
    }, [url])
    
  return { ProductCart };
};

export default GetCart;
