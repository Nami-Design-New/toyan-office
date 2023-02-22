import React, { useRef } from "react";
import Logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
const Nav = () => {
  const drop = useRef(null);
  const nav = useRef(null);
  const handlemove = () => {
    drop.current.style.height = "270px";
  };
  const handleLeave = () => {
    drop.current.style.height = "0px";
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      nav.current.classList.add("active");
    } else {
      nav.current.classList.remove("active");
    }
  });
  return (
    <nav ref={nav}>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            الرئيسية
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/services/feasibility-study"
            onMouseMove={handlemove}
            onMouseLeave={handleLeave}
            className="icon nav-link"
          >
            خدماتنا <i className="fa-solid fa-caret-down" />
          </NavLink>
          <div
            ref={drop}
            onMouseMove={handlemove}
            onMouseLeave={handleLeave}
            className="drobdown"
          >
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
          <NavLink className="nav-link" to="/clients">
            عملاؤنا
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/employment">
            التوظيف
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/knowlege">
            المعرفة
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            اتصل بنا
          </NavLink>
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
