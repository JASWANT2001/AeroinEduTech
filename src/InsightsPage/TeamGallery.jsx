import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function TeamGallery() {
  const [activeTab, setActiveTab] = useState("team"); // Default active tab

  // Function to handle tab switching
  const showTab = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      once: true, // Animation happens only once
      easing: "ease-out", // Smooth easing for animations
    });
  }, []);

  return (
    <>
      <section
        className="gallery-section"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
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
          {/* Uncomment and add functionality for the below tab if needed */}
          {/* <button className={`tab-button ${activeTab === "hab-missions" ? "active" : ""}`} onClick={() => showTab("hab-missions")}>
            Missions
          </button> */}
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
                alt="Team Image 4"
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
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/8.png?updatedAt=1731997565402"
                alt="HICET"
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
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/Event.jpg"
                alt="Space Expo"
              />
              <div className="overlay">
                <div className="overlay-text">
                  Our CTO, Mr. Satyavrat Singh, and his team attended
                  #SpaceExpo2022 in Bangalore, engaging with top aerospace
                  leaders to foster collaboration and growth.
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Crew%20Content/event_1.jpg"
                alt="iDEX"
              />
              <div className="overlay">
                <div className="overlay-text">
                  Our CEO, MS Ragul, and CTO, Satyavrat Singh, attended the iDEX
                  challenge inauguration at Crescent College, Chennai.
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
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamGallery;
