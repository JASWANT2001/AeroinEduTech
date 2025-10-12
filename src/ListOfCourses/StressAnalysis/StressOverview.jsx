import React from "react";

function StressOverview() {
  return (
    <>
      <div className="overview-section">
        <div className="text-content">
          <h1>Design and Failure Analysis of Aerospace Composite Structures</h1>
          <h2></h2>
          <ul>
            <li>
              <span>PROGRAM DURATION</span>{" "}
              <span>5 Days Master Class / 4 to 8 Weeks Of Learning</span>
            </li>
            <hr />
            <li>
              <span>TOPIC COVERAGE</span>{" "}
              <span>Structural Basics, FEM Modeling, Aircraft Structures</span>
            </li>
            <hr />
            <li>
              <span>LEARNING OUTCOME</span>{" "}
              <span>
                In-depth understanding of FEM modeling, &amp; aircraft structure
              </span>
            </li>
            <hr />
            <li>
              <span>PROJECT WORK</span>{" "}
              <span>
                Hands-on Experience in FEM Modeling, Failure Prediction
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
              src="https://ik.imagekit.io/cjh0dpnmu/Course%20Content/stress_analysis_3d.png"
              alt="Stress Analysis"
              className="rocket"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default StressOverview;
