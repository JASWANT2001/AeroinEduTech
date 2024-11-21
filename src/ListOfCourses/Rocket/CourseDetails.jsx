import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CourseDetails() {
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
      <section className="course-details-page">
        <div className="container">
          {/* Title with animation */}
          <h1
            className="course-title"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            About Aeroin EduTech's Rocketry Research Program
          </h1>
          {/* Description with animation */}
          <p
            className="course-description"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            The Virtual Internship on Rocketry by Aeroin EduTech offers an
            immersive experience into Space Launch Vehicle technologies,
            covering Rocket Aerodynamics, Propulsion Systems, and Space
            Dynamics. Participants will design and build model rockets, conduct
            hands-on experiments, and gain insights into propulsion systems
            through CAD analysis and functional prototypes. With mentorship from
            ISRO-certified space professionals, the program encourages research,
            problem-solving, and collaboration, while offering opportunities to
            contribute to scientific publications. Interns will also receive a
            certificate of completion and may be considered for recommendation
            letters for outstanding performance. This program is ideal for those
            seeking to explore career pathways in space technology.
          </p>
        </div>
      </section>
    </>
  );
}

export default CourseDetails;
