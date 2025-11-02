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
                  5.0
                </span>

                {/* <span className="learner-pill">1,601 learners</span> */}
              </div>

              <h2 className="program-title mt-4">
                Design and Flow Simulation of Rocket Propulsion System using CFD
              </h2>
              <p className="program-description">
                Dive deep into rocket propulsion, master core design, and launch-system architecture through hands-on workshops and guided exercises.

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
                  5.0
                </span>

                {/* <span className="learner-pill">1,539 learners</span> */}
              </div>
              <h2 className="program-title mt-4">
                Design & development of cubesat
              </h2>
              <p className="program-description">
                Gain expertise in the design, manufacturing, and operation of
                small satellite technology for diverse applications. Through
                practical exercises, you’ll learn how satellites are
                conceptualized.
              </p>
              <a className="know-more-button" href={"/course/cubesat"}>
                Know More
              </a>
            </div>
            <div className="program-card">
              <div className="live-classes-badge">⭕ Live Classes</div>
              <img
                src="https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/technician-using-laptop-monitor-solar-panel-factory-assembly-lines-close-up.jpg"
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
                  5.0
                </span>

                {/* <span className="learner-pill">1,678 learners</span> */}
              </div>
              <h2 className="program-title mt-4">
                Design and Failure Analysis of Aerospace Composite Structures.
              </h2>
              <p className="program-description">
                Focused sessions offer practical insights into structural
                fundamentals, advanced composites, and FEM modeling, equipping
                with theoretical knowledge.
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
                  5.0
                </span>

                {/* <span className="learner-pill">Newly Added</span> */}
              </div>
              <h2 className="program-title mt-4">
                Design & Simulation
              </h2>
              <p className="program-description">
                We offer expert training in 2D drafting, 3D modeling, and advanced simulation techniques, equipping students with the skills to visualize and validate engineering concepts.
                Through industry-based projects.              </p>
              <a className="know-more-button" href={"/course/simulation"}>
                Know More
              </a>
            </div>
            <div className="program-card">
              <div className="live-classes-badge">⭕ Live Classes</div>
              <img
                src="https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/man-s-hand-holding-drone-outdoors.jpg"
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
                  5.0
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
                  5.0
                </span>

                <span className="learner-pill">Newly Added</span>
              </div>
              <h2 className="program-title mt-4">
                Orbital Mechanics & Space Mission Design
              </h2>
              <p className="program-description">
                Embark on a journey beyond Earth with this engaging program in orbital dynamics and mission planning. Discover how satellites navigate space and explore the fundamentals of space exploration.
              </p>
              <a className="know-more-button" href={"/course/orbitalmechanics"}>
                Know More
              </a>
            </div>
            <div className="program-card">
              <div className="live-classes-badge">⭕ Live Classes</div>
              <img
                src="https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/close-up-home-made-robot.jpg"
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
                  5.0
                </span>

                <span className="learner-pill">Newly Added</span>
              </div>
              <h2 className="program-title mt-4">
              Introduction to Space Robotics
              </h2>
              <p className="program-description">
               Step into the future of exploration with this immersive program in space robotics. Learn how robotic systems operate in extreme environments, from planetary rovers to orbital manipulators.
              </p>
              <a className="know-more-button" href={"/course/spacerobo"}>
                Know More
              </a>
            </div>
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
                  5.0
                </span>

                <span className="learner-pill">Newly Added</span>
              </div>
              <h2 className="program-title mt-4">
                High-Speed Aerodynamics & Shockwave Analysis{" "}
           
              </h2>
              <p className="program-description">
                With our hands-on program in compressible flow, shockwave dynamics, and CFD simulation, delving into real-world aerospace applications to analyze supersonic phenomena
              </p>
              <a className="know-more-button" href={"/course/ansys"}>
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
