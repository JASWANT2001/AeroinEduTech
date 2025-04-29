import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <h3>Aeroin EduTech</h3>
          <p>
            Aeroin EduTech is a division of Aeroin SpaceTech Pvt. Ltd., focused
            on space education and innovation. We are committed to inspiring the
            next generation of engineers and scientists.
          </p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
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
                <a href="/course/stressanalysis">Aircraft Structure</a>
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
                <a href="tel:+91 9176209914">📞 +91 9176209914</a>
              </li>
              <li>
                {/* <i className="fas fa-mobile-alt" /> */}
                <a href="/contact">📅 Schedule a Callback</a>
              </li>

              <li>
                {/* <i className="fas fa-envelope" /> */}
                <a href="mailto:info@aeroinedutech.in">
                  📧 info@aeroinedutech.in
                </a>
              </li>
              <li>
                {/* <i className="fab fa-whatsapp" style={{ color: "#25D366" }} /> */}
                <a
                  href="https://wa.me/919176209914?text=I%20need%20help%20with%20Aeroin%20EduTech%20services,%20please%20assist"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 Chat with Us on WhatsApp
                </a>
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
                <a href="/contact">📄 Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy">🔒 Privacy Policy</a>
              </li>
              <li>
                <a href="/termsandcondition">⚖️ Terms and Conditions</a>
              </li>
              <li>
                <a href="/refund-policy">💳 Refund and Cancellation</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div class="footer-bottom">
        <p>
          Copyright © 2024 All Rights Reserved By{" "}
          <a
            href="https://aeroinedutech.in"
            rel="noopener noreferrer"
            class="footer-link"
          >
            Aeroin EduTech
          </a>{" "}
          | Website designed by
          <a
            href="https://jaswant.vercel.app"
            rel="noopener noreferrer"
            class="footer-link"
          >
            Jash
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
