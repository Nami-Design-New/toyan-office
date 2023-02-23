import React from "react";
import AskService from "./AskService";

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
        <div className="client_card" />
        <div className="client_card" />
        <div className="client_card" />
        <div className="client_card" />
        <div className="client_card" />
        <div className="client_card" />
        <div className="client_card" />
        <div className="client_card" />
        <div className="client_card" />
        <div className="client_card" />
        <div className="client_card" />
        <div className="client_card" />
      </main>
      <AskService />
    </React.Fragment>
  );
};

export default Clients;
