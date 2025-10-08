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
               Gain a solid foundation in orbital dynamics, spacecraft motion, and mission architecture.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-rocket" />
              <p>
               Perform orbit plotting, rendezvous simulations, and trajectory planning using aerospace toolkits.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-code" />
              <p>
               Apply concepts to real-world scenarios such as CubeSat missions, and interplanetary transfers.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-flask" />
              <p>
               Develop expertise in literature reviews, design, results analysis, and formatting for IEEE/AIAA standards.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-cogs" />
              <p>
              Build confidence in preparing publish-ready research aligned with global aerospace platforms.
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
