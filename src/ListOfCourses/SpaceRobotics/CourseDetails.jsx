import React from "react";

function CourseDetails() {
  return (
    <>
      <section className="course-details-page">
        <div className="container">
          {/* Title with animation */}
          <h1 className="course-title">
            About Aeroin EduTech's Space Robotics Program
          </h1>
          {/* Description with animation */}
          <p className="course-description">
            This industry-driven program is designed in collaboration with GalaxyZ Space Pvt. Ltd., a leading MSME-registered aerospace EdTech company. The course introduces learners to the fascinating field of space robotics, covering the design, control, and simulation of robotic systems used in space exploration.
            Through practical sessions using MATLAB/Simulink and Webots, students gain real-world exposure to robotic manipulators and mobile systems used in missions such as Mars rovers and the ISS robotic arms.
            The program bridges the gap between theoretical learning and practical implementation; empowering students to design, analyze, and simulate robotic systems for aerospace applications.
          </p>
        </div>
      </section>
    </>
  );
}

export default CourseDetails;
