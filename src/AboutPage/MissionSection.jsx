import React, { useEffect } from "react";

function MissionSection() {
  return (
    <>
      <section className="mission-vision-section">
        <div className="container">
          <div className="row">
            {/* Mission */}
            <div className="col-lg-6 mission-box">
              <div className="mission-content">
                <h2 className="section-title text-center mb-4">Our Mission</h2>
                <p className="section-description">
                  At Aeroin EduTech, our mission is to transform space education
                  through cutting-edge technology and immersive learning
                  experiences. We are committed to fostering curiosity and
                  sparking a passion for aerospace and space sciences. By
                  offering hands-on aerospace education and advanced interactive
                  platforms, we aim to empower the next generation of space
                  innovators and enthusiasts. Our goal is to create an
                  environment where learners can explore, experiment, and excel
                  in the realm of space technology, driving groundbreaking
                  advancements and discoveries in the field.
                </p>
              </div>
            </div>
            {/* Vision */}
            <div className="col-lg-6 vision-box">
              <div className="vision-content">
                <h2 className="section-title text-center mb-4">Our Vision</h2>
                <p className="section-description">
                  At Aeroin EduTech, we envision a future where space education
                  seamlessly integrates with innovative platforms and
                  interactive learning tools. Our aspiration is to become a
                  global leader in aerospace education by providing accessible,
                  transformative, and cutting-edge solutions. We aim to inspire
                  and equip learners of all ages with the knowledge and skills
                  needed to advance space science and technology. Through our
                  dedication to excellence and innovation, we strive to empower
                  a new generation of space explorers and tech pioneers who will
                  shape the future of the cosmos and beyond.
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
