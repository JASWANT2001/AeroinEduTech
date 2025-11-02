import React, { useEffect } from "react";
import feedback from "./Image/feedback_logo.png";

function FeedBack() {
  return (
    <>
      <section className="feedback-container mt-5">
        <h2 className="text-center section-title">What Our Learners Say</h2>
        <p className="text-center mb-3 section-subtitle">
          Feedback from the New Generation of Space Innovators.
        </p>
        <div className="feedback-wrapper">
          <div className="feedback-track">
            {/* Feedback Cards */}
            <div className="feedback-card">
              <div className="feedback-top">
                <i className="fas fa-quote-right" />
              </div>
              <p className="feedback-content">
                It was a wonderful experience as a Research Intern at Aeroin
                SpaceTech Pvt Ltd. I have gained a lot of experience and
                insights on Cubesats, electronics and aerospace industry.{" "}
              </p>
              <div className="feedback-bottom">
                <img src={feedback} className="feedback-icon" />
                <h5>Piranavan R</h5>
              </div>
            </div>
            <div className="feedback-card">
              <div className="feedback-top">
                <i className="fas fa-quote-right" />
              </div>
              <p className="feedback-content">
                Such a good platform to enhance knowledge about rocket science.
                Easy and simplest way of understanding about rocket. Conferences
                and opportunity to meet resource people. CEO of the company
                being the guide to our research paper highly resourceful person
                and students friendly. I suggest all the students to get into
                this company, to get great exposure to the world of rocket
                science.
              </p>
              <div className="feedback-bottom">
                <img src={feedback} alt="Nisanth" />
                <h5>Shwetha gowda</h5>
              </div>
            </div>
            <div className="feedback-card">
              <div className="feedback-top">
                <i className="fas fa-quote-right" />
              </div>
              <p className="feedback-content">
                It was a great experience working as an research trainee at
                Aeroin spacetech pvt Ltd, management is well organized and best
                thing is CEO of the company is very interactive and helps in all
                the things. I suggest you to work with this company you will be
                having a great exposure.
              </p>
              <div className="feedback-bottom">
                <img src={feedback} alt="Arun" />
                <h5>Danny Mantero</h5>
              </div>
            </div>
            <div className="feedback-card">
              <div className="feedback-top">
                <i className="fas fa-quote-right" />
              </div>
              <p className="feedback-content">
                Excellent platform to have knowledge about rockets. CEO of the
                company being students friendly and very resourceful. He has
                been an excellent guide to me. Opportunity to interact with
                highly resourceful people, attend international conferences and
                new design softwares. I would suggest all the students
                interested in rocket science to join this company and take full
                advantage of such resourceful persons and the opportunities
                given by them.
              </p>
              <div className="feedback-bottom">
                <img src={feedback} alt="Santhosh" />
                <h5>Hemanth S</h5>
              </div>
            </div>
            <div className="feedback-card">
              <div className="feedback-top">
                <i className="fas fa-quote-right" />
              </div>
              <p className="feedback-content">
                Aeroin SpaceTech Private Limited is being a best learning
                workspace for Aerospace, Mechanical, ECS related students. Who
                really wants to get exposure of different Aerospace Technologies
                especially Propulsion, CubeSats, UAV, Rover and Space Robotics.
                As I got committed with 6 month duration which helps me to get
                overall exposure not only in technical but also business
                concepts. I recommend for others to get engaged with Aeroin page
                to get daily updates on technological development of this modern
                era. Really, Thank you #teamAeroin
              </p>
              <div className="feedback-bottom">
                <img src={feedback} alt="Ajith" />
                <h5>PA Chandru</h5>
              </div>
            </div>
            <div className="feedback-card">
              <div className="feedback-top">
                <i className="fas fa-quote-right" />
              </div>
              <p className="feedback-content">
                Had a lot of good experience and memories with the recent
                internship I had with amazing people. They are extremely
                knowledgeable and will make sure you learn and understand
                everything. You will definitely make new friends, and I’m
                confident that you will not leave disappointed.
              </p>
              <div className="feedback-bottom">
                <img src={feedback} alt="Suhail" />
                <h5>Dylan Serrao</h5>
              </div>
            </div>
            <div className="feedback-card">
              <div className="feedback-top">
                <i className="fas fa-quote-right" />
              </div>
              <p className="feedback-content">
                Completed my 30 days intership in aeroin space tech... I have
                gained lots of knowledge in satellite technology apart from that
                gained knowledge about various real time applications.. staffs
                also very friendly...Thankyou Rahul anna, Vishnu anna, Chandru
                anna, Mahesh anna for your valuable guidance.
              </p>
              <div className="feedback-bottom">
                <img src={feedback} alt="Amit Kumar" />
                <h5>Praveena Krishnan</h5>
              </div>
            </div>
            <div className="feedback-card">
              <div className="feedback-top">
                <i className="fas fa-quote-right" />
              </div>
              <p className="feedback-content">
                During my one month internship, I gained a lot of knowledge in
                satellite technology and hands-on experience. I also made good
                memories. The classes were joyful and enthusiastic, and CEO
                Rahul sir and our mentor Vishnu sir were very friendly. I am
                very happy to have been a part of Aeroin Space Tech. Thank you
                for the opportunity.
              </p>
              <div className="feedback-bottom">
                <img src={feedback} alt="Monikaa Murali" />
                <h5>Monikaa Murali</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeedBack;
