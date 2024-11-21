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
          <div
            className="space-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="space-item" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-robot" />
              <p>
                CubeSat Design: Learn key components and industry standards for
                CubeSat sizes (1U, 2U, 3U).
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-tools" />
              <p>
                Satellite Development: Gain hands-on experience with CAD
                modeling and satellite testing.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="800">
              <i className="fas fa-user-graduate" />
              <p>
                Mission Planning: Understand the CubeSat mission design process
                and communication strategies.
              </p>
            </div>
          </div>
          <div
            className="space-right"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="space-item" data-aos="fade-up" data-aos-delay="1200">
              <i className="fas fa-brain" />
              <p>
                Communication Systems: Explore radio frequencies and protocols
                for data transmission.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1400">
              <i className="fas fa-handshake" />
              <p>
                Space Environment: Learn about the effects of radiation and
                temperature on satellites.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1600">
              <i className="fas fa-satellite" />
              <p>
                Teamwork and Networking: Collaborate in teams and connect with
                professionals in the space industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsGain;
