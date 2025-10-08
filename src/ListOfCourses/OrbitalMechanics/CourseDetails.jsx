import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CourseDetails() {
  return (
    <>
      <section className="course-details-page">
        <div className="container">
          <h1 className="course-title">
            About Aeroin EduTech's Orbital Mechanics & Space Design
          </h1>
          <p className="course-description">
            The Orbital Mechanics & Space Mission Design Course by Aeroin offers a comprehensive introduction to
            the fundamentals of spaceflight. Learners will explore orbital
            dynamics, trajectory design, and mission planning, gain insights
            into satellite systems and propulsion, and work with simulation
            tools to model real-world scenarios. The program bridges theory with
            hands-on practice, fostering research, problem-solving, and
            interdisciplinary collaboration. Participants receive certificates
            of completion, while outstanding performers may secure
            recommendation letters or research internships. Ideal for students
            in aerospace, mechanical, or physics domains seeking practical
            exposure to space mission design and orbital mechanics.
          </p>
        </div>
      </section>
    </>
  );
}

export default CourseDetails;
