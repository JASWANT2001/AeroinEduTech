import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <h3>Aeroin EduTech</h3>
          <p>
            Aeroin EduTech, a proud division of Aeroin SpaceTech Pvt. Ltd., is
            dedicated to advancing space education and innovation. We aim to
            ignite curiosity, nurture talent, and empower the next generation of
            engineers with cutting-edge knowledge and hands-on learning. Through
            world-class programs, industry-driven training, and real-world
            projects, we are shaping future leaders who will drive the next wave
            of aerospace.
          </p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/aeroin_edutech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919176209914&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp" />
            </a>
            <a
              href="https://www.linkedin.com/company/aeroin-edutech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          {/* Support Section */}

          <div className="footer-section">
            <h3>Programs</h3>
            <ul>
              <li>
                <a href="/course/rocket">Rocket Propulsion</a>
              </li>
              <li>
                <a href="/course/cubesat">CubeSat Technology</a>
              </li>
              <li>
                <a href="/course/stressanalysis">Aerospace Structures</a>
              </li>
              <li>
                <a href="/course/ansys">Aerodynamics & Shockwave</a>
              </li>
              <li>
                <a href="/course/drones">Drones and UAV's</a>
              </li>
              <li>
                <a href="/course/orbitalmechanics">Orbital Mechanics</a>
              </li>
              <li>
                <a href="/course/simulation">Design &amp; Simulation</a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h3>Get Support</h3>
            <ul>
              <li>
                {/* <i className="fas fa-phone" /> */}
                <a href="tel:+91 9176209914"> +91 9176209914</a>
              </li>
              <li>
                {/* <i className="fas fa-mobile-alt" /> */}
                <a href="/contact"> Schedule a Callback</a>
              </li>

              <li>
                {/* <i className="fas fa-envelope" /> */}
                <a href="mailto:info@aeroinedutech.in">info@aeroinedutech.in</a>
              </li>
              <li>
                {/* <i className="fab fa-whatsapp" style={{ color: "#25D366" }} /> */}
                <a
                  href="https://wa.me/919176209914?text=I%20need%20help%20with%20Aeroin%20EduTech%20services,%20please%20assist"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with Us on WhatsApp
                </a>
              </li>
              <li>
                {/* <i className="fas fa-mobile-alt" /> */}
                <a href="/course"> Learning Resources</a>
              </li>
            </ul>
          </div>

          {/* Courses Section */}

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              {/* <li>
                <a href="/about">About Us</a>
              </li> */}
              <li>
                <a href="/insights">Industry Insights</a>
              </li>
              <li>
                <a href="/course"> Learning Center</a>
              </li>
              <li>
                <a href="/about"> About Us</a>
              </li>
              <li>
                <a href="/contact"> Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy"> Privacy Policy</a>
              </li>
              <li>
                <a href="/termsandcondition"> Terms and Conditions</a>
              </li>
              <li>
                <a href="/refund-policy"> Refund and Cancellation</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div class="footer-bottom">
        <p>
          Copyright © 2025 
          <a
            href="https://aeroinedutech.in"
            rel="noopener noreferrer"
            class="footer-link"
          >
            Aeroin EduTech.
          </a>{" "}
          All Rights Reserved · Innovation in
          Space Education 
          <a
            href="https://jaswant.vercel.app"
            rel="noopener noreferrer"
            class="footer-link"
          >
            {/* Jash */}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
