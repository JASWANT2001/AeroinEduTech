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
        <div
          className="certification-image"
          data-aos="fade-left"
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
