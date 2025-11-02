import React, { useEffect } from "react";

function CertificationSection() {
  return (
    <>
      <div className="certification-section">
        <div className="certification-content">
          {/* Title with animation */}
          <h1>
            Your Certification from{" "}
            <span className="highlighted-text">Aeroin EduTech</span>
          </h1>
          {/* Description with animation */}
          <p className="certification-description">
            Upon completing the program, participants will receive a Certification from Aeroin EduTech
            This certification validates your expertise in robotics simulation and space applications, highly valued across aerospace, defense, and automation industries.
            You’ll also receive individual project deliverables, including your robotic arm simulation file (MATLAB) and mobile robot model (Webots), demonstrating your practical competency.
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
