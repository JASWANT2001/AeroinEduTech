import React, { useEffect } from "react";

function AnsysOverview() {
  return (
    <>
      <div className="overview-section">
        <div className="text-content">
          <h1>High-Speed Aerodynamics & Shockwave Analysis </h1>
          <h2>Discover the Future of Space Technology!</h2>
          <ul>
            <li >
              <span>PROGRAM DURATION</span>{" "}
             <span>5 Days Master Class / 4 to 8 Weeks Of Learning</span>
            </li>
            <hr />
            <li >
              <span>TOPIC COVERAGE</span>{" "}
              <span>Intro to Compressible flow fundamentals, shock waves</span>
            </li>
            <hr />
            <li>
              <span>LEARNING OUTCOME</span>{" "}
              <span> Gain in-depth understanding of high-speed aerodynamics</span>
            </li>
            <hr />
            <li>
              <span>PROJECT WORK</span>{" "}
              <span>
                Hands-on CFD projects: oblique shock simulation and more
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
              src="https://ik.imagekit.io/cjh0dpnmu/Course%20Content/cubesat_3d.png"
              alt="Advanced Rocketry Module"
              className="rocket"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AnsysOverview;
