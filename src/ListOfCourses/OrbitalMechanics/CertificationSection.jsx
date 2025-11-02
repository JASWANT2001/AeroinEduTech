import React, { useEffect } from "react";

function CertificationSection() {
  return (
    <>
      <div className="certification-section">
        <div className="certification-content">
          <h1>
            Your Certification from{" "}
            <span className="highlighted-text">Aeroin EduTech</span>
          </h1>
          <p>
            Achieve recognition for your work with a Certificate of Completion
            in Orbital Mechanics and Space Mission Design. Participants who
            successfully complete the research phase will gain personalized
            mentorship on transforming their work into impactful presentations
            or publishable papers. Exceptional performers may also be
            recommended for letters of recognition, further strengthening their
            profile for higher studies, research opportunities, or career
            advancement.
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
