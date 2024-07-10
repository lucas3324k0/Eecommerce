import React from "react";
import SliderBIg from "../../components/sliderGrande/SliderBIg";
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import Category from "../../components/Categorias/Category";

export const Home = () => {
  return <div className="Home-container">
    <SliderBIg />
    <Category />
  </div>;
};
