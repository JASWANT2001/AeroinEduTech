import React, { useEffect } from "react";


function RefundPolicy() {


  return (
    <>
      <div
        className="privacy-container"
      
      >
        <header className="privacy-header">
          <h1 className="privacy-title">Refund and Cancellation</h1>
          <p className="privacy-update-date">Last updated: November 22, 2024</p>
        </header>
        <section className="privacy-intro">
          <p>
            At Aeroin EduTech, we are committed to providing a seamless
            experience for our users. Please review our Refund and Cancellation
            Policy for clarity on how refunds are handled for our services.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <p>
            <strong>Eligibility for Refunds:</strong> Refunds are applicable
            under the following conditions, provided the request is made within
            7 days of purchase:
          </p>
          <ul className="definitions-list">
            <li>The purchased service was not delivered as described.</li>
            <li>
              Technical issues on our platform prevented access to the service.
            </li>
          </ul>
          <br />
          <p>
            <strong>Refunds are not applicable if:</strong>
          </p>
          <ul className="definitions-list">
            <li>
              Access to downloadable content or online courses has already been
              used.
            </li>
            <li>
              The service was accessed or partially used before the refund
              request.
            </li>
          </ul>
          <br />
          <p>
            <strong>Refund Process:</strong> To request a refund, contact us at{" "}
            <a href="mailto:info@aeroinedutech.in" style={{ color: "#EFEFEF" }}>
              info@aeroinedutech.in
            </a>{" "}
            with proof of purchase and details of your request. Once received,
            we will:
          </p>
          <ul className="definitions-list">
            <li>Notify you by email about the status of your request.</li>
            <li>
              If approved, process the refund within 6–8 working days. The
              amount will be credited back to your original payment method.
            </li>
          </ul>
        </section>
        <br />
        <section className="privacy-section">
          <h3 className="subsection-heading">Late or Missing Refunds</h3>
          <p>
            If you have not received your refund after 8 working days, please:
          </p>
          <ul className="definitions-list">
            <li>Check your bank account or online statement.</li>
            <li>
              Contact your credit card company, as processing times may vary.
            </li>
            <li>
              Contact your bank, as there may be delays in posting the refund.
            </li>
          </ul>
          <p>
            If you have done all of the above and still have not received your
            refund, please contact us at{" "}
            <a href="mailto:info@aeroinedutech.in" style={{ color: "#EFEFEF" }}>
              info@aeroinedutech.in
            </a>
            .
          </p>
        </section>
        <br />
        <section className="privacy-policy">
          <h4 className="subsection-heading-small">Contact Us</h4>
          <ul>
            <li>
              <p>
                By email:{" "}
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
                By visiting this page on our website:{" "}
                <a
                  href="https://aeroinedutech.in"
                  style={{ color: "#EFEFEF" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  www.aeroinedutech.in
                </a>
              </p>
            </li>
            <li>
              <p>
                By phone number:{" "}
                <a href="tel:+919176209914" style={{ color: "#EFEFEF" }}>
                  +91 9176209914
                </a>
              </p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default RefundPolicy;
