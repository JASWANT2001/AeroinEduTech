import React, { useState, useEffect } from "react";

function TeamGallery() {
  const [activeTab, setActiveTab] = useState("team"); // Default active tab

  // Function to handle tab switching
  const showTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="gallery-section">
        <h1>Aeroin Insights</h1>
        <p>
          Discover the latest developments, collaborations, and achievements of
          Aeroin EduTech. From groundbreaking projects and team highlights to
          inspiring events and partnerships with educational institutions,
          explore how we're shaping the future of space education and
          technology.
        </p>
        <div className="gallery-nav">
          <button
            className={`tab-button ${activeTab === "team" ? "active" : ""}`}
            onClick={() => showTab("team")}
          >
            Our Crew
          </button>
          <button
            className={`tab-button ${activeTab === "events" ? "active" : ""}`}
            onClick={() => showTab("events")}
          >
            Events
          </button>
        </div>
        <div
          className="gallery-content"
          id="team"
          style={{ display: activeTab === "team" ? "block" : "none" }}
        >
          <div className="image-grid">
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Team%20Content/1711445330188.jpg"
                alt="Team Image 1"
              />
              <div className="overlay">
                <div className="overlay-text">
                  Advancing Space Technology through Innovation and
                  Collaboration
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Team%20Content/team%20(3).jpg"
                alt="Team Image 2"
              />
              <div className="overlay">
                <div className="overlay-text">
                  Team Aeroin joined the Indian DefSpace Symposium in New Delhi,
                  engaging with startups and space defense leaders.
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Team%20Content/ourcrew.png"
                alt="Team Image 3"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div className="overlay">
                <div className="overlay-text">
                  Excited to Welcome Hyderabad students to Aeroin SpaceTech for
                  hands-on Aerospace experience.
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Team%20Content/team(5).png"
                alt="Team Image 4"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
              <div className="overlay">
                <div className="overlay-text">
                  Team Aeroin provided 6 month Research Internship and Training.
                  These talented individuals have been instrumental in
                  #ProjectAeroinXs.
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Team%20Content/team(6).png"
                alt="Team Image 5"
              />
              <div className="overlay">
                <div className="overlay-text">
                  We proudly recognize six exceptional students from Periyar
                  Maniammai Institute of Science and Technology for successfully
                  completing their one-month Research Training and Internship
                  with AeroinEduTech.
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Team%20Content/crew.jpeg"
                alt="Team Image 6"
              />
              <div className="overlay">
                <div className="overlay-text">
                  Heartwarming to hear from our former interns as they gear up
                  for NASA's Rover Challenge, inspired by their journey at
                  Aeroin SpaceTech!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="gallery-content"
          id="events"
          style={{ display: activeTab === "events" ? "block" : "none" }}
        >
          <div className="image-grid">
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/SNS%20Collab.jpeg"
                alt="SNS Cheif Guest"
                style={{ objectFit: "fill" }}
              />
              <div className="overlay">
                <div className="overlay-text">
                  Our CEO, Mr. Ragul, was honored to be invited as the Chief
                  Guest to inaugurate the Avionz Association at the Department
                  of Aerospace, SNS Institutions.
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/isor_award_2.png"
                alt="ISRO EVENT"
              />
              <div className="overlay">
                <div className="overlay-text">
                  Our CEO delivered a talk on National Space Day - 2024
                  conducted by Satish Dhawan Space Centre -SHAR- ISRO.
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/mou.png"
                alt="MOU"
              />
              <div className="overlay">
                <div className="overlay-text">
                  Aeroin has signed an MoU with Indoplanetx Space Vault Research
                  Pvt. Ltd. to collaborate on developing advanced space
                  technology.
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/hcet.jpeg"
                alt="HICET"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="overlay-text">
                  Aeroin signed an MoU with Hindustan College Of Engineering And
                  Technology, Coimbatore.
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/aws.jpeg"
                alt="Space Expo"
              />
              <div className="overlay">
                <div className="overlay-text">
                  Excited to be part of India's 1st Space Accelerator Program by
                  AWS, T-Hub, and Minfy, as we accelerate space tech innovation
                  at Aeroin SpaceTech!
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/Rocket-factory.jpeg"
                alt="Rocket Factory MoU Signed"
              />
              <div className="overlay">
                <div className="overlay-text">
                  Aeroin SpaceTech proudly signs an MoU with Rocket Factory
                  India to revolutionize aerospace education through practical
                  innovation!
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/kct_guest.webp"
                alt=""
              />
              <div className="overlay">
                <div className="overlay-text">
                  Our CEO was the Chief Guest at "Kosmorena'23" by SEDS
                  Kumaraguru College, Coimbatore, discussing "Space Technology:
                  Innovation &amp; Technology - Shaping the Future.
                </div>
              </div>
            </div>

            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/CochinUniversity.jpg"
                alt="Cochin University"
              />
              <div className="overlay">
                <div className="overlay-text">
                  Our CEO has been invited for Key Note Speaker at India’s
                  Biggest Space Conference at Cochin University, Kerala
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/Pochampalli.jpg"
                alt="CubeSAT & RC Plane workshop"
              />
              <div className="overlay">
                <div className="overlay-text">
                  As Aeroin is Registered Space Tutor of ISRO, We conducted
                  Model CubeSAT &amp; RC Plane workshop on NATIONAL SCIENCE DAY
                  at GGHSS School, Pochampalli
                </div>
              </div>
            </div>

            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/MIT%20College.jpg"
                alt="Aero Expo, Flight’24"
              />
              <div className="overlay">
                <div className="overlay-text">
                  Aero Expo, Flight’24 Guest Lecture at Madras Institute of
                  Technology , Chennai
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/Labrat.jpeg"
                alt="Labrat design Services"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="overlay-text">
                  Proud to partner with LABRAT DESIGN SERVICES to elevate design
                  and simulation for Aeroin SpaceTech and Aeroin EduTech
                  projects!
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/svce.jpeg"
                alt="Labrat design Services"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="overlay-text">
                  Honored to inaugurate the EWB-SVCE Club at Sri Venkateswara
                  College of Engineering, inspiring innovation and empowering
                  future innovators!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamGallery;
