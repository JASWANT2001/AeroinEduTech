import React, { useEffect } from "react";


function TermsAndCondition() {
  
  return (
    <>
      <div
        className="privacy-container"
        
      >
        <header className="privacy-header">
          <h1 className="privacy-title">Terms of Service</h1>
          <p className="privacy-update-date">Last Updated: November 04, 2024</p>
        </header>
        <section className="privacy-intro">
          <p>
            Welcome to Aeroin EduTech! These Terms of Service ("Terms") govern
            your use of our website located at{" "}
            <a
              href="www.aeroinedutech.in"
              style={{ color: "#EFEFEF" }}
              target="_blank"
              rel="noreferrer"
            >
              www.aeroinedutech.in
            </a>{" "}
            and any services we offer. By accessing or using our website, you
            agree to comply with and be bound by these Terms. If you do not
            agree, please discontinue use immediately.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="section-heading">Interpretation and Definitions</h2>
          <h3 className="subsection-heading">Interpretation</h3>
          <p>
            Words with initial capitalization have specific meanings. The
            following definitions apply whether the words appear in singular or
            plural forms.
          </p>
          <h3 className="subsection-heading">Definitions</h3>
          <ul className="definitions-list">
            <li>
              <p>
                <strong>Company</strong> refers to Aeroin SpaceTech Private
                Limited, located at 1st Floor, MS Nivas, VIP Nagar, Krishnagiri,
                Tamil Nadu 635001.
              </p>
            </li>
            <li>
              <p>
                <strong>Service</strong> refers to the website accessible at{" "}
                <a
                  href="www.aeroinedutech.in"
                  style={{ color: "#EFEFEF" }}
                  target="_blank"
                  rel="noreferrer"
                >
                 www.aeroinedutech.in
                </a>
                .
              </p>
            </li>
            <li>
              <p>
                <strong>You</strong> refers to the individual accessing or using
                the Service, or the company or legal entity on whose behalf the
                individual accesses the Service.
              </p>
            </li>
            <li>
              <p>
                <strong>Agreement</strong> refers to these Terms of Service and
                any guidelines or rules posted by the Company.
              </p>
            </li>
          </ul>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="section-heading">Your Obligations</h2>
          <p>By using our Service, you agree to the following:</p>
          <ul>
            <li>You will comply with all applicable laws and regulations.</li>
            <li>
              You will not use our Service for any unauthorized, unlawful, or
              harmful activity.
            </li>
            <li>
              You will ensure that any information provided to us is accurate
              and up-to-date.
            </li>
          </ul>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="section-heading">Accounts</h2>
          <p>
            To access some parts of our Service, you may need to create an
            account. You are responsible for maintaining the confidentiality of
            your account and for all activities that occur under it. Notify us
            immediately if you suspect unauthorized access.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="section-heading">Intellectual Property</h2>
          <p>
            All content, trademarks, and intellectual property on our website
            are owned by Aeroin EduTech or its licensors. You may not use our
            materials without prior written consent.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="section-heading">Termination</h2>
          <p>
            We may terminate or suspend your access to our Service if you breach
            these Terms. Upon termination, your rights to use the Service will
            cease immediately.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="section-heading">Limitation of Liability</h2>
          <p>
            Aeroin EduTech and its affiliates are not liable for any indirect,
            incidental, or consequential damages arising from your use of our
            Service.
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

export default TermsAndCondition;
