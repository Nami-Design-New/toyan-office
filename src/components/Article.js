import React from "react";
import News from "./News";
import { useParams } from "react-router-dom";
import blog from "../assets/blog1.jpg";
const Article = () => {
  let { name } = useParams();
  console.log(name);
  return (
    <React.Fragment>
      <header className="know_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>المعرفة/</span>
          </h2>
        </div>
      </header>
      <div className="blog_holder">
        <div className="article_description">
          <h3>أهمية الوقت في خطة العمل</h3>
          <article>
            أهمية الوقت في خطة العمل, أهمية الوقت في خطة العمل, أهمية الوقتأهمية
            الوقت في خطة العمل, أهمية الوقت في خطة العمل, أهمية الوقتأهمية الوقت
            في خطة العمل, أهمية الوقت في خطة العمل,أهمية الوقت في خطة العمل,
            أهمية الوقت في خطة العمل, أهمية الوقتأهمية الوقت في خطة العمل, أهمية
            الوقت في خطة العمل,أهمية الوقت في خطة العمل, أهمية الوقت في خطة
            العمل, أهمية الوقت في خطة العمل,
          </article>
        </div>
        <div className="article_img">
          <img src={blog} alt="blog" />
        </div>
      </div>
      <News />
    </React.Fragment>
  );
};

export default Article;
