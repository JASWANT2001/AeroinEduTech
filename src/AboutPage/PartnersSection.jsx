import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function PartnersSection() {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with duration
  }, []);

  return (
    <>
      <section className="accreditation-section">
        <div className="container">
          {/* Recognized Section */}
          <h2 className="text-center" data-aos="fade-up" data-aos-delay="200">
            Esteemed Partners &amp; Collaborations
          </h2>
          <div className="row recognized-icons">
            <div
              className="col-2 icon-box text-center p-2"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/isro_logo.png?updatedAt=1731906916398"
                alt="ISRO - Indian Space Research Organisation Partner"
                className="img-fluid"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
            <div
              className="col-2 icon-box text-center p-2"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/smac_logo.png?updatedAt=1731906920261"
                alt="SMAC - Space Manufacturing and Collaboration Partner"
                className="img-fluid"
                style={{ maxHeight: "100%", maxWidth: "95%" }}
              />
            </div>
            <div
              className="col-2 icon-box text-center p-2"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/cosmo_logo.webp?updatedAt=1731906915551"
                alt="Cosmo Foundation - Space Education Partner"
                className="img-fluid"
                style={{ maxHeight: "100%", maxWidth: "92%" }}
              />
            </div>
            <div
              className="col-2 icon-box text-center p-2"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/labrat.png?updatedAt=1731906916726"
                alt="Labrat Research Institute - Innovation and Technology Partner"
                className="img-fluid"
                style={{ maxHeight: "95%", maxWidth: "90%" }}
              />
            </div>
            <div
              className="col-2 icon-box text-center p-2"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/file%20(4).png?updatedAt=1731906915553"
                alt="Partner Institution - Advanced Space Tech Research"
                className="img-fluid"
                style={{ maxHeight: 110, maxWidth: "100%" }}
              />
            </div>
            <div
              className="col-2 icon-box text-center p-2"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/file%20(3).png"
               alt="Partner Collaboration - Aerospace Engineering"
                className="img-fluid"
                style={{ maxHeight: "90%", maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PartnersSection;
