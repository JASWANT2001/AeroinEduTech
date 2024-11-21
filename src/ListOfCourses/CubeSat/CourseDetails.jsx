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
            About Aeroin EduTech's CubeSat Research Program
          </h1>
          <p
            className="course-description"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
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
