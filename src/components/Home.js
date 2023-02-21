import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import img1 from "../assets/banner1.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.jpg";
const Home = () => {
  return (
    <React.Fragment>
      <header className="header-slider">
        <Swiper
          autoplay={{
            delay: 3000
          }}
          pagination={{
            clickable: true
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <div className="layer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <div className="layer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <div className="layer" />
          </SwiperSlide>
        </Swiper>
      </header>
    </React.Fragment>
  );
};

export default Home;
