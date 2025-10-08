import React from "react";
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
            {/* 1st Row */}
            <div className="program-card">
              <div className="live-classes-badge">⭕ Live Classes</div>

              <img
                src="https://ik.imagekit.io/cjh0dpnmu/rocket_propulsion_image_1.jpeg?updatedAt=1731894312988"
                alt="Rocket Propulsion"
                className="program-image"
              />

              {/* NEW: rating + learners row */}
              <div
                className="program-meta"
                aria-label="Course rating and learners"
              >
                <span className="rating-badge" title="Average rating">
                  {/* star icon */}
                  <svg
                    className="star-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03L21.5 9.24l-7.19-.62L12 2 9.69 8.62 2.5 9.24l4.96 4.73-1.64 7.03L12 17.27z" />
                  </svg>
                  4.9
                </span>

                <span className="learner-pill">2,899 learners</span>
              </div>

              <h2 className="program-title mt-4">Rocket Propulsion Program</h2>
              <p className="program-description">
                Master the principles of rocket design, propulsion, and launch
                systems through engaging workshops and realistic simulations.
                You’ll explore the science behind aerospace engineering.
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
              <div
                className="program-meta"
                aria-label="Course rating and learners"
              >
                <span className="rating-badge" title="Average rating">
                  {/* star icon */}
                  <svg
                    className="star-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03L21.5 9.24l-7.19-.62L12 2 9.69 8.62 2.5 9.24l4.96 4.73-1.64 7.03L12 17.27z" />
                  </svg>
                  4.9
                </span>

                <span className="learner-pill">2,145 learners</span>
              </div>
              <h2 className="program-title mt-4">CubeSat Technology Program</h2>
              <p className="program-description">
                Gain expertise in the design, manufacturing, and operation of
                small satellite technology for diverse applications. Through
                interactive practical exercises, you’ll learn how satellites are
                conceptualized.
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
              <div
                className="program-meta"
                aria-label="Course rating and learners"
              >
                <span className="rating-badge" title="Average rating">
                  {/* star icon */}
                  <svg
                    className="star-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03L21.5 9.24l-7.19-.62L12 2 9.69 8.62 2.5 9.24l4.96 4.73-1.64 7.03L12 17.27z" />
                  </svg>
                  4.9
                </span>

                <span className="learner-pill">2,071 learners</span>
              </div>
              <h2 className="program-title mt-4">Aircraft Structure</h2>
              <p className="program-description">
                Focused sessions offer practical insights into structural
                fundamentals, failure analysis, advanced composites, and FEM
                modeling, equipping you with theoretical knowledge and skills.
              </p>
              <a className="know-more-button" href={"/course/stressanalysis"}>
                Know More
              </a>
            </div>

            {/* 2nd Row */}
            <div className="program-card">
              <div className="live-classes-badge">⭕ Live Classes</div>
              <img
                src="https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/WhatsApp%20Image%202025-10-05%20at%206.03.34%20PM.jpeg"
                alt="Design Simulation"
                className="program-image"
              />
              <div
                className="program-meta"
                aria-label="Course rating and learners"
              >
                <span className="rating-badge" title="Average rating">
                  {/* star icon */}
                  <svg
                    className="star-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03L21.5 9.24l-7.19-.62L12 2 9.69 8.62 2.5 9.24l4.96 4.73-1.64 7.03L12 17.27z" />
                  </svg>
                  4.8
                </span>

                <span className="learner-pill">Newly Added</span>
              </div>
              <h2 className="program-title mt-4">
                High-Speed Aerodynamics & Shockwave Analysis (ANSYS Fluent)
              </h2>
              <p className="program-description">
                Fuel your journey to mastery with our hands-on program in
                compressible flow, shockwave dynamics and CFD simulation.
              </p>
              <a className="know-more-button" href={"/course/ansys"}>
                Know More
              </a>
            </div>
            <div className="program-card">
              <div className="live-classes-badge">⭕ Live Classes</div>
              <img
                src="https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/drone-propeller-captures-mid-air-sunset-with-expertise-generated-by-ai.jpg"
                alt="Design Simulation"
                className="program-image"
              />
              <div
                className="program-meta"
                aria-label="Course rating and learners"
              >
                <span className="rating-badge" title="Average rating">
                  {/* star icon */}
                  <svg
                    className="star-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03L21.5 9.24l-7.19-.62L12 2 9.69 8.62 2.5 9.24l4.96 4.73-1.64 7.03L12 17.27z" />
                  </svg>
                  4.8
                </span>

                <span className="learner-pill">Newly Added</span>
              </div>
              <h2 className="program-title mt-4">
                Introduction to Drones and UAVs: From Design to Simulation
              </h2>
              <p className="program-description">
                Take flight into the future with this immersive program on UAVs.
                Explore drone design fundamentals, master advanced aerodynamics,
                and innovation.
              </p>
              <a className="know-more-button" href={"/course/drones"}>
                Know More
              </a>
            </div>
            <div className="program-card">
              <div className="live-classes-badge">⭕ Live Classes</div>
              <img
                src="https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/astral-wallpapers-composition-with-galaxy.jpg"
                alt="Design Simulation"
                className="program-image"
              />
              <div
                className="program-meta"
                aria-label="Course rating and learners"
              >
                <span className="rating-badge" title="Average rating">
                  {/* star icon */}
                  <svg
                    className="star-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03L21.5 9.24l-7.19-.62L12 2 9.69 8.62 2.5 9.24l4.96 4.73-1.64 7.03L12 17.27z" />
                  </svg>
                  4.8
                </span>

                <span className="learner-pill">Newly Added</span>
              </div>
              <h2 className="program-title mt-4">
                Orbital Mechanics & Space Mission Design
              </h2>
              <p className="program-description">
                Embark on a journey beyond Earth with this engaging program in
                orbital dynamics and mission planning. Discover how satellites
                navigate space and explore the fundamentals.
              </p>
              <a className="know-more-button" href={"/course/orbitalmechanics"}>
                Know More
              </a>
            </div>

            {/* Full Width Last Row */}
            <div className="program-card full-width special-layout">
              <div className="live-classes-badge">⭕ Live Classes</div>
              <div className="special-layout-content">
                <img
                  src="https://ik.imagekit.io/cjh0dpnmu/design_simulation_3d.jpeg?updatedAt=1731894313041"
                  alt="Design Simulation"
                  className="special-image"
                />
                <div className="special-text">
                  <div
                    className="program-meta"
                    aria-label="Course rating and learners"
                  >
                    <span className="rating-badge" title="Average rating">
                      {/* star icon */}
                      <svg
                        className="star-icon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M12 17.27l6.18 3.73-1.64-7.03L21.5 9.24l-7.19-.62L12 2 9.69 8.62 2.5 9.24l4.96 4.73-1.64 7.03L12 17.27z" />
                      </svg>
                      4.9
                    </span>

                    <span className="learner-pill">521 learners</span>
                  </div>
                  <h2 className="program-title mt-4">
                    Design &amp; Simulation
                  </h2>
                  <p className="program-description">
                    We offer expert training in 2D drafting, 3D modeling, and
                    advanced simulation techniques, equipping students with the
                    skills to visualize and validate engineering concepts.
                    Through hands-on projects and real-world applications,
                    participants gain practical experience in CAD tools, finite
                    element analysis, and motion studies. This program prepares
                    learners to confidently handle complex industry-level
                    challenges and contribute effectively to design and
                    innovation.
                  </p>
                  <a className="know-more-button" href={"/course/simulation"}>
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseDisplay;
