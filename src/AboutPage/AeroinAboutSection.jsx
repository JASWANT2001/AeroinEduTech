import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import about2 from "./Image/1709281378046.jpg";
import about3 from "./Image/IMG_20240424_170839.jpg";

function AeroinAboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Global animation duration
      once: true, // Animate only once when the element enters the viewport
    });
  }, []);

  return (
    <>
      <section className="company-intro-section mb-5" data-aos="fade-up">
        <div className="company-intro-container">
          {/* Left Photo Gallery Section */}
          <div
            className="company-intro-left"
            data-aos="fade-right" // Animation for the gallery
            data-aos-delay="200"
          >
            <div className="photo-gallery">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/About%20Page%20Content/Pondy%20startup%20conference.JPG"
                alt="Pondy Startup Conference - Aeroin EduTech"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <img
                src={about2}
                alt="Aerospace Training Event"
                data-aos="zoom-in" // Specific animation for this image
                data-aos-delay="400"
              />
              <img
                src={about3}
                alt="Aeroin Space Robotics Workshop"
                style={{ objectFit: "fill", objectPosition: "center" }}
                data-aos="zoom-in"
                data-aos-delay="600"
              />
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/About%20Page%20Content/about_img.jpg"
                alt="Advanced Rocket Science Workshop"
                data-aos="zoom-in"
                data-aos-delay="800"
              />
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/About%20Page%20Content/1709281245235.jpg"
                alt="CubeSat Development Session"
                data-aos="zoom-in"
                data-aos-delay="1000"
              />
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/About%20Page%20Content/RISE%202.jpg"
                alt="RISE International Conference - Aeroin EduTech"
                style={{ objectFit: "fill", objectPosition: "bottom" }}
                data-aos="zoom-in"
                data-aos-delay="1200"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div
            className="company-intro-right"
            data-aos="fade-left" // Animation for the text content
            data-aos-delay="300"
          >
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
