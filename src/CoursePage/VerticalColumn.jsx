import React from "react";

function VerticalColumn() {
  return (
    <>
      <section className="aeroin-edutech">
        <div className="box attractive-box">
          <video autoPlay="" muted="" loop="" className="box-video">
            <source
              src="https://ik.imagekit.io/cjh0dpnmu/1474162_Education_People_3840x2160.mp4?updatedAt=1731894881060"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="box">
          <i className="fas fa-industry icon" />
          <h3>Industry Insights</h3>
          <p>
            Our programs are designed with input from leading aerospace
            companies to ensure industry relevance.
          </p>
        </div>
        <div className="box">
          <i className="fas fa-user-graduate icon" />
          <h3>Academic Excellence</h3>
          <p>
            Our faculty comprises renowned experts from top universities,
            bridging the gap between theory and practice.
          </p>
        </div>
        <div className="box">
          <i className="fas fa-handshake icon" />
          <h3>Collective Tactic</h3>
          <p>
            We foster strong partnerships with industry and academia to provide
            holistic learning experiences.
          </p>
        </div>
      </section>
    </>
  );
}

export default VerticalColumn;
