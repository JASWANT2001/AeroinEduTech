import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function CourseDisplay() {
  return (
    <>
      <section className="programs-page" id="programs-page">
        <div className="container">
          <h1 className="page-title">
            Educational Programs - Live Classes with Expert Help
          </h1>
          <div className="programs-list">
            <div className="program-card">
              <div className="live-classes-badge">⭕ Live Classes</div>
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/rocket_propulsion_image_1.jpeg?updatedAt=1731894312988"
                alt="Rocketry Internship"
                className="program-image"
              />
              <h2 className="program-title">Rocket Propulsion</h2>
              <p className="program-description">
                Master the principles of rocket design, propulsion, and launch
                systems through hands-on workshops and simulations.
              </p>
              <a className="know-more-button" href={"/course/rocket"}>
                Know More
              </a>
            </div>
            <div className="program-card">
              <div className="live-classes-badge">⭕ Live Classes</div>
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/cubesat_image_course.jpeg?updatedAt=1731894312726"
                alt="CubeSat Internship"
                className="program-image"
              />
              <h2 className="program-title">CubeSat Technology</h2>
              <p className="program-description">
                Gain expertise in the design, manufacturing, and operation of
                small satellite technology for diverse applications.
              </p>
              <a className="know-more-button" href={"/course/cubesat"}>
                Know More
              </a>
            </div>
            <div className="program-card">
              <div className="live-classes-badge">⭕ Live Classes</div>
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/stress_analysis_image2.jpeg?updatedAt=1731894313122"
                alt="Stress Analysis"
                className="program-image"
              />
              <h2 className="program-title">Aircraft Structure</h2>
              <p className="program-description">
                Focused sessions offering practical insights into structural
                basics, failure analysis, composites, FEM modeling.
              </p>
              <a className="know-more-button" href={"/course/stressanalysis"}>
                Know More
              </a>
            </div>
            <div className="program-card">
              <div className="live-classes-badge">⭕ Live Classes</div>
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/design_simulation_3d.jpeg?updatedAt=1731894313041"
                alt="Design Simulation"
                className="program-image"
              />
              <h2 className="program-title">Design &amp; Simulation</h2>
              <p className="program-description">
                We offer expert training in 2D, 3D, and Simulation techniques,
                preparing students to tackle industry-level projects.
              </p>
              <a className="know-more-button" href={"/course/simulation"}>
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseDisplay;
