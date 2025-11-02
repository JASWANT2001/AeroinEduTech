import React, { useEffect } from "react";

function Achieve() {
  return (
    <>
      <div className="space-program-overview mt-5">
        <h2>Career Opportunities from This Project-Based Program</h2>
        <div className="space-content">
          <div className="space-left">
            <div className="space-item">
              <i className="fas fa-satellite" />
              <p>
                Satellite Design: Design and integrate satellite subsystems as a
                Satellite Systems Engineer.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-rocket" />
              <p>
                Mission Operations: Oversee satellite operations and
                communications.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-code" />
              <p>
                Software Development: Create and maintain software for satellite
                control and data handling.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-flask" />
              <p>
                Research: Conduct CubeSat space science research for Earth
                observation.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-cogs" />
              <p>
                Project Management: Manage satellite development projects and
                teams.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-briefcase" />
              <p>
                Entrepreneurship: Start a business in CubeSat development and
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achieve;
