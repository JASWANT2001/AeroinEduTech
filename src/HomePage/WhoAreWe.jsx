import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function WhoAreWe() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <section
        className="about-section"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset="150"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-start">Aeroin EduTech</h2>
              <p>
                Aeroin EduTech, the dedicated learning division of Aeroin
                SpaceTech, is your gateway to an immersive, hands-on educational
                journey in Space Science and Technology. Designed for students,
                space enthusiasts, and future industry leaders, our programs
                combine innovation and expertise to inspire and prepare learners
                for real-world opportunities in Aerospace and Astronautics.
              </p>
              <p>
                Aeroin EduTech combines theoretical knowledge with hands-on
                experience, offering students the opportunity to work on
                real-world aerospace projects. From small-lift launch vehicles
                to advanced space technologies, our programs enable learners to
                contribute to innovative aerospace solutions. We equip you with
                the essential skills to excel in the rapidly evolving space
                industry and drive future technological breakthroughs.
              </p>
              {/* <p>At Aeroin EduTech, we prioritize fostering talent and sparking creativity. Collaborating with
                  academia, industry experts, and professionals, we deliver world-class learning experiences that
                  prepare students to shape the future of space research in India and beyond.</p> */}
              {/* <div class="cta-highlight">
                  <span id="cta-typed-text"></span>
              </div> */}
              {/* <button class="btn btn-primary btn-lg cta">We not only build but also teach</button> */}
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Prototyping%20process-amico.png"
                alt="Aeroin Image"
              />
              {/* <img src="Image/vivid-rocket-starting-fly-on-black-background-illustration-generative-ai-free-photo.jpg" alt="Aeroin Image"> */}
              {/* <img src="https://img.freepik.com/free-photo/young-man-woman-protective-glasses-doing-experiments-robotics-laboratory_1268-23380.jpg?t=st=1727229279~exp=1727232879~hmac=a77bfbd3c822a5d6df5f05cae6f38480b0266cc30311d83fe0c7bf3febff405c&w=1060" alt="Aeroin Image"> */}
              {/* <img src="Image/openart-image_-JW5Jl5F_1727231278985_raw.jpg" alt="Aeroin Image"> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoAreWe;
