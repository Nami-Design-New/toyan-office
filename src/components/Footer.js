import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/footer_logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer_grid">
        <div className="col logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="col">
          <h3>من نحن</h3>
          <p>
            نقــدم الاستشــارات الإداريـــة والاقتصــاديــة والتسويقية والمـالية
            للمنظمــات الحكــومية والخاصة والأفراد. <br /> خدماتنــا
            للاستشــارات الإداريـــة هــي الأداة المساعدة للشركات والمؤسسات في
            مراحل التـأسيس والنمو، والتطوير إلى النجاح، ووضع خطط لتحسين وتطوير
            الإداء في مجال الإدارة، والعلاقـات العامـة، والموارد البشرية،
            والتسويق.
          </p>
        </div>
        <div className="col services">
          <h3>خدماتنا</h3>
          <ul>
            <li>
              <Link to="/services">دراسة جدوى اقتصادية</Link>
            </li>
            <li>
              <Link to="/services/legal-advices">استشارات قانونية</Link>
            </li>
            <li>
              <Link to="/services/administrative-advices">استشارات إدارية</Link>
            </li>
            <li>
              <Link to="/services/business-services">خدمات الأعمال</Link>
            </li>
            <li>
              <Link to="/services/foreign-investments">الاستثمار الأجنبي</Link>
            </li>
            <li>
              <Link to="/services/investment-opportunities">
                الفرص الاستثمارية
              </Link>
            </li>
            <li>
              <Link to="/services/preperaing-work-plans">إعداد خطط العمل</Link>
            </li>
            <li>
              <Link to="/services/feasibility-study-for-financing-agencies">
                دراسة جدوى للجهات التمويلية
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="line" />
      <div className="contact">
        <h4>للتواصل:</h4>
        <a href="tel:+055 0109 595">055 0109 595</a>
        <a href="tel:+920 009 685">920 009 685</a>
        <a href="mailto:Omaraltowyan@gmail.com">Omaraltowyan@gmail.com</a>
        <p>
          المنطقة الشرقية ، الدمام، <br /> المملكة العربية السعودية
        </p>
      </div>
    </footer>
  );
};

export default Footer;
