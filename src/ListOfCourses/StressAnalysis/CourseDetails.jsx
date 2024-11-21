import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CourseDetails() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 100 });
  }, []);

  return (
    <>
      <section
        className="course-details-page"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="200"
      >
        <div className="container">
          <h1
            className="course-title"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            About Aeroin EduTech's Stress Analysis Program
          </h1>
          <p
            className="course-description"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            This course offers a comprehensive introduction to structural
            analysis in aerospace engineering, focusing on the fundamentals of
            structural members, failure estimation, composite materials, and
            finite element modeling (FEM). Over a series of weekend sessions,
            participants will learn to analyze structural behavior, identify and
            predict failures, and understand key considerations in composite
            design. The course also covers aircraft-specific structures,
            providing practical insights into material applications and load
            distribution essential for aerospace design.
          </p>
        </div>
      </section>
    </>
  );
}

export default CourseDetails;
