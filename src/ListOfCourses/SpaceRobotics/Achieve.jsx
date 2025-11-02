import React, { useEffect } from "react";

function Achieve() {
  return (
    <>
      <div className="space-program-overview mt-5">
        <h2>What You’ll Achieve Through This Project-Based Program</h2>
        <div className="space-content">
          <div className="space-left">
            <div className="space-item">
              <i className="fas fa-rocket" />
              <p>
               Robotic Manipulators: Master kinematics and control of robotic arms used in space operations.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-cogs" />
              <p>
                Space Mobility: Explore rover locomotion and drive mechanisms for Moon and Mars missions.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-lightbulb" />
              <p>
                Simulation Proficiency: Gain expertise in MATLAB/Simulink and Webots-based modelling.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-users" />
              <p>
                Research Internship: Extend your learning through a guided 4-week research internship focused on aerospace robotics projects.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-project-diagram" />
              <p>
                Industry Readiness: Build skills applicable to aerospace, robotics, and mechatronics careers.
              </p>
            </div>
            <div className="space-item">
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
