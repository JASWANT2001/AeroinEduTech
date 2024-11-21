import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CertificationSection() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 100 });
  }, []);

  return (
    <>
      <div
        className="certification-section"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="200"
      >
        <div className="certification-content">
          <h1
            className="certification-title"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            Your Certification from Aeroin EduTech
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
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
        <div
          className="certification-image"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          <img src="https://ik.imagekit.io/cjh0dpnmu/Course%20Content/cert.png" alt="Sample Certificate" />
        </div>
      </div>
    </>
  );
}

export default CertificationSection;
