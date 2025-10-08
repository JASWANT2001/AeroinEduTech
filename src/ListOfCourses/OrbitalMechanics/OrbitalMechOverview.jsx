import React, { useEffect } from "react";

function OrbitalMechOverview() {
  return (
    <>
      <div className="overview-section">
        <div className="text-content">
          <h1>Orbital Mechanics and Space Mission Design</h1>
          <h2>Discover the Future of Space Design!</h2>
          <ul>
            <li>
              <span>PROGRAM DURATION</span>{" "}
              <span>5 Days Master Class / 4 to 8 Weeks Of Learning</span>
            </li>
            <hr />
            <li>
              <span>TOPIC COVERAGE</span>{" "}
              <span> Orbit Determination & Propagation (MATLAB/Simulink)</span>
            </li>
            <hr />
            <li>
              <span>LEARNING OUTCOME</span>{" "}
              <span>
                {" "}
                Theoretical mastery of orbital mechanics & space design
              </span>
            </li>
            <hr />
            <li>
              <span>PROJECT WORK</span>{" "}
              <span>
               Research Project: Trajectory Optimization & Space Design

              </span>
            </li>
            <hr />
            <li>
              <span>APPLICATION TO CAREER</span>{" "}
              <span>Exposure to MATLAB/Simulink tools used in aerospace R&D</span>
            </li>
          </ul>
        </div>

        <div className="rocket-content">
          <div className="rocket-container">
            <img
              src="https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/astral-wallpapers-composition-with-galaxy.jpg"
              alt="Orbital Mechanics and Space Mission"
              className="rocket"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrbitalMechOverview;
