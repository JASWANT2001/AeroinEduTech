import React from "react";

function SpaceRoboticsOverview() {
  return (
    <>
      <div className="overview-section">
        <div className="text-content">
          <h1>Introduction to Space Robotics</h1>
          <h2>From Kinematics to Simulation</h2>
          <ul>
            <li>
              <span>PROGRAM DURATION</span>{" "}
              <span>5 Days Master Class / 4 to 8 Weeks Of Learning</span>
            </li>
            <hr />
            <li>
              <span>TOPIC COVERAGE</span>{" "}
              <span>Fundamentals of Robotics, Kinematics, Mobile Robots</span>
            </li>
            <hr />
            <li>
              <span>LEARNING OUTCOME</span>{" "}
              <span>Hands-on understanding of robotic manipulators, mobile robots</span>
            </li>
            <hr />
            <li>
              <span>PROJECT WORK</span>{" "}
              <span>
                Simulation of Arm & Mobile Rover Models using MATLAB and Webots
              </span>
            </li>
            <hr />
            <li>
              <span>CAREER ADVANCEMENT</span>{" "}
              <span>Certificate of Completion + Letter of Recommendation</span>
            </li>
          </ul>
        </div>
        <div className="rocket-content">
          <div className="rocket-container">
            <img
              src="https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/close-up-home-made-robot.jpg"
              alt="Advanced Rocketry Module"
              className="rocket"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SpaceRoboticsOverview;
