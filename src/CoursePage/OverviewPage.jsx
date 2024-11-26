import React, { useEffect } from "react";

function OverviewPage() {
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
          <div className="left-content">
            <h1>Master Space Science with Experts at Aeroin EduTech</h1>
            <ul>
              <li>Learn from Top Space Industry Professionals</li>
              <li>Hands-on Experience with Space Tech Projects</li>
              <li>Earn a Globally Recognized Space Science Certification</li>
            </ul>
            <button onClick={scrollToSection} className="enquiry-button">
              Join Now
            </button>
          </div>
          <div className="right-content">
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
