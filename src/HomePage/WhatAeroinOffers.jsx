import React from "react";

function WhatAeroinOffers() {
  return (
    <>
      <section
        className="growth-section"
        data-aos="fade-up"
        data-aos-duration={1500}
      >
        <div className="section-content">
          <div className="growth-icon-container">
            <div className="growth-icon-box">
              <i className="icon-rocket" />
            </div>
            <div className="growth-icon-box">
              <i className="icon-satellite" />
            </div>
            <div className="growth-icon-box">
              <i className="icon-telescope" />
            </div>
            <div className="growth-icon-box">
              <i className="icon-planet" />
            </div>
            <div className="growth-icon-box">
              <i className="icon-astronaut" />
            </div>
            <div className="growth-icon-box">
              <i className="icon-star" />
            </div>
          </div>
          <div className="section-heading">
            <h1 className="section-title">What Aeroin EduTech Offers You?</h1>
            <p className="section-subtitle">
              Bridging the gap between Academics and Real-World Space.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatAeroinOffers;
