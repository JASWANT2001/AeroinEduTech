import React from "react";

function DesignOverview() {
  return (
    <>
      <div className="overview-section">
        <div className="text-content">
          <h1>Design &amp; Simulation</h1>
          <h2>Enhance Your Skills in Design and Simulation!</h2>
          <ul>
            <li>
              <span>PROGRAM DURATION</span>{" "}
              <span>15 weeks (Sat & Sun) - 2 Hours of Focused learning</span>
            </li>
            <hr />
            <li>
              <span>TOPIC COVERAGE</span>{" "}
              <span>Mastery CATIA, ANSYS Workbench, Reverse Engineering</span>
            </li>
            <hr />
            <li>
              <span>LEARNING OUTCOME</span>{" "}
              <span>
                Gain In-depth understanding of CATIA, Generative Design
              </span>
            </li>
            <hr />
            <li>
              <span>PROJECT WORK</span>{" "}
              <span>
                Final Year Projects, Design and Simulation Projects &amp; Intern
              </span>
            </li>
            <hr />
            <li>
              <span>APPLICATION TO CAREER</span>{" "}
              <span>Certificate of Completion + Letter of Recommendation</span>
            </li>
          </ul>
        </div>
        <div className="rocket-content">
          <div className="rocket-container">
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/Course%20Content/design_3d.png"
              alt="Design Of Rocket"
              className="rocket"
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignOverview;
