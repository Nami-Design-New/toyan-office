import React from "react";
import AskService from './AskService';

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
      <AskService/>
    </React.Fragment>
  );
};

export default Services;
