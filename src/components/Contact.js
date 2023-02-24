import React, { useState } from "react";
import axios from "axios";
import News from "./News";
import Map from "./Map";
const Contact = () => {
  const [formData, setFormData] = useState({});
  return (
    <React.Fragment>
      <header className="contact_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>تواصل معنا/</span>نقدم حلولاً متخصصة ومبتكرة، لا تتردد في
            التواصل معنا.
          </h2>
        </div>
      </header>
      <div className="map">
        <div className="form">
          <form action="">
            <input
              required
              type="text"
              name="name"
              placeholder="الاسم"
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              required
              type="email"
              name="email"
              placeholder="البريد الالكتروني"
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="tel"
              name="phone"
              placeholder="رقم الهاتف"
              required
              onChange={e =>
                setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              required
              type="text"
              name="service-type"
              placeholder="نوع الخدمة"
              onChange={e =>
                setFormData({ ...formData, serviceType: e.target.value })}
            />
            <textarea
              name="message"
              placeholder="محتوى رسالتك"
              required
              onChange={e =>
                setFormData({ ...formData, message: e.target.value })}
            />
            <button type="submit">إرسال</button>
          </form>
        </div>
        <Map />
      </div>
      <div className="info">
        <div className="info_card">
          <h4>اتصل بنا</h4>
          <a href="mailto:Omaraltowyan@gmail.com">Omaraltowyan@gmail.com</a>
          <a href="tel:+055 0109 595">+055 0109 595</a>
          <a href="tel:+920 009 685">+920 009 685</a>
        </div>
        <div className="info_card">
          <h4>العنوان</h4>
          <p>
            المنطقة الشرقية ، الدمام، <br /> المملكة العربية السعودية
          </p>
        </div>
        <div className="info_card">
          <h4>ساعات العمل</h4>
          <p>
            السبت – الخميس <br /> 8:00 صباحًا – 8:00 مساءً
          </p>
        </div>
      </div>
      <News />
    </React.Fragment>
  );
};

export default Contact;
