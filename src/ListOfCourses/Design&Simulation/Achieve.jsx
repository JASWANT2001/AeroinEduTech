import React, { useEffect } from "react";

function Achieve() {
  return (
    <>
      <div className="space-program-overview">
        <h2>What You’ll Achieve By End Of this Program</h2>
        <div className="space-content">
          <div className="space-left">
            <div className="space-item">
              <i className="fas fa-robot" />
              <p>
                Industry Methodologies: Learn design practices for automotive
                and aerospace sectors.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-tools" />
              <p>
                Component Validation: Analyze materials for durability and
                fatigue life.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-user-graduate" />
              <p>
                Real-World Experience: Gain hands-on experience through projects
                and internships.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-brain" />
              <p>
                ANSYS Simulations: Conduct FEA and CFD simulations for
                engineering solutions.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-handshake" />
              <p>
                Advanced Modeling in CATIA: Master industry-standard 3D modeling
                techniques.
              </p>
            </div>
            <div className="space-item">
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
