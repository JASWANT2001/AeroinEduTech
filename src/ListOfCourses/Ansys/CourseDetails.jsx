import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CourseDetails() {
  return (
    <>
      <section className="course-details-page">
        <div className="container">
          <h1 className="course-title">
            About Aeroin  Aerodynamics and Shockwave  Program
          </h1>
          <p className="course-description">
            The High-Speed Aerodynamics & Shockwave Analysis program offers an
            immersive introduction to compressible aerodynamics and practical
            CFD for aerospace applications. Participants will learn governing
            equations, shock relations, and how to configure ANSYS Fluent for
            supersonic/hypersonic problems. Through structured weekly phases and
            guided simulation tasks, students build skills in mesh generation,
            solver selection, turbulence modelling, and post-processing,
            culminating in a research-style project suitable for portfolios and
            publications.
          </p>
        </div>
      </section>
    </>
  );
}

export default CourseDetails;
