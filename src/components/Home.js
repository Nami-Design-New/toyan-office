import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import img1 from "../assets/banner1.jpg";
import img2 from "../assets/service1.jpg";
import img3 from "../assets/service2.jpg";
import img4 from "../assets/service3.jpg";
import img5 from "../assets/service4.jpg";
import img6 from "../assets/service5.jpg";
import img7 from "../assets/service6.jpg";
import img8 from "../assets/service7.jpg";
import img9 from "../assets/service8.jpg";
import about from "../assets/about.png";
import ha from "../assets/ha.png";
import me from "../assets/me.png";
import la from "../assets/la.png";
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
            <img src={img2} alt="" />
            <div className="layer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" />
            <div className="layer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="" />
            <div className="layer" />
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
          <div className="service_card">
            <div className="img">
              <img src={img2} alt="feasibility-study" />
            </div>
            <pre>دراسة جدوى اقتصادية</pre>
          </div>
          <div className="service_card">
            <div className="img">
              <img src={img3} alt="legal-advices" />
            </div>
            <pre>استشارات قانونية</pre>
          </div>
          <div className="service_card">
            <div className="img">
              <img src={img4} alt="administrative-advices" />
            </div>
            <pre>استشارات إدارية</pre>
          </div>
          <div className="service_card">
            <div className="img">
              <img src={img5} alt="feasibility-study" />
            </div>
            <pre>خدمات الأعمال</pre>
          </div>
          <div className="service_card">
            <div className="img">
              <img src={img6} alt="feasibility-study" />
            </div>
            <pre>الاستثمار الأجنبي</pre>
          </div>
          <div className="service_card">
            <div className="img">
              <img src={img7} alt="feasibility-study" />
            </div>
            <pre>الفرص الاستثمارية</pre>
          </div>
          <div className="service_card">
            <div className="img">
              <img src={img8} alt="feasibility-study" />
            </div>
            <pre>إعداد خطط العمل</pre>
          </div>
          <div className="service_card">
            <div className="img">
              <img src={img9} alt="feasibility-study" />
            </div>
            <pre>دراسة جدوى للجهات التمويلية</pre>
          </div>
        </div>
      </section>
      <section className="ask_service">
        <div className="ask_descrip">
          <h3>مراحل طلب الخدمة</h3>
          <ol>
            <li>سيتم التواصل مع مقدم طلب الخدمة من قبل خدمة العملاء.</li>
            <li>
              سيقوم ممثلي خدمة العملاء بالحصول بيانات ومعلومات الخدمة من خلالكم
              ثم نقدم لكم العرض الفني والمالي للخدمة.
            </li>
            <li>
              {" "}بعد موافقتكم على العرض المالي والفني يتم تحويل العرض الفني
              للقسم المختص للبدء في تنفيذه فورا.
            </li>
            <li>
              {" "}بعد اعداد الخدمة من قبل القسم المختص يتم التدقيق والمراجعة.
            </li>
            <li>
              من ثم يتم ارسالها للعميل، وتجري عملية خدمة العملاء ما بعد البيع.
            </li>
          </ol>
        </div>
        <div className="ask_form">
          <h3>ارسل طلبك الان</h3>
          <form action="">
            <input type="text" name="name" placeholder="الاسم" required />
            <input
              type="email"
              name="email"
              placeholder="البريد الالكتروني"
              required
            />
            <input type="tel" name="phone" placeholder="رقم الهاتف" required />
            <input
              type="text"
              name="service-type"
              placeholder="نوع الخدمة"
              required
            />
            <textarea name="message" placeholder="محتوى رسالتك" required />
            <button type="submit">إرسال</button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
