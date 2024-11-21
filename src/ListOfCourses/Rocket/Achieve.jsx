import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Achieve() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 100 });
  }, []);

  return (
    <>
      <div className="space-program-overview">
        <h2 data-aos="fade-up" data-aos-duration="1500">
          What You’ll Achieve Through This Project-Based Program
        </h2>
        <div className="space-content">
          <div
            className="space-left"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="space-item" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-rocket" />
              <p>
                Contribute to Space Research: Participate in cutting-edge space
                exploration.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-cogs" />
              <p>
                Work with Advanced Technologies: Get hands-on with the latest
                space tools.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-lightbulb" />
              <p>
                Solve Complex Problems: Tackle engineering challenges with
                creativity.
              </p>
            </div>
          </div>
          <div
            className="space-right"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="space-item" data-aos="fade-up" data-aos-delay="800">
              <i className="fas fa-users" />
              <p>
                Collaborate Across Disciplines: Strengthen teamwork with diverse
                peers.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1000">
              <i className="fas fa-project-diagram" />
              <p>
                Lead Space Projects: Manage projects from concept to execution.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1200">
              <i className="fas fa-network-wired" />
              <p>
                Expand Your Network: Connect with space industry professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achieve;
