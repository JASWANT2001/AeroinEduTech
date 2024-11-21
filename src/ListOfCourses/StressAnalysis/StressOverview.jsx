import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function StressOverview() {
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
        <div className="text-content">
          <h1 data-aos="fade-up" data-aos-delay="0">
            Stress Analysis
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="200">
            Gain Experience in Stress Analysis !!
          </h2>
          <ul>
            <li data-aos="fade-up" data-aos-delay="400">
              <span>PROGRAM DURATION</span> <span>4, 8, 12 Weeks Of Focused Learning</span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="600">
              <span>TOPIC COVERAGE</span> <span>Structural Basics, FEM Modeling, Aircraft Structures</span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="800">
              <span>LEARNING OUTCOME</span> <span>In-depth understanding of FEM modeling, &amp; aircraft structure</span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="1000">
              <span>PROJECT WORK</span> <span>Hands-on Experience in FEM Modeling, Failure Prediction</span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="1200">
              <span>APPLICATION TO CAREER</span> <span>Certificate of Completion + Letter of Recommendation</span>
            </li>
          </ul>
        </div>
        <div className="rocket-content">
          <div className="rocket-container">
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/Course%20Content/stress_analysis_3d.png"
              alt="Stress Analysis"
              className="rocket"
              data-aos="fade-up"
              data-aos-delay="1400"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default StressOverview;
