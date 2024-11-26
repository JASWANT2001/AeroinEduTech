import React, { useEffect } from "react";

function PartnersSection() {
  return (
    <>
      <section className="accreditation-section">
        <div className="container">
          {/* Recognized Section */}
          <h2 className="text-center">
            Esteemed Partners &amp; Collaborations
          </h2>
          <div className="row recognized-icons">
            <div className="col-2 icon-box text-center p-2">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/isro_logo.png?updatedAt=1731906916398"
                alt="ISRO - Indian Space Research Organisation Partner"
                className="img-fluid"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
            <div className="col-2 icon-box text-center p-2">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/smac_logo.png?updatedAt=1731906920261"
                alt="SMAC - Space Manufacturing and Collaboration Partner"
                className="img-fluid"
                style={{ maxHeight: "100%", maxWidth: "95%" }}
              />
            </div>
            <div className="col-2 icon-box text-center p-2">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/cosmo_logo.webp?updatedAt=1731906915551"
                alt="Cosmo Foundation - Space Education Partner"
                className="img-fluid"
                style={{ maxHeight: "100%", maxWidth: "92%" }}
              />
            </div>
            <div className="col-2 icon-box text-center p-2">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/labrat.png?updatedAt=1731906916726"
                alt="Labrat Research Institute - Innovation and Technology Partner"
                className="img-fluid"
                style={{ maxHeight: "95%", maxWidth: "90%" }}
              />
            </div>
            <div className="col-2 icon-box text-center p-2">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/RFI-Logo.png"
                alt="RFI - Space Technology Partner"
                className="img-fluid"
                style={{ maxHeight: 110, maxWidth: "100%" }}
              />
            </div>
            <div className="col-2 icon-box text-center p-2">
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
