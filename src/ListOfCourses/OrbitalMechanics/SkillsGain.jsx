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
                Build strong computational and simulation skills tailored for
                orbital mechanics and mission analysis.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-tools" />
              <p>
                Develop sharp problem-solving skills to calculate and optimize
                complex orbital paths.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-user-graduate" />
              <p>
                Gain expertise in designing and evaluating mission profiles
                across diverse orbital regimes.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-brain" />
              <p>
                Learn how to structure technical findings into professional
                research papers and reports.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-handshake" />
              <p>
                Tackle real-world challenges such as fuel efficiency, timing,
                and orbital transfers with creativity.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-satellite" />
              <p>
                Connect with industry experts, academics, and peers to expand
                your professional opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsGain;
