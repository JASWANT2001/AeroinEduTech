import React, { useEffect } from "react";

function CertificationSection() {
  return (
    <>
      <div className="certification-section">
        <div className="certification-content">
          {/* Title with animation */}
          <h1 className="certification-title">
            Your Certification from Aeroin EduTech
          </h1>
          {/* Description with animation */}
          <p className="certification-description">
            Achieve recognition for your dedication and hard work in rocketry
            with a prestigious certificate that highlights your skills and
            accomplishments in the field. This certification not only showcases
            your expertise to potential employers but also helps advance your
            career. Additionally, you’ll join a network of passionate
            professionals in the aerospace industry, opening doors to new
            opportunities and collaborations.
          </p>
        </div>

        {/* Image with animation */}
        <div className="certification-image">
          <img
            src="https://ik.imagekit.io/cjh0dpnmu/Course%20Content/cert.png"
            alt="Aeroin EduTech Sample Certificate"
          />
        </div>
      </div>
    </>
  );
}

export default CertificationSection;
