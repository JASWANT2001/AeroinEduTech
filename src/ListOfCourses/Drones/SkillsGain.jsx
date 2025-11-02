import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SkillsGain() {
  return (
    <>
      <div className="space-program-overview">
        <h2>Skills You’ll Develop by the End of This Program</h2>
        <div className="space-content">
          <div className="space-left">
            <div className="space-item">
              <i className="fas fa-robot" />
              <p>
                Learn how drones are categorized and uncover the aerodynamic
                principles that drive stable efficient flight.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-tools" />
              <p>
                Master the art of choosing motors, propellers, batteries, and
                ESCs to optimize drone performance.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-user-graduate" />
              <p>
                Design and prototype multirotor frames with precision using
                industry-standard CAD tools.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-brain" />
              <p>
                Build a strong foundation in  dynamics and understand the
                mathematical models that govern UAV motion.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-handshake" />
              <p>
                Simulate real-world UAV behavior with control systems and plant
                models using MATLAB and Simulink.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-satellite" />
              <p>
                Develop the ability to document your designs, simulations, and
                findings in a structured, professional format.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsGain;
