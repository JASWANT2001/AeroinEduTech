import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CoursePlan() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 100 });
  }, []);

  return (
    <>
      <section
        className="course-plans-three"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="200"
      >
        <div className="course-plans">
          <div
            className="plan basic-plan"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <h2 className="plan-title">Free Webinar</h2>
            <hr className="" style={{ backgroundColor: "white" }} />
            <ul className="plan-details mt-5">
              <li>Free Webinar Access</li>
              <li>Expert-Led Interactions</li>
              <li>Course Discount Upon Enrollment</li>
              <li>1-on-1 Discussion Opportunities</li>
              <li>Participation Certificate</li>
              <li>Networking Opportunities</li>
              <li>Q&amp;A Session with Industry Experts</li>
              <li>Exclusive Resources</li>
            </ul>
            <button
              className="purchase-button"
              onClick={() => redirectToPayment('intermediate')}
            >
              Enroll for Free
            </button>
          </div>

          <div
            className="plan intermediate-plan"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <h2 className="plan-title">Innovative Programs</h2>
            <hr className="" style={{ backgroundColor: "white" }} />
            <ul className="plan-details mt-5">
              <li>Live, Interactive + Recorded Content</li>
              <li>1-on-1 Mentorship with Experts</li>
              <li>Welcome Kit of Aeroin EduTech</li>
              <li>Research Intern Enrollment Incentive</li>
              <li>Access To Study Materials</li>
              <li>Program Completion Certificate</li>
              <li className="strikethrough">Research Paper Support</li>
              <li className="strikethrough">Career Talk With Experts</li>
            </ul>
            <button
              className="purchase-button"
              onClick={() => redirectToPayment('advanced')}
            >
            Enroll for ₹5999
            </button>
          </div>

          <div
            className="plan advanced-plan"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            <h2 className="plan-title">Research Internship</h2>
            <hr className="" style={{ backgroundColor: "white" }} />
            <ul className="plan-details mt-5">
              <li>Expert-Led Research Seminars</li>
              <li>Personalized Research Guidance</li>
              <li>Welcome Kit + Join Research Team</li>
              <li>Join Our Team (Performance-Based)</li>
              <li>Access To Study Materials</li>
              <li>Internship Completion Certificate</li>
              <li>Research Paper &amp; Publishing Support</li>
              <li>Career Talk With Experts</li>
            </ul>
            <button className="purchase-button">Enroll for ₹9999</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoursePlan;
