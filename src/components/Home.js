import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import News from "./News";
import ha from "../assets/ha.png";
import me from "../assets/me.png";
import la from "../assets/la.png";
import about from "../assets/about.png";

import img1 from "../assets/banner1.jpg";
import img2 from "../assets/service1.jpg";
import img3 from "../assets/service2.jpg";
import img4 from "../assets/service3.jpg";
import img5 from "../assets/service4.jpg";
import img6 from "../assets/service5.jpg";
import img7 from "../assets/service6.jpg";
import img8 from "../assets/service7.jpg";
import img9 from "../assets/service8.jpg";
import img10 from "../assets/client1.png";
import img11 from "../assets/client2.png";
import img12 from "../assets/client3.png";
import img13 from "../assets/client4.png";
import img14 from "../assets/client5.png";
import AskService from "./AskService";

const Home = () => {
  return (
    <React.Fragment>
      <header className="header-slider">
        <Swiper
          autoplay={{
            delay: 5000
          }}
          pagination={{
            clickable: true
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img2} alt="" />
            <div className="layer" />
            <div className="decription">
              <p>
                مكتب عمر الطويـان للاستشـارات الإداريـة حاصل على الترخيص المهني
                رقم 15384.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" />
            <div className="layer" />
            <div className="decription">
              <p>نسعى للمشاركة في تحقيق رؤية المملكة 2030.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="" />
            <div className="layer" />
            <div className="decription">
              <p>ندعم رواد الأعمال حتى الاحتراف</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </header>
      <section className="about">
        <div className="about-flex">
          <div className="description">
            <span>من نحن</span>
            <h1>مكتب عمر الطويـان للاستشـارات الإداريـة</h1>
            <p>
              الحــاصــل علــى التــرخيــص المـهنــي رقــم 15384، نقدم
              الاستشارات الإداريـة والاقتصاديـة والتسويقية والمالية للمنظمات
              الحكـومية والخاصة والأفراد. خدماتنـا للاستشـارات الإداريـة هي
              الأداة المسـاعدة للشركات والمؤسسات في مراحل التأسـيس والنـمو،
              والتطـوير إلـى النجــاح، ووضع خطط لتحسين وتطوير الإداء في مجال
              الإدارة، والعلاقات العامة، والموارد البشرية، والتسويق.
            </p>
          </div>
          <div className="wrapper">
            <img src={about} alt="about" />
          </div>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">
              <img src={la} alt="vision" />
            </div>
            <h2>رؤيتنا</h2>
            <p className="cen">
              مكتب إقليمي رائد فـي الاستشــارات الإداريــة والتطوير يرشد قرارات
              المستفيدين بآراء الخبراء والوصول إلــى المفهوم الشــامــل لخدمــات
              الاستشـارات والحـلول الإداريــة والاستشـاريــة المبنية علـى الخبرة
              وتقديم أفضل الممارسات العالمية.
            </p>
          </div>
          <div className="about-card">
            <div className="card-icon">
              <img src={me} alt="message" />
            </div>
            <h2>رسالتنا</h2>
            <p className="cen-p">
              تقديم خدمات تدريبية، واستشارات إدارية احترافية، وحلول إبداعية
              بجودة عالمية.
            </p>
          </div>
          <div className="about-card">
            <div className="card-icon">
              <img src={ha} alt="value" />
            </div>
            <h2>قيمنا</h2>
            <p className="cen-p">
              الالتزام والمسؤولية <br /> الأمانة والمصداقية <br /> الجودة
              والمهنية
            </p>
          </div>
        </div>
      </section>
      <section className="services">
        <h2>خدمتنا</h2>
        <div className="services_grid">
          <Link to="/services/feasibility-study" className="service_card">
            <div className="img">
              <img loading="lazy" src={img2} alt="feasibility-study" />
            </div>
            <pre>دراسة جدوى اقتصادية</pre>
          </Link>
          <Link to="/services/legal-advices" className="service_card">
            <div className="img">
              <img loading="lazy" src={img3} alt="legal-advices" />
            </div>
            <pre>استشارات قانونية</pre>
          </Link>
          <Link to="/services/administrative-advices" className="service_card">
            <div className="img">
              <img loading="lazy" src={img4} alt="administrative-advices" />
            </div>
            <pre>استشارات إدارية</pre>
          </Link>
          <Link to="/services/business-services" className="service_card">
            <div className="img">
              <img loading="lazy" src={img5} alt="feasibility-study" />
            </div>
            <pre>خدمات الأعمال</pre>
          </Link>
          <Link to="/services/foreign-investments" className="service_card">
            <div className="img">
              <img loading="lazy" src={img6} alt="feasibility-study" />
            </div>
            <pre>الاستثمار الأجنبي</pre>
          </Link>
          <Link to="/investment-opportunities" className="service_card">
            <div className="img">
              <img loading="lazy" src={img7} alt="feasibility-study" />
            </div>
            <pre>الفرص الاستثمارية</pre>
          </Link>
          <Link to="/services/preperaing-work-plans" className="service_card">
            <div className="img">
              <img loading="lazy" src={img8} alt="feasibility-study" />
            </div>
            <pre>إعداد خطط العمل</pre>
          </Link>
          <Link
            to="/services/feasibility-study-for-financing-agencies"
            className="service_card"
          >
            <div className="img">
              <img loading="lazy" src={img9} alt="feasibility-study" />
            </div>
            <pre>دراسة جدوى للجهات التمويلية</pre>
          </Link>
        </div>
      </section>
      <AskService />
      <section className="clients">
        <h3>عملاؤنا</h3>
        <Swiper
          pagination={{
            clickable: true
          }}
          navigation={true}
          slidesPerView={3}
          cssMode={true}
          spaceBetween={90}
          className="mySwiper"
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
        >
          <SwiperSlide className="swiper_card">
            <img src={img10} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper_card">
            <img src={img11} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper_card">
            <img src={img12} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper_card">
            <img src={img13} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper_card">
            <img src={img14} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper_card">
            <img src={img10} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper_card">
            <img src={img11} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper_card">
            <img src={img12} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper_card">
            <img src={img13} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper_card">
            <img src={img14} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
      <News />
    </React.Fragment>
  );
};

export default Home;
