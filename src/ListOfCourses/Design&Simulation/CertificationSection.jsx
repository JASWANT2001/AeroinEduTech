import React from "react";

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
            Upon completing the program, you will receive a certification from
            Aeroin EduTech. This certification demonstrates your expertise in
            advanced design and simulation, making it highly valuable in
            industries like automotive, aerospace, robotics, and mechanical
            engineering. It will enhance your employability and help you stand
            out in roles requiring CAD, FEA, and CFD skills. Additionally,
            you’ll receive separate certificates for each module, showcasing
            your proficiency in specialized tools like CATIA and ANSYS.
          </p>
        </div>
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
