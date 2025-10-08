import React, { useEffect } from "react";

function DronesOverview() {
  return (
    <>
      <div className="overview-section">
        <div className="text-content">
          <h1>Introduction to Drones and UAV </h1>
          <h2>Discover the Future of Drone Technology!</h2>
          <ul>
            <li >
              <span>PROGRAM DURATION</span>{" "}
             <span>5 Days Master Class / 4 to 8 Weeks Of Learning</span>
            </li>
            <hr />
            <li >
              <span>TOPIC COVERAGE</span>{" "}
              <span> UAV classifications, multirotor sizing & components</span>
            </li>
            <hr />
            <li>
              <span>LEARNING OUTCOME</span>{" "}
              <span>  Gain practical skills in component selection & CAD modelling</span>
            </li>
            <hr />
            <li>
              <span>PROJECT WORK</span>{" "}
              <span>
                CAD model of a multirotor and Simulink plant model with code
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
              src="https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/drone-propeller-captures-mid-air-sunset-with-expertise-generated-by-ai.jpg"
              alt="Intro to Drones and UAV"
              className="rocket"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DronesOverview;
