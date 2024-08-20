import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderBig.css";
import "swiper/swiper-bundle.css";

// image
import primeira from "../../assets/sliderGrande/image.png";
import segunda from "../../assets/sliderGrande/image copy 2.png";
import terceira from "../../assets/sliderGrande/image copy.png";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";

const SliderBIg = () => {
  const [slider, setSlider] = useState(1);
  const data = [
    { id: "1", image: primeira },
    { id: "2", image: segunda },
    { id: "3", image: terceira },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerHeight < 800) {
        setSlider(1);
      } else {
        setSlider(2);
      }
    }

    handleResize();
  }, []);

  return (
    <div className="SliderBig">
      <div className="sliderBig-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={slider}
          pagination={{ clickable: true }}
          navigation={true}
          slidesPerGroupAuto={true}
          modules={[Navigation, Pagination]} // Adicione os módulos aqui
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="imagem" className="Slide-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderBIg;
