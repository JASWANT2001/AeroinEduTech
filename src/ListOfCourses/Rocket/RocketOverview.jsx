import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function RocketOverview() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 100 });
  }, []);

  return (
    <>
      <div className="overview-section">
        <div
          className="text-content"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h1>Rocket Propulsion</h1>
          <h2>Fuel your journey to mastery with Rocket Propulsion !!</h2>
          <ul>
            <li data-aos="fade-up" data-aos-delay="200">
              <span>PROGRAM DURATION</span>{" "}
              <span>4, 8, 12 Weeks Of Focused Learning</span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="400">
              <span>TOPIC COVERAGE</span>{" "}
              <span>Intro to Orbital Mechanics, Phases of Launching</span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="600">
              <span>LEARNING OUTCOME</span>{" "}
              <span>Gain In-depth understanding of rocket technologies</span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="800">
              <span>PROJECT WORK</span>{" "}
              <span>Hands-on Research, Literature review in rocket systems</span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="1000">
              <span>CAREER ADVANCEMENT</span>{" "}
              <span>Certificate of Completion + Letter of Recommendation</span>
            </li>
          </ul>
        </div>
        <div
          className="rocket-content"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="rocket-container">
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/Course%20Content/rocket_3d.png?updatedAt=1732118383119"
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
