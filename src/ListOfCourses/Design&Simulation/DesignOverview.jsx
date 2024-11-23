import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function DesignOverview() {
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
            Design &amp; Simulation
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="200">
            Enhance Your Skills in Design and Simulation!
          </h2>
          <ul>
            <li data-aos="fade-up" data-aos-delay="400">
              <span>PROGRAM DURATION</span>{" "}
              <span>15 weeks (Sat & Sun) -  2 Hours of Focused learning</span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="600">
              <span>TOPIC COVERAGE</span>{" "}
              <span>Mastery CATIA, ANSYS Workbench, Reverse Engineering</span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="800">
              <span>LEARNING OUTCOME</span>{" "}
              <span>
                Gain In-depth understanding of CATIA, Generative Design
              </span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="1000">
              <span>PROJECT WORK</span>{" "}
              <span>
                Final Year Projects, Design and Simulation Projects &amp; Intern
              </span>
            </li>
            <hr />
            <li data-aos="fade-up" data-aos-delay="1200">
              <span>APPLICATION TO CAREER</span>{" "}
              <span>Certificate of Completion + Letter of Recommendation</span>
            </li>
          </ul>
        </div>
        <div className="rocket-content">
          <div
            className="rocket-container"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/Course%20Content/design_3d.png"
              alt="Design Of Rocket"
              className="rocket"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignOverview;
