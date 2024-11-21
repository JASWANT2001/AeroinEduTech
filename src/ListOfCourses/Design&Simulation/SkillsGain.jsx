import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SkillsGain() {
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
          Skills You’ll Develop by the End of This Program
        </h2>
        <div className="space-content">
          <div className="space-left">
            <div className="space-item" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-cube" />
              <p>
                Master advanced 3D modeling using CATIA for flexible,
                industry-standard designs.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-chart-area" />
              <p>
                Conduct FEA and CFD simulations with ANSYS to solve engineering
                challenges.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-drafting-compass" />
              <p>
                Apply reverse engineering and generative design for innovative
                solutions.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item" data-aos="fade-up" data-aos-delay="800">
              <i className="fas fa-cogs" />
              <p>
                Analyze materials and validate components for durability and
                fatigue life.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1000">
              <i className="fas fa-industry" />
              <p>
                Learn industry-relevant design methodologies for automotive and
                aerospace sectors.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1200">
              <i className="fas fa-project-diagram" />
              <p>
                Gain hands-on experience through real-world projects and
                internships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsGain;
