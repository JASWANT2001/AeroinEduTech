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
                Contribute to Space Research: Participate in cutting-edge space
                exploration.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-cogs" />
              <p>
                Work with Advanced Technologies: Get hands-on with the latest
                space tools.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-lightbulb" />
              <p>
                Solve Complex Problems: Tackle engineering challenges with
                creativity.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-users" />
              <p>
                Collaborate Across Disciplines: Strengthen teamwork with diverse
                peers.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-project-diagram" />
              <p>
                Lead Space Projects: Manage projects from concept to execution.
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
