import React, { useEffect } from "react";

function CubeSatOverview() {
  return (
    <>
      <div className="overview-section">
        <div className="text-content">
          <h1>Design and development of cubesat</h1>
          <h2>Discover the Future of Space Technology!</h2>
          <ul>
            <li >
              <span>PROGRAM DURATION</span>{" "}
             <span>5 Days Master Class / 4 to 8 Weeks Of Learning</span>
            </li>
            <hr />
            <li >
              <span>TOPIC COVERAGE</span>{" "}
              <span>Intro to Subsystems, Research and development</span>
            </li>
            <hr />
            <li>
              <span>LEARNING OUTCOME</span>{" "}
              <span>Gain In-depth understanding of CubeSat technologies</span>
            </li>
            <hr />
            <li>
              <span>PROJECT WORK</span>{" "}
              <span>
                Hands-on Research, Literature review in CubeSat systems
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

export default CubeSatOverview;
