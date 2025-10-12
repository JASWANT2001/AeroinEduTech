import React, { useEffect } from "react";

function Training() {
  return (
    <>
      <section className="training-section">
        <div className="container">
          <div className="heading">
            <h2>India’s Leading Space Tech Education & Training</h2>
            <p>
              Leading the way in Space Education, Aeroin EduTech offers
              unparalleled training in the most advanced aerospace technologies.
            </p>
          </div>

          {/* Stats Boxes */}
          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-icon">
                <i className="fas fa-user-graduate" />
              </div>
              <h3>6500+</h3>
              <p>Space Tech Learners</p>
            </div>

            <div className="stat-box">
              <div className="stat-icon">
                <i className="fas fa-rocket" />
              </div>
              <h3>65+</h3>
              <p>Space Tech Internships</p>
            </div>

            <div className="stat-box">
              <div className="stat-icon">
                <i className="fas fa-user-tie" />
              </div>
              <h3>10+</h3>
              <p>Expert Aerospace Mentors</p>
            </div>

            <div className="stat-box">
              <div className="stat-icon">
                <i className="fas fa-microphone-alt" />
              </div>
              <h3>45+</h3>
              <p>Space Tech Talks Delivered</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Training;
