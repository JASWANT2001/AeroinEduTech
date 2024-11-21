import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CourseOverview() {
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
          <h1 className="course-title" data-aos="fade-up" data-aos-duration="1500">
            About Aeroin EduTech's Design and Simulation Program
          </h1>
          <p
            className="course-description"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            This comprehensive program equips students with industry-relevant
            skills in advanced 3D design, simulation, and analysis. With
            hands-on training in CATIA, ANSYS Workbench, and cutting-edge tools
            for FEA, CFD, reverse engineering, and generative design,
            participants will gain the expertise needed to tackle complex
            engineering challenges. The program offers practical exposure
            through real-world projects, internships, and collaboration with
            industry experts, preparing students for successful careers in the
            mechanical, aerospace, and robotics sectors. Additionally,
            top-performing students will have opportunities for scholarships and
            project funding, further enhancing their learning experience and
            career prospects.
          </p>
        </div>
      </section>
    </>
  );
}

export default CourseOverview;
