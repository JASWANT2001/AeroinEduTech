import React from "react";

function CourseDetails() {
  return (
    <>
      <section className="course-details-page">
        <div className="container">
          {/* Title with animation */}
          <h1 className="course-title">
            About Aeroin EduTech's Rocketry Research Program
          </h1>
          {/* Description with animation */}
          <p className="course-description">
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
