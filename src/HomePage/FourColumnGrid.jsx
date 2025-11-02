import React from "react";

function FourColumnGrid() {
  const handleNavigation = () => {
    window.location.href = "/course";
  };

  return (
    <>
      <div className="grid-section" >
        <section className="aeroin-edutech-grid">
          <article
            className="grid-item"
            onClick={handleNavigation}
            aria-label="Research Program"
          >
            <h3>
              <i className="fas fa-flask" aria-hidden="true" />
              Research Program
            </h3>
            <ul>
              <li>Collaborate with experts in space tech</li>
              <li>Hands-on satellite &amp; propulsion experience</li>
              <li>In-depth research opportunities</li>
            </ul>
          </article>
          <article
            className="grid-item"
            onClick={handleNavigation}
            aria-label="LIVE Sessions"
          >
            <h3>
              <i className="fas fa-video" aria-hidden="true" />
              LIVE Sessions
            </h3>
            <ul>
              <li>Interactive sessions with space professionals</li>
              <li>Learn about satellite deployment &amp; propulsion</li>
              <li>Engage in live Q&amp;A with experts</li>
            </ul>
          </article>
          <article
            className="grid-item"
            onClick={handleNavigation}
            aria-label="Focused Learning"
          >
            <h3>
              <i className="fas fa-graduation-cap" aria-hidden="true" />
              Focused Learning
            </h3>
            <ul>
              <li>Comprehensive space technology curriculum</li>
              <li>Focus on satellite systems and propulsion</li>
              <li>Tailored for future space professionals</li>
            </ul>
          </article>
          <article
            className="grid-item"
            onClick={handleNavigation}
            aria-label="Practical Projects"
          >
            <h3>
              <i className="fas fa-cogs" aria-hidden="true" />
              Practical Projects
            </h3>
            <ul>
              <li>Hands-on experience with CubeSat building</li>
              <li>Work on drones and real-world projects</li>
              <li>Industry-led guidance in space innovation</li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}

export default FourColumnGrid;
