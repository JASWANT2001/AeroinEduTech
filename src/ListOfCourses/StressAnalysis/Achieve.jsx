import React, { useEffect } from "react";

function Achieve() {
  return (
    <>
      <div className="space-program-overview mt-5">
        <h2>What You’ll Achieve By End Of this Program</h2>
        <div className="space-content">
          <div className="space-left">
            <div className="space-item">
              <i className="fas fa-cogs" /> {/* Changed icon */}
              <p>
                Develop a strong foundation in structural analysis and design
                principles.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-map-signs" /> {/* Changed icon */}
              <p>
                Gain hands-on experience with structural failure estimation and
                prevention.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-project-diagram" /> {/* Changed icon */}
              <p>
                Learn the application and design considerations of composite
                materials in aerospace.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-code" />
              <p>Master the basics of FEM modeling, including all elements.</p>
            </div>
            <div className="space-item">
              <i className="fas fa-tools" /> {/* Changed icon */}
              <p>
                Understand the essential components and load transfer mechanisms
                in aircraft structures.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-rocket" /> {/* Changed icon */}
              <p>
                Gain insights into real-world industry applications and how to
                model complex systems effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achieve;
