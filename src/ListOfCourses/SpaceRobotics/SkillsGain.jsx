import React, { useEffect } from "react";

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
                Understand the fundamentals of robotics and their applications in space.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-tools" />
              <p>
                Analyze robotic arm kinematics using Denavit–Hartenberg conventions.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-user-graduate" />
              <p>
                Model and simulate robotic manipulators using MATLAB/Simulink.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-brain" />
              <p>
               Explain design and locomotion principles of mobile robots for planetary exploration.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-handshake" />
              <p>
                Perform mobile robot simulations using Webots.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-satellite" />
              <p>
                Recognize challenges in space robotics, including microgravity and communication delay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsGain;
