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
                Practical hands-on CFD setup for supersonic or hypersonic flows.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-tools" />
              <p>
                Derivation and application of shock relations (normal &
                oblique).
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-user-graduate" />
              <p>
                Proficiency in mesh generation strategies for shocks and
                boundary layers.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-brain" />
              <p>
                Familiarity with compressible turbulence models (SST k-ω,
                Spalart-Allmaras).
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-handshake" />
              <p>
                Numerical schemes and shock capturing techniques (AUSM, Roe,
                HLLC).
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-satellite" />
              <p>
                Hypersonic aerothermodynamics basics and blunt-body shock
                standoff analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsGain;
