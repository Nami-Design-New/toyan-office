import React from "react";
import AskService from "./AskService";
import img from "../assets/cleintpng.png";
const Clients = () => {
  return (
    <React.Fragment>
      <header className="clients_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>عملاؤنا/</span>نهتم بتلبية احتياجات العملاء من خلال تقديم خدمة
            ذات جودة عالية تمكننا خلق من قيمة دائمة في كل الاتجاهات الممكنة.
          </h2>
        </div>
      </header>
      <main className="clients_gird">
        <div className="client_card">
          <img src={img} alt="" />
        </div>
        <div className="client_card">
          <img src={img} alt="" />
        </div>
        <div className="client_card">
          <img src={img} alt="" />
        </div>
        <div className="client_card">
          <img src={img} alt="" />
        </div>
        <div className="client_card">
          <img src={img} alt="" />
        </div>
        <div className="client_card">
          <img src={img} alt="" />
        </div>
        <div className="client_card">
          <img src={img} alt="" />
        </div>
        <div className="client_card">
          <img src={img} alt="" />
        </div>
        <div className="client_card">
          <img src={img} alt="" />
        </div>
        <div className="client_card">
          <img src={img} alt="" />
        </div>
        <div className="client_card">
          <img src={img} alt="" />
        </div>
        <div className="client_card">
          <img src={img} alt="" />
        </div>
        
        <button title="load more">
          <i className="fas fa-chevron-down" />
        </button>
      </main>
      <AskService />
    </React.Fragment>
  );
};

export default Clients;
