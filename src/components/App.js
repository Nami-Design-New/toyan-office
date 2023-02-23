import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Services from './Services';
import Clients from "./Clients";
import Employ from "./Employ";
import Knowlege from "./Knowlege";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="app-holder">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="clients" element={<Clients />} />
          <Route path="employment" element={<Employ />} />
          <Route path="knowlege" element={<Knowlege />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
