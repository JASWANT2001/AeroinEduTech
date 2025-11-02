import React from "react";

function RocketOverview() {
  return (
    <>
      <div className="overview-section">
        <div className="text-content">
          <h1>Design and Flow Simulation of Rocket Propulsion System</h1>
          <h2>Fuel your journey to mastery with Rocket !!</h2>
          <ul>
            <li>
              <span>PROGRAM DURATION</span>{" "}
              <span>5 Days Master Class / 4 to 8 Weeks Of Learning</span>
            </li>
            <hr />
            <li>
              <span>TOPIC COVERAGE</span>{" "}
              <span>Intro to Orbital Mechanics, Phases of Launching</span>
            </li>
            <hr />
            <li>
              <span>LEARNING OUTCOME</span>{" "}
              <span>Gain In-depth understanding of rocket technologies</span>
            </li>
            <hr />
            <li>
              <span>PROJECT WORK</span>{" "}
              <span>
                Hands-on Research, Literature review in rocket systems
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
              src="https://i.postimg.cc/kg555f9n/rocket-flying-through-space.jpg"
              alt="Advanced Rocketry Module"
              className="rocket"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RocketOverview;
