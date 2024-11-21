import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Training() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      once: true, // Animation happens only once
      easing: "ease-out", // Smooth easing for animations
    });
  }, []);

  return (
    <>
      <section className="training-section">
        <div className="container">
          <div className="heading" data-aos="fade-up" data-aos-duration="1500">
            <h2>India’s Leading Space Tech Education</h2>
            <p>
              Leading the way in Space Education, Aeroin EduTech offers
              unparalleled training in the most advanced aerospace technologies.
            </p>
          </div>

          {/* Stats Boxes */}
          <div className="stats-row">
            <div
              className="stat-box"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="stat-icon">
                <i className="fas fa-user-graduate" />
              </div>
              <h3>6000+</h3>
              <p>Learners &amp; Counting</p>
            </div>

            <div
              className="stat-box"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="stat-icon">
                <i className="fas fa-rocket" />
              </div>
              <h3>44+</h3>
              <p>Internship &amp; Training</p>
            </div>

            <div
              className="stat-box"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="stat-icon">
                <i className="fas fa-user-tie" />
              </div>
              <h3>10+</h3>
              <p>Expert Mentors</p>
            </div>

            <div
              className="stat-box"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              <div className="stat-icon">
                <i className="fas fa-microphone-alt" />
              </div>
              <h3>15+</h3>
              <p>Space Talks Delivered</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Training;
