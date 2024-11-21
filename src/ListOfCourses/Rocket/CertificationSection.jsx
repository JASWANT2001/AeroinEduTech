import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CertificationSection() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      offset: 100, // Offset from the original trigger point
      easing: "ease-out", // Easing animation type
      once: true, // Animate only once when scrolled into view
    });
  }, []);

  return (
    <>
      <div className="certification-section">
        <div className="certification-content">
          {/* Title with animation */}
          <h1
            className="certification-title"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Your Certification from Aeroin EduTech
          </h1>
          {/* Description with animation */}
          <p
            className="certification-description"
            data-aos="fade-up"
            data-aos-delay="300"
          >
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
        <div
          className="certification-image"
          data-aos="fade-up"
          data-aos-delay="600"
        >
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
