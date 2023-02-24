import React, { useState } from "react";
import vector from "../assets/Vector.png";
import axios from "axios";
import { toast } from "react-toastify";
const News = () => {
  const [formData, setFormData] = useState({});
  let headersList = {
    Accept: "/"
  };
  let requestOptions = {
    url: "https://el-twyan.onrender.com/api/v1/news-letter",
    method: "POST",
    headers: headersList,
    data: formData
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .request(requestOptions)
      .then(() => {
        document.getElementById("news_form").reset();
        toast.success("تم الاشتراك بنجاح");
      })
      .catch(err => {
        console.error(err);
        document.getElementById("news_form").reset();
        toast.error("حاول مره اخرى");
      });
  };
  return (
    <section className="news">
      <div className="label">
        <p>اشترك في النشرة البريدية ليصلك أفضل العروض من مكتب عمر الطويان</p>
      </div>
      <form id="news_form" onSubmit={handleSubmit}>
        <input
          type="email"
          required
          name="email"
          placeholder="البـريد الإلكتروني"
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        <button type="submit">
          اشتراك<img src={vector} alt="send" />
        </button>
      </form>
    </section>
  );
};

export default News;
