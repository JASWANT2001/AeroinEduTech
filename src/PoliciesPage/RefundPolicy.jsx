import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function RefundPolicy() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      once: true, // Animation happens only once
      easing: "ease-out", // Smooth easing for animations
    });
  }, []);

  return (
    <>
      <div
        className="privacy-container"
        data-aos="fade-up"
        data-aos-duration={1500}
      >
        <header className="privacy-header">
          <h1 className="privacy-title">Refund and Cancellation</h1>
          <p className="privacy-update-date">Last updated: November 04, 2024</p>
        </header>
        <section className="privacy-intro">
          <p>
            These Terms and Conditions outline the rules and regulations for the
            use of Aeroin EduTech's website, located at aeroinedutech.in. By
            accessing this website, we assume you accept these terms and
            conditions. Do not continue to use Aeroin EduTech if you do not
            agree to all the terms and conditions stated on this page.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          {/* <h2 class="section-heading">Interpretation and Definitions</h2> */}
          {/* <h3 class="subsection-heading">Interpretation</h3>  */}
          <p>
            Eligibility for Refunds To be eligible for a refund, you must
            provide proof of purchase. Refunds may be available in cases where:
          </p>
          <li>
            The service purchased was not provided or did not meet the
            description.
          </li>
          <li>
            {" "}
            Technical issues or errors on our end prevented access to the course
            or content.
          </li>
          <br />
          <h3 className="subsection-heading">Refunds are not applicable if:</h3>
          <ul className="definitions-list">
            <li>
              Access to downloadable content or online courses has been used.
            </li>
            <li>
              {" "}
              The service was accessed or partially used before the request for
              a refund.
            </li>
            <p>
              Process for Refunds Once your request for cancellation or refund
              is received, we will notify you by email about the status of your
              refund. If approved, a credit will be applied to your original
              payment method within a certain amount of days.
            </p>
          </ul>
        </section>
        <br />
        <section className="privacy-section">
          <h3 className="subsection-heading">
            Late or Missing Refunds If you haven’t received a refund yet:
          </h3>
          <br />
          <li>First, check your bank account or online statement.</li>
          <br />
          <li>
            {" "}
            Contact your credit card company, as it may take some time before
            your refund is posted.
          </li>
          <br />
          <li>
            {" "}
            Contact your bank, as there is often processing time before refunds
            are finalized.
          </li>
          <br />
          <p>
            If you’ve done all of this and still have not received your refund,
            please contact us at info@aeroinedutech.in
          </p>
          <br />
          <section className="privacy-policy">
            <h4 className="subsection-heading-small">Contact Us</h4>
            <ul>
              <li>
                <p>
                  By email:
                  <a
                    href="mailto:info@aeroinedutech.in"
                    style={{ color: "#EFEFEF" }}
                  >
                    info@aeroinedutech.in
                  </a>
                </p>
              </li>
              <li>
                <p>
                  By visiting this page on our website:
                  <a
                    href="https://aeroinedutech.in"
                    style={{ color: "#EFEFEF" }}
                    target="_blank"
                  >
                    https://aeroinedutech.in
                  </a>
                </p>
              </li>
              <p />
              <li>
                <p>
                  By phone number:
                  <a href="tel:+919176209914" style={{ color: "#EFEFEF" }}>
                    +91 9176209914
                  </a>
                </p>
              </li>
              <p />
            </ul>
          </section>
        </section>
      </div>
    </>
  );
}

export default RefundPolicy;
