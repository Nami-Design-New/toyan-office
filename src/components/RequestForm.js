import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const RequestForm = () => {
  const button = useRef(null);
  const hiddenArea = useRef(null);
  const [formData, setFormData] = useState({});
  const [toogle, setToogle] = useState(false);
  let headersList = {
    Accept: "/"
  };
  let requestOptions = {
    url: "https://el-twyan.onrender.com/api/v1/requests",
    method: "POST",
    headers: headersList,
    data: formData
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (toogle === false) {
      axios
        .request(requestOptions)
        .then(() => {
          setToogle(true);
          hiddenArea.current.style.display = "flex";
          button.current.innerHTML = "طلب خدمة أخرى";
        })
        .catch(err => {
          console.error(err);
          document.getElementById("form").reset();
          toast.error("حاول مره اخرى");
        });
    } else {
      document.getElementById("form").reset();
      hiddenArea.current.style.display = "none";
      button.current.innerHTML = "إرسال";
    }
  };
  return (
    <form className="sendmessage" id="form" onSubmit={handleSubmit}>
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
        onChange={e => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="tel"
        name="phone"
        placeholder="رقم الهاتف"
        required
        onChange={e => setFormData({ ...formData, phone: e.target.value })}
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
        onChange={e => setFormData({ ...formData, message: e.target.value })}
      />
      <div className="submit_area">
        <div className="submited" ref={hiddenArea}>
          <span>تم إرسال الطلب بنجاح</span>
        </div>
        <button ref={button} type="submit">
          إرسال
        </button>
      </div>
    </form>
  );
};

export default RequestForm;
