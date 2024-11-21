import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Aboutus() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: true, // Animates only once when scrolled into view
    });
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("programs-page");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="maincourse-about-us">
        <section
          className="about-us-space-edtech"
          data-aos="fade-up" // AOS animation effect
        >
          <h2>About Aeroin EduTech</h2>
          <p
            className="subtitle"
            data-aos="fade-in" // Subtitle animates with fade-in
            data-aos-delay="300" // Adds a delay before animation starts
          >
            Empowering the Next Generation of Aerospace Leaders
          </p>
          <p
            className="description"
            data-aos="fade-up" // Description animates with fade-up
            data-aos-delay="600" // Delays animation
          >
            At Aeroin EduTech, we educate students and space enthusiasts on
            Aerospace, Aeronautics, Cosmology, and Astronomy. We offer{" "}
            <strong>Internship programs</strong> and hands-on projects, aiding
            students in publishing research papers. Our R&amp;D team is working
            on Small Lift Launch Vehicles. Our mission is to build a thriving
            community of aerospace enthusiasts through{" "}
            <strong>
              STEAM Education (S - Science, T - Technology, E - Engineering, A -
              Aerospace, M - Mathematics)
            </strong>
            , valuable resources, and professional development. We collaborate
            with institutions to conduct workshops on Rocketry, CubeSat
            technology, Design &amp; Simulation, and Space Robotics.
          </p>
          <button
            onClick={scrollToSection}
            className="enquiry-button"
            data-aos="zoom-in" // Button animates with zoom-in effect
            data-aos-delay="900" // Adds delay to button animation
          >
            Learn More
          </button>
        </section>
      </div>
    </>
  );
}

export default Aboutus;
