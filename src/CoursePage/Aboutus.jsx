import React, { useEffect } from "react";

function Aboutus() {
  const scrollToSection = () => {
    const section = document.getElementById("programs-page");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="maincourse-about-us">
        <section className="about-us-space-edtech">
          <h2>About Aeroin EduTech</h2>
          <p className="subtitle">
            Empowering the Next Generation of Aerospace Leaders
          </p>
          <p className="description">
            At Aeroin EduTech, we educate students and space enthusiasts in
            Aerospace, Aeronautics, Cosmology, and Astronomy. We offer{" "}
            <strong>Internship programs</strong> and hands-on projects, helping
            students publish research papers. Our R&amp;D team works on Small
            Lift Launch Vehicles. We aim to build a thriving aerospace community
            through{" "}
            <strong>
              STEAM Education (Science, Technology, Engineering, Aerospace,
              Mathematics)
            </strong>
            , providing valuable resources and professional development. We
            collaborate with institutions to offer workshops on Rocketry,
            CubeSat technology, Design &amp; Simulation, and Aircraft Structure,
            High-Speed Aerodynamics & Shockwave Analysis (ANSYS Fluent),
            Introduction to Drones and UAVs: From Design to Simulation, Orbital
            Mechanics & Space Mission Design.
          </p>
          <button onClick={scrollToSection} className="enquiry-button">
            Learn More
          </button>
        </section>
      </div>
    </>
  );
}

export default Aboutus;
