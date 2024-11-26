import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function PlanEnquiry() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Global animation duration
      once: true, // Animate elements only once when scrolled into view
    });
  }, []);

  return (
    <>
      <section
        className="plan-enquiry-section"
        data-aos="fade-up" // Adds fade-up animation to the entire section
      >
        <div className="container">
          <h2
            className="enquiry-heading"
            data-aos="fade-in" // Adds a fade-in animation to the heading
            data-aos-delay="200" // Delays the animation for 200ms
          >
            Confused about which Program plan to choose?
          </h2>
          <p
            className="enquiry-subheading"
            data-aos="fade-in" // Adds a fade-in animation to the subheading
            data-aos-delay="400" // Delays the animation for 400ms
          >
            Let our experts guide you to the best learning plan tailored for your needs!
          </p>
          <a
            className="enquiry-button"
            href="/contact"
            data-aos="zoom-in" // Adds a zoom-in animation to the button
            data-aos-delay="600" // Delays the animation for 600ms
          >
            Expert Help Awaits
          </a>
        </div>
      </section>
    </>
  );
}

export default PlanEnquiry;
