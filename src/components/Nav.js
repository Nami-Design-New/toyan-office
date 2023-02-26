import React, { useRef, useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const Nav = ({ services }) => {
  const nav = useRef(null);
  const drop = useRef(null);
  const search = useRef(null);
  const [toggle, setToggle] = useState(false);
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
  const handleclick = () => {
    if (toggle === false) {
      search.current.style.width = "150px";
      setToggle(true);
    } else {
      search.current.style.width = "0";
      setToggle(false);
    }
  };
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
            to={`/services/`}
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
              {services.map(ser => {
                return (
                  <li key={ser._id}>
                    <Link to={`/services/${ser.title.en}`}>
                      {ser.title.ar}
                    </Link>
                  </li>
                );
              })}
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
        <input type="text" placeholder="ابحث عن خدمه" ref={search} />
        <button onClick={handleclick}>
          <i className="fa-solid fa-magnifying-glass" />
        </button>
        <span />
        <button>EN</button>
      </div>
    </nav>
  );
};

export default Nav;
