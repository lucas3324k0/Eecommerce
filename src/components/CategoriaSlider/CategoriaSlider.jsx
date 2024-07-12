import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import { Link } from "react-router-dom";
import "./CategoriaSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

export const CategoriaSlider = () => {
  const { setValor } = useContext(CategoryContext);
  const [products, setProducts] = useState([]);
  const [slider, setSlider] = useState(1); // Valor inicial

  useEffect(() => {
    const updateSlider = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth < 800) {
        setSlider(1);
      } else {
        setSlider(4);
      }
    };
    
    window.addEventListener("resize", updateSlider);

    updateSlider();

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/categories`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="Categories">
      {products.length > 0 ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={slider}
          pagination={{ clickable: true }}
          navigation={true}
          slidesPerGroup={1}
          modules={[Navigation, Pagination]}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                to={"/categorias"}
                className="title-categories"
                onClick={() => setValor(item)}
              >
                <div className="title-categories">
                  <h2>{item}</h2>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
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
  );
};
