import React, { useRef } from "react";
import AskService from "./AskService";
import { NavLink } from "react-router-dom";
const Services = ({ services }) => {
  const title = useRef(null);
  // let pathLocation = useParams().name;
  // if (pathLocation === "feasibility-study") {
  //   console.log("ok");
  //   title.current.innerHTML = "دراسة جدوى اقتصادية";
  // }
  return (
    <React.Fragment>
      <header className="services_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>خدماتنا/</span>
            <p ref={title} />
          </h2>
        </div>
      </header>
      <div className="services_container">
        <aside>
          <ul>
            {services.map(ser => {
              return (
                <li key={ser._id}>
                  <NavLink to={`/services/${ser.title.en}`}>
                    {ser.title.ar}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </aside>
        <main>
          <p>
            تعتبر دراسة الجدوى الاقتصـاديــة من الخطوات اللازمة لبدايــة مشروعك،
            فهي <br /> تمنحك القرار الاستثماري الصحيح.
          </p>
          <p>
            من هذا المنطلق، نسعـى لتقديم دراسات جدوى تفصيلية تدعم نجاح مشروعك.
          </p>
        </main>
      </div>
      <AskService />
    </React.Fragment>
  );
};

export default Services;
