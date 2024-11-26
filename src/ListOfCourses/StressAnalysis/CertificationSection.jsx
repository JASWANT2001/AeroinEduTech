import React from "react";

function CertificationSection() {
  return (
    <>
      <div className="certification-section">
        <div className="certification-content">
          <h1 className="certification-title">
            Your Certification from Aeroin EduTech
          </h1>
          <p>
            Upon successful completion of this comprehensive program,
            participants will receive certification that validates their
            understanding of aerospace structural analysis principles. This
            certification signifies proficiency in analyzing structural
            components, understanding material behavior, and applying FEM
            modeling techniques in aerospace applications. It not only enhances
            technical skills but also strengthens the participant’s industry
            credibility, supporting career advancement in aerospace engineering
            and related fields.
          </p>
        </div>
        <div className="certification-image">
          <img
            src="https://ik.imagekit.io/cjh0dpnmu/Course%20Content/cert.png"
            alt="Sample Certificate"
          />
        </div>
      </div>
    </>
  );
}

export default CertificationSection;
