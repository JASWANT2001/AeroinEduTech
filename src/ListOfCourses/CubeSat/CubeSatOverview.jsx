import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CubeSatOverview() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      offset: 100, // Offset from the original trigger point
      easing: "ease-out", // Easing animation type
      once: true, // Animate only once when scrolled into view
    });
  }, []);

  return (
    <>
      <div className="overview-section">
        <div className="text-content" data-aos="fade-up" data-aos-delay="0">
          <h1>CubeSat Technology</h1>
          <h2>Discover the Future of Space Technology!</h2>
          <ul>
            <li data-aos="fade-up" data-aos-delay="200">
              <span>PROGRAM DURATION</span>{" "}
              <span>4, 8, 12 Weeks Of Focused Learning</span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="400">
              <span>TOPIC COVERAGE</span>{" "}
              <span>Intro to Subsystems, Research and development</span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="600">
              <span>LEARNING OUTCOME</span>{" "}
              <span>Gain In-depth understanding of CubeSat technologies</span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="800">
              <span>PROJECT WORK</span>{" "}
              <span>
                Hands-on Research, Literature review in CubeSat systems
              </span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="1000">
              <span>APPLICATION TO CAREER</span>{" "}
              <span>Certificate of Completion + Letter of Recommendation</span>
            </li>
          </ul>
        </div>

        <div
          className="rocket-content"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
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
