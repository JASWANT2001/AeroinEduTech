import React from "react";

function RocketOverview() {
  return (
    <>
      <div className="overview-section">
        <div className="text-content">
          <h1>Rocket Propulsion</h1>
          <h2>Fuel your journey to mastery with Rocket Propulsion !!</h2>
          <ul>
            <li>
              <span>PROGRAM DURATION</span>{" "}
              <span>4, 8 Weeks Of Focused Learning</span>
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
              src="https://img.freepik.com/free-photo/rocket-flying-through-space_23-2150378595.jpg?t=st=1732611228~exp=1732614828~hmac=7ce20dec81f0e76d3e303dc48e3fce90a905a84d76a56e951394d6389a680bba&w=1060"
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
