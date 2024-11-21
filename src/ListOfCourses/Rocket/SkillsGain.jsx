import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SkillsGain() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 100 });
  }, []);

  return (
    <>
      <div className="space-program-overview">
        <h2 data-aos="fade-up" data-aos-duration="1500">Skills You’ll Develop by the End of This Program</h2>
        <div className="space-content">
          <div
            className="space-left"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="space-item" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-robot" />
              <p>
                Practical hands-on experience in designing and building model
                rockets.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-tools" />
              <p>
                Comprehensive proficiency in CAD design and analysis for
                advanced propulsion systems.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-user-graduate" />
              <p>
                Enhanced research skills through thorough literature reviews and
                data analysis.
              </p>
            </div>
          </div>
          <div
            className="space-right"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="space-item" data-aos="fade-up" data-aos-delay="800">
              <i className="fas fa-brain" />
              <p>
                Valuable mentorship from experienced professionals in space
                research and technology.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1000">
              <i className="fas fa-handshake" />
              <p>
                Meaningful networking opportunities with industry experts and
                like-minded peers.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1200">
              <i className="fas fa-satellite" />
              <p>
                Prestigious Certificate of Completion from an official space
                tutor of ISRO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsGain;
