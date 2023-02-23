import React from "react";
import AskService from "./AskService";
import { NavLink } from "react-router-dom";
const Services = () => {
  return (
    <React.Fragment>
      <header className="services_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>خدماتنا/</span>
          </h2>
        </div>
      </header>
      <div className="services_container">
        <aside>
          <ul>
            <li>
              <NavLink to="/services">دراسة جدوى اقتصادية</NavLink>
            </li>
            <li>
              <NavLink to="/services/legal-advices">استشارات قانونية</NavLink>
            </li>
            <li>
              <NavLink to="/services/administrative-advices">
                استشارات إدارية
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/business-services">خدمات الأعمال</NavLink>
            </li>
            <li>
              <NavLink to="/services/foreign-investments">
                الاستثمار الأجنبي
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/investment-opportunities">
                الفرص الاستثمارية
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/preperaing-work-plans">
                إعداد خطط العمل
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/feasibility-study-for-financing-agencies">
                دراسة جدوى للجهات التمويلية
              </NavLink>
            </li>
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
