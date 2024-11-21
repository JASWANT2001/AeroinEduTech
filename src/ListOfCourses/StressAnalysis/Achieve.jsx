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
              <i className="fas fa-cogs" /> {/* Changed icon */}
              <p>
                Develop a strong foundation in structural analysis and design
                principles.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-map-signs" /> {/* Changed icon */}
              <p>
                Gain hands-on experience with structural failure estimation and
                prevention.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-project-diagram" /> {/* Changed icon */}
              <p>
                Learn the application and design considerations of composite
                materials in aerospace.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item" data-aos="fade-up" data-aos-delay="800">
              <i className="fas fa-code" />
              <p>Master the basics of FEM modeling, including all elements.</p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1000">
              <i className="fas fa-tools" /> {/* Changed icon */}
              <p>
                Understand the essential components and load transfer mechanisms
                in aircraft structures.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1200">
              <i className="fas fa-rocket" /> {/* Changed icon */}
              <p>
                Gain insights into real-world industry applications and how to
                model complex systems effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achieve;
