import React, { useEffect } from "react";

function Achieve() {
  return (
    <>
      <div className="space-program-overview" style={{ marginTop: "100px" }}>
        <h2>Career Opportunities from This Project-Based Program</h2>
        <div className="space-content">
          <div className="space-left">
            <div className="space-item">
              <i className="fas fa-satellite" />
              <p>
                Gain real exposure by working on drone-focused research and simulation projects.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-rocket" />
              <p>
               Strengthen your technical expertise through practical design and simulation tasks.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-code" />
              <p>
               Apply innovative thinking to tackle real-world challenges in UAV systems.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-flask" />
              <p>
                Work alongside peers from different domains and build collaborative skills.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-cogs" />
              <p>
               Take ownership of projects, driving them from initial idea to final validated outcome.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-briefcase" />
              <p>
               Showcase your technical journey with a professional project portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achieve;
