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
                CubeSat Design: Learn key components and industry standards for
                CubeSat sizes (1U, 2U, 3U).
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-tools" />
              <p>
                Satellite Development: Gain hands-on experience with CAD
                modeling and satellite testing.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-user-graduate" />
              <p>
                Mission Planning: Understand the CubeSat mission design process
                and communication strategies.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-brain" />
              <p>
                Communication Systems: Explore radio frequencies and protocols
                for data transmission.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-handshake" />
              <p>
                Space Environment: Learn about the effects of radiation and
                temperature on satellites.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-satellite" />
              <p>
                Teamwork and Networking: Collaborate in teams and connect with
                professionals in the space industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsGain;
