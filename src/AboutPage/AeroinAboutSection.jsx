import React, { useEffect } from "react";

import about2 from "./Image/1709281378046.jpg";
import about3 from "./Image/IMG_20240424_170839.jpg";

function AeroinAboutSection() {
  return (
    <>
      <section className="company-intro-section mb-5">
        <div className="company-intro-container">
          {/* Left Photo Gallery Section */}
          <div className="company-intro-left">
            <div className="photo-gallery">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/About%20Page%20Content/Pondy%20startup%20conference.JPG"
                alt="Pondy Startup Conference - Aeroin EduTech"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <img src={about2} alt="Aerospace Training Event" />
              <img
                src="https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/1737983071864.jpeg"
                alt="Aeroin Space Robotics Workshop"
                style={{ objectFit: "fill", objectPosition: "center" }}
              />
              <img
                src="https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/1739624749876.jpeg"
                alt="Advanced Rocket Science Workshop"
              />
              <img
                src="https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/1759234817379.jpeg"
                alt="CubeSat Development Session"
              />
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/About%20Page%20Content/RISE%202.jpg"
                alt="RISE International Conference - Aeroin EduTech"
                style={{ objectFit: "fill", objectPosition: "bottom" }}
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="company-intro-right">
            <p>
              <strong>Aeroin EduTech</strong> is a trailblazer in Aerospace and
              Space Science Education, revolutionizing learning in{" "}
              <strong>
                Rocket Science, CubeSat Engineering, Stress Analysis
              </strong>
              , and <strong>Design & Simulation</strong>. We empower the next
              generation of aerospace professionals with cutting-edge
              internships, hands-on training, and comprehensive courses.
            </p>
            <p>
              Our mission is to cultivate a deeper understanding of{" "}
              <strong>Aerospace Engineering, Aeronautics, Cosmology, </strong>
              and <strong>Space Exploration</strong> through innovative
              programs. Students and space enthusiasts gain practical skills and
              real-world experience, including guidance on{" "}
              <strong>research paper publications</strong>.
            </p>
            <p>
              We actively contribute to the global aerospace community by
              fostering innovation, hosting international conferences, and
              organizing professional workshops in schools, colleges, and
              universities.
            </p>
            <p>
              "Be a part of Aeroin EduTech, where learning meets exploration."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AeroinAboutSection;
