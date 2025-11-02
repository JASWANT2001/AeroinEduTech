import React from "react";

const basicFeatures = [
  "Crash-Course in Cutting-Edge Skills",
  "Premium Learning Resources Pack",
  "Recordings (5-Day Access)",
  "1-on-1 Expert Consultations",
  "Exclusive Certificate in Just 5 Days",
  "High-Value Networking",
  "Hot-Seat Q&A with Industry Leaders",
];

const basicCut = ["Welcome Kit of Aeroin EduTech"];

const intermediateFeatures = [
  "Hands-On Live + Interactive Labs",
  "Exclusive 1-on-1 Mentorship Journey",
  "Welcome Kit Designed for Innovators",
  "Special Research Intern Incentive Access",
  "Program Completion Certificate",
  "Pathway to Exclusive Career Opportunities",
];
const intermediateCut = ["Research Paper Support", "Career Talk With Experts"];

const advancedFeatures = [
  "Elite Research Seminars Led by Experts",
  "Personalized Research Roadmap",
  "Join Live Research Teams",
  "Special Welcome Kit +  Research Access",
  "Performance-Based Team Inclusion",
  "Publication-Ready Paper Guidance",
  "Career Talks with Industry Veterans",
  "Option to Co-Author Case Studies",
];

function CoursePlan() {
  return (
    <>
      <section className="course-plans-three">
        <div className="course-plans">
          <div
            className="plan basic-plan"
            style={{ position: "relative", overflow: "visible" }}
          >
            {/* New Program Badge */}
            <div
              style={{
                position: "absolute",
                top: "-18px",
                left: "20px",
                background: "linear-gradient(90deg, #ff4e32, #e32a0e)", // soft gradient instead of flat
                color: "#fff",
                fontWeight: "700",
                fontSize: "0.8rem",
                padding: "6px 18px",
                borderRadius: "999px", // perfect pill shape
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                boxShadow: "0 4px 12px rgba(227,42,14,.35)",
                transform: "translateY(0)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Newly Added 🚀
            </div>

            <h2 className="plan-title">5 Days Master Class</h2>
            <hr className="" style={{ backgroundColor: "white" }} />
            <ul className="plan-details mt-5">
              {basicFeatures.map((text, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "26px 1fr",
                    gap: "12px",
                    alignItems: "start",
                    fontSize: "0.95rem",
                    color: "#eaf6ff",
                    lineHeight: "1.5",
                  }}
                >
                  <span
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      // background: "rgba(46,230,166,.18)",
                      border: "1px solid rgba(46,230,166,.55)",
                      fontWeight: "800",
                      fontSize: "0.9rem",
                      // color: "#2ee6a6",
                      background: "linear-gradient(90deg, #e32a0e, #e32a0e)", // soft gradient instead of flat
                    }}
                  >
                    ✓
                  </span>
                  {text}
                </li>
              ))}

              {basicCut.map((text, i) => (
                <li
                  key={`cut-${i}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "26px 1fr",
                    gap: "12px",
                    fontSize: "0.95rem",
                    color: "#8aa0ac",
                    textDecoration: "line-through",
                    textDecorationColor: "red",
                    lineHeight: "1.5",
                  }}
                >
                  <span
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid rgba(255,255,255,.18)",
                      color: "#cfdbe3",
                    }}
                  >
                    —
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <button
              className="purchase-button"
              onClick={() => window.open("https://pages.razorpay.com/rocket-propulsion", "_blank")}
            >
              Enroll Now
            </button>
          </div>

          <div
            className="plan intermediate-plan"
            style={{
              position: "relative",
              overflow: "visible",
              borderRadius: "8px",
              padding: "28px 26px 32px",
              background: `
      linear-gradient(
        160deg,
        
        rgba(201, 116, 85, 0.95) 0%,
        rgba(0, 0, 0, 0.95) 100%
      ),
      url("https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/full-shot-photorealistic-astronaut.jpg")
    `,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-13px",
                right: "16px",
                // backgroundColor: "#3b347cff",
                backgroundColor: "#FF6B35",
                color: "#fff",
                fontWeight: "550",
                fontSize: "0.9rem",
                padding: "4px 15px",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              4 Weeks Program
            </div>

            <h2 className="plan-title">Innovative Programs</h2>
            <hr className="" style={{ backgroundColor: "white" }} />
            <ul className="plan-details mt-5">
              {intermediateFeatures.map((text, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "26px 1fr",
                    gap: "12px",
                    alignItems: "start",
                    fontSize: "0.95rem",
                    color: "#ffece3",
                    lineHeight: "1.5",
                  }}
                >
                  <span
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "rgba(255,153,102,.18)",
                      border: "1px solid rgba(255,153,102,.55)",
                      fontWeight: "800",
                      fontSize: "0.9rem",
                      color: "#FF6B35",
                    }}
                  >
                    ✓
                  </span>
                  {text}
                </li>
              ))}

              {intermediateCut.map((text, i) => (
                <li
                  key={`cut-int-${i}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "26px 1fr",
                    gap: "12px",
                    fontSize: "0.95rem",
                    color: "#999",
                    textDecoration: "line-through",
                    textDecorationColor: "red",
                    lineHeight: "1.5",
                  }}
                >
                  <span
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid rgba(255,255,255,.18)",
                      color: "#cfdbe3",
                    }}
                  >
                    —
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <button
              className="purchase-button"
              onClick={() =>
                window.open("https://pages.razorpay.com/rocket-propulsion", "_blank")
              }
            >
              Enroll Now
            </button>
          </div>

          <div
            className="plan advanced-plan"
            style={{
    position: "relative",
    overflow: "visible",
    borderRadius: "8px",
    padding: "28px 26px 32px",
    background: `
      linear-gradient(
        160deg,
     
        rgba(94, 179, 184, 0.9) 0%,
        rgba(0, 0, 0, 0.95) 100%
      ),
      url("https://ik.imagekit.io/glvwzrukg/Aeroin%20New%20Upgrades/view-futuristic-space-rocket.jpg")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
          >
            <div
              style={{
                position: "absolute",
                top: "-13px",
                right: "16px",
                // backgroundColor: "#ef1313ff",
                backgroundColor: "#06B6D4",
                color: "#fff",
                fontWeight: "550",
                fontSize: "0.9rem",
                padding: "4px 15px",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              8 Weeks Program
            </div>

            <h2 className="plan-title">Research Internship</h2>
            <hr className="" style={{ backgroundColor: "white" }} />
            <ul className="plan-details mt-5">
              {advancedFeatures.map((text, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "26px 1fr",
                    gap: "12px",
                    alignItems: "start",
                    fontSize: "0.95rem",
                    color: "#e7fbff",
                    lineHeight: "1.5",
                  }}
                >
                  <span
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "rgba(6,182,212,.20)",
                      border: "1px solid rgba(6,182,212,.55)",
                      fontWeight: "800",
                      fontSize: "0.9rem",
                      color: "#06B6D4",
                    }}
                  >
                    ✓
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <button
              className="purchase-button"
              onClick={() =>
                window.open("https://pages.razorpay.com/rocket-propulsion", "_blank")
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
