import React, { useEffect } from "react";

function CoursePlan() {
  return (
    <>
      <section className="course-plans-three">
        <div className="course-plans">
          <div className="plan basic-plan">
            <h2 className="plan-title">5 - Days Master Class</h2>
            <hr className="" style={{ backgroundColor: "white" }} />
            <ul className="plan-details mt-5">
              <li>Expert-Led Live Sessions</li>
              <li>Exclusive Learning Resources</li>
              <li>Access to Recorded Content (5 Days)</li>
              <li>1-on-1 Discussion Opportunities</li>
              <li>Participation Certificate</li>
              <li>Networking Opportunities</li>
              <li>Q&amp;A Session with Industry Experts</li>
              {/* <li>Exclusive Resources</li> */}
              <li
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                  color: "#777",
                }}
              >
                Welcome Kit of Aeroin EduTech
              </li>
            </ul>
            <button
              className="purchase-button"
              onClick={() =>
                window.open("https://rzp.io/rzp/stress-analysis", "_blank")
              }
            >
              Enroll Now
            </button>
          </div>

          <div className="plan intermediate-plan">
            <h2 className="plan-title">Innovative Programs</h2>
            <hr className="" style={{ backgroundColor: "white" }} />
            <ul className="plan-details mt-5">
              <li>Live, Interactive + Recorded Content</li>
              <li>1-on-1 Mentorship with Experts</li>
              <li>Welcome Kit of Aeroin EduTech</li>
              <li>Research Intern Enrollment Incentive</li>
              <li>4 Weeks Program</li>
              <li>Program Completion Certificate</li>
              <li
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                  color: "#777",
                }}
              >
                Research Paper Support
              </li>
              <li
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                  color: "#777",
                }}
              >
                Career Talk With Experts
              </li>
            </ul>
            <button
              className="purchase-button"
              onClick={() =>
                window.open("https://rzp.io/rzp/stress-analysis", "_blank")
              }
            >
              Enroll Now
            </button>
          </div>

          <div className="plan advanced-plan">
            <h2 className="plan-title">Research Internship</h2>
            <hr className="" style={{ backgroundColor: "white" }} />
            <ul className="plan-details mt-5">
              <li>Expert-Led Research Seminars</li>
              <li>Personalized Research Guidance</li>
              <li>Welcome Kit + Join Research Team</li>
              <li>Join Our Team (Performance-Based)</li>
              <li>8 Weeks Program</li>
              <li>Internship Completion Certificate</li>
              <li>Research Paper &amp; Publishing Support</li>
              <li>Career Talk With Experts</li>
            </ul>
            <button
              className="purchase-button"
              onClick={() =>
                window.open("https://rzp.io/rzp/stress-analysis", "_blank")
              }
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoursePlan;
