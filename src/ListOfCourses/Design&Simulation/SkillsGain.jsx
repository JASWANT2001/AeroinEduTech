import React, { useEffect } from "react";

function SkillsGain() {
  return (
    <>
      <div className="space-program-overview">
        <h2>Skills You’ll Develop by the End of This Program</h2>
        <div className="space-content">
          <div className="space-left">
            <div className="space-item">
              <i className="fas fa-cube" />
              <p>
                Master advanced 3D modeling using CATIA for flexible,
                industry-standard designs.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-chart-area" />
              <p>
                Conduct FEA and CFD simulations with ANSYS to solve engineering
                challenges.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-drafting-compass" />
              <p>
                Apply reverse engineering and generative design for innovative
                solutions.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-cogs" />
              <p>
                Analyze materials and validate components for durability and
                fatigue life.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-industry" />
              <p>
                Learn industry-relevant design methodologies for automotive and
                aerospace sectors.
              </p>
            </div>
            <div className="space-item">
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
