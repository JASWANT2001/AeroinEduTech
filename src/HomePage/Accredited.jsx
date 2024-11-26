import React from "react";
import startuptn from "./Image/startup_tn_logo.png";

function Accredited() {
  return (
    <>
      <section className="accreditation-section">
        <div className="container">
          {/* Recognized Section */}
          <h2 className="text-center mt-5">Accredited and Supported by</h2>
          <div className="row recognized-icons">
            {/* Logo 1 */}
            <div className="col-2 icon-box text-center p-2">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/isro_logo.png?updatedAt=1731906916398"
                alt="ISRO logo - Indian Space Research Organisation"
                className="img-fluid"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>

            {/* Logo 2 */}
            <div className="col-2 icon-box text-center p-2">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/IN-SPACe_Logo.png"
                alt="Recognition 2"
                className="IN-SPACe logo - Indian National Space Promotion and Authorization Center"
              />
            </div>

            {/* Logo 3 */}
            <div className="col-2 icon-box text-center p-2">
              <img
                src={startuptn}
                alt="StartupTN logo - Tamil Nadu Startup and Innovation Mission"
                className="img-fluid"
              />
            </div>

            {/* Logo 4 */}
            <div className="col-2 icon-box text-center p-2">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/t-hub_logo.png?updatedAt=1731906920471"
                alt="T-Hub logo - Technology Innovation Hub for Startups"
                className="img-fluid"
                style={{ height: 60 }}
              />
            </div>

            {/* Logo 5 */}
            <div className="col-2 icon-box text-center p-2">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/logo-minfy.png?updatedAt=1731906917032"
                alt="Minfy logo - Cloud and Digital Transformation Services"
                className="img-fluid"
              />
            </div>

            {/* Logo 6 */}
            <div className="col-2 icon-box text-center p-2">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/aws_logo.webp"
                alt="AWS logo - Amazon Web Services"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accredited;
