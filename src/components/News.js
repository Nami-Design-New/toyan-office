import React from "react";
import vector from "../assets/Vector.png";
const News = () => {
  return (
    <section className="news">
      <div className="label">
        <p>اشترك في النشرة البريدية ليصلك أفضل العروض من مكتب عمر الطويان</p>
      </div>
      <form action="">
        <input
          type="email"
          required
          name="email"
          placeholder="البـريد الإلكتروني"
        />
        <button type="submit">
          اشتراك<img src={vector} alt="send" />
        </button>
      </form>
    </section>
  );
};

export default News;
