import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Achieve() {
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
      <div className="space-program-overview">
        <h2 data-aos="fade-up" data-aos-delay="0">
          What You’ll Achieve By End Of this Program
        </h2>
        <div className="space-content">
          <div className="space-left">
            <div className="space-item" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-robot" />
              <p>
                Industry Methodologies: Learn design practices for automotive
                and aerospace sectors.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-tools" />
              <p>
                Component Validation: Analyze materials for durability and
                fatigue life.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-user-graduate" />
              <p>
                Real-World Experience: Gain hands-on experience through projects
                and internships.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item" data-aos="fade-up" data-aos-delay="800">
              <i className="fas fa-brain" />
              <p>
                ANSYS Simulations: Conduct FEA and CFD simulations for
                engineering solutions.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1000">
              <i className="fas fa-handshake" />
              <p>
                Advanced Modeling in CATIA: Master industry-standard 3D modeling
                techniques.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1200">
              <i className="fas fa-satellite" />
              <p>
                Innovative Design: Apply reverse engineering and generative
                design methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achieve;
