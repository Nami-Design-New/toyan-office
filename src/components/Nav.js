import React from "react";
import Logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/">الرئيسية</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services/feasibility-study" className="icon">
            خدماتنا <i className="fa-solid fa-caret-down" />
          </NavLink>
          <div className="drobdown">
            <ul>
              <li>
                <Link to="/services/feasibility-study">
                  دراسة جدوى اقتصادية
                </Link>
              </li>
              <li>
                <Link to="/services/legal-advices">استشارات قانونية</Link>
              </li>
              <li>
                <Link to="/services/administrative-advices">
                  استشارات إدارية
                </Link>
              </li>
              <li>
                <Link to="/services/business-services">خدمات الأعمال</Link>
              </li>
              <li>
                <Link to="/services/foreign-investments">
                  الاستثمار الأجنبي
                </Link>
              </li>
              <li>
                <Link to="/services/investment-opportunities">
                  الفرص الاستثمارية
                </Link>
              </li>
              <li>
                <Link to="/services/preperaing-work-plans">
                  إعداد خطط العمل
                </Link>
              </li>
              <li>
                <Link to="/services/feasibility-study-for-financing-agencies">
                  دراسة جدوى للجهات التمويلية
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <NavLink to="/clients">عملاؤنا</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/employment">التوظيف</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/knowlege">المعرفة</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact">اتصل بنا</NavLink>
        </li>
      </ul>
      <div className="search-lang">
        <button>
          <i className="fa-solid fa-magnifying-glass" />
        </button>
        <span />
        <button>EN</button>
      </div>
    </nav>
  );
};

export default Nav;
