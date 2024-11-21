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
        <div
          className="certification-content"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1>Your Certification from Aeroin EduTech</h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
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
        <div
          className="certification-image"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="400"
        >
          <img src="https://ik.imagekit.io/cjh0dpnmu/Course%20Content/cert.png" alt="Sample Certificate" />
        </div>
      </div>
    </>
  );
}

export default CertificationSection;
