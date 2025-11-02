import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CourseDetails() {
  return (
    <>
      <section className="course-details-page">
        <div className="container">
          <h1 className="course-title">
            About Aeroin EduTech's Drone and UAV Research Program
          </h1>
          <p className="course-description">
            The UAV Value-Added Course by GalaxyZ Space in collaboration with
            Aeroin offers an immersive introduction to unmanned aerial vehicles.
            Learners will explore UAV classifications and aerodynamics, perform
            component selection and multirotor sizing, design CAD models in
            Fusion 360, and simulate UAV dynamics using MATLAB/Simulink. The
            program bridges theory with practice, encouraging research,
            problem-solving, and teamwork. Participants receive certificates of
            completion, and outstanding performers may secure recommendation
            letters or research internships. Ideal for students in aerospace,
            mechanical, or electrical engineering seeking hands-on exposure to
            UAV systems.
          </p>
        </div>
      </section>
    </>
  );
}

export default CourseDetails;
