import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MissionSection() {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with a default animation duration
  }, []);

  return (
    <>
      <section className="mission-vision-section">
        <div className="container">
          <div className="row">
            {/* Mission */}
            <div
              className="col-lg-6 mission-box"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="mission-content">
                <h2 className="section-title text-center mb-4">Our Mission</h2>
                <p className="section-description">
                  At Aeroin EduTech, our mission is to revolutionize space
                  education by blending innovative technology with interactive
                  learning. We are dedicated to fostering curiosity and sparking
                  a passion for aerospace and space sciences. Through our
                  advanced educational platforms and hands-on experiences, we
                  strive to deliver immersive learning solutions that empower
                  the next generation of space enthusiasts and innovators. Our
                  goal is to create an environment where learners can explore,
                  experiment, and excel in the realm of space technology, paving
                  the way for groundbreaking discoveries and advancements.
                </p>
              </div>
            </div>
            {/* Vision */}
            <div
              className="col-lg-6 vision-box"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="vision-content">
                <h2 className="section-title text-center mb-4">Our Vision</h2>
                <p className="section-description">
                  At Aeroin EduTech, we envision a future where space education
                  is seamlessly integrated with cutting-edge technology and
                  interactive learning experiences. Our goal is to become a
                  global leader in aerospace education by providing innovative,
                  accessible, and transformative learning solutions. We aspire
                  to inspire and equip learners of all ages with the knowledge
                  and skills necessary to drive advancements in space science
                  and technology. Through our commitment to excellence and
                  continuous innovation, we aim to empower a new generation of
                  space explorers and tech pioneers who will shape the future of
                  the cosmos and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MissionSection;
