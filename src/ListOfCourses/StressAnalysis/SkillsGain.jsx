import React from "react";

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
                Ability to analyze and interpret structural systems and common
                failures.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-tools" />
              <p>
                Proficiency in estimating and calculating potential structural
                failures.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-user-graduate" />
              <p>
                Knowledge of composite materials and their applications in
                design.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-brain" />
              <p>
                Competence in creating and analyzing 1D, 2D, and 3D FEM models.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-handshake" />
              <p>Understanding of key aircraft components and load paths.</p>
            </div>
            <div className="space-item">
              <i className="fas fa-satellite" />
              <p>
                Insight into industry standards and methods in structural
                analysis and materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsGain;
