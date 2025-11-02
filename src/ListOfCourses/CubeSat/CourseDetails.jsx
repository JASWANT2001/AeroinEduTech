import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CourseDetails() {
  return (
    <>
      <section className="course-details-page">
        <div className="container">
          <h1 className="course-title">
            About Aeroin EduTech's CubeSat Research Program
          </h1>
          <p className="course-description">
            CubeSat technology revolutionizes space exploration through small,
            cost-effective satellites designed for diverse applications, from
            scientific research to Earth observation. Interns will gain hands-on
            experience in ideation, design, and mission planning, familiarizing
            themselves with fundamental principles. They will collaborate on
            research projects, contributing to literature reviews, experimental
            design, and data analysis. Over a 30-day offline program,
            participants will enhance their skills while working toward the
            design and development of a CubeSat. This innovative approach
            fosters creativity and paves the way for future advancements in
            satellite technology.
          </p>
        </div>
      </section>
    </>
  );
}

export default CourseDetails;
