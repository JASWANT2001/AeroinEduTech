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
                Conduct independent supersonic/hypersonic CFD studies and visualise shock structures.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-rocket" />
              <p>
                Solve practical shock–boundary layer interaction problems and nozzle flow cases.

              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-code" />
              <p>
                Strengthen technical communication via a final report/presentation.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item">
              <i className="fas fa-flask" />
              <p>
                Build a portfolio project suitable for academic or industry applications.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-cogs" />
              <p>
                Expand your network by working with experienced simulation engineers.
              </p>
            </div>
            <div className="space-item">
              <i className="fas fa-briefcase" />
              <p>
                Data analysis, parametric study design and technical reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achieve;
