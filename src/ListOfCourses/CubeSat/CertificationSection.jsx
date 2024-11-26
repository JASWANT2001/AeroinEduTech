import React, { useEffect } from "react";

function CertificationSection() {
  return (
    <>
      <div className="certification-section">
        <div className="certification-content">
          <h1>Your Certification from Aeroin EduTech</h1>
          <p>
            Achieve recognition for your dedication and hard work in CubeSat
            technologies with a prestigious certificate that highlights your
            skills and accomplishments in this innovative field. This
            certification not only showcases your expertise to potential
            employers but also helps advance your career. Additionally, you’ll
            join a network of passionate professionals in the aerospace
            industry, opening doors to new opportunities and collaborations in
            satellite development and space exploration.
          </p>
        </div>
        <div className="certification-image">
          <img
            src="https://ik.imagekit.io/cjh0dpnmu/Course%20Content/cert.png"
            alt="Aeroin EduTech - Sample Certificate"
          />
        </div>
      </div>
    </>
  );
}

export default CertificationSection;
