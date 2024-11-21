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
          Career Opportunities from This Project-Based Program
        </h2>
        <div className="space-content">
          <div
            className="space-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="space-item" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-satellite" />
              <p>
                Satellite Design: Design and integrate satellite subsystems as a
                Satellite Systems Engineer.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-rocket" />
              <p>
                Mission Operations: Oversee satellite operations and
                communications.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="800">
              <i className="fas fa-code" />
              <p>
                Software Development: Create and maintain software for satellite
                control and data handling.
              </p>
            </div>
          </div>
          <div
            className="space-right"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="space-item" data-aos="fade-up" data-aos-delay="1200">
              <i className="fas fa-flask" />
              <p>
                Research: Conduct CubeSat space science research for Earth
                observation.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1400">
              <i className="fas fa-cogs" />
              <p>
                Project Management: Manage satellite development projects and
                teams.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1600">
              <i className="fas fa-briefcase" />
              <p>
                Entrepreneurship: Start a business in CubeSat development and
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achieve;
