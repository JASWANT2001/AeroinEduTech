import React from "react";

function WhoAreWe() {
  return (
    <>
      <section className="about-section">
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
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Prototyping%20process-amico.png"
                alt="Aeroin Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoAreWe;
