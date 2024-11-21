import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OverviewPage() {
  useEffect(() => {
    AOS.init({
      duration: 3500, // Animation duration in milliseconds
      once: true, // Animation occurs only once
    });
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("programs-page");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="maincourse">
        <div className="split-section">
          <div
            className="left-content"
            data-aos="fade-down" // AOS animation for left content
          >
            <h1>Master Space Science with Top Experts from Aeroin EduTech</h1>
            <ul>
              <li>Guidance from Leading Space Industry Professionals</li>
              <li>Hands-on Experience with Real-World Space Projects</li>
              <li>Earn Globally Recognized Space Science Certification</li>
            </ul>
            <button onClick={scrollToSection} className="enquiry-button">
              Join Now
            </button>
          </div>
          <div
            className="right-content"
            data-aos="fade-down" // AOS animation for right content
          >
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/overviewpage.jpg"
              alt="Space Science"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OverviewPage;
