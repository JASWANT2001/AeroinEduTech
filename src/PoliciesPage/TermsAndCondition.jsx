import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function TermsAndCondition() {
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
        data-aos-duration="1500"
      >
        <header className="privacy-header">
          <h1 className="privacy-title">Terms Of Service</h1>
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
          <h2 className="section-heading">Interpretation and Definitions</h2>
          <h3 className="subsection-heading">Interpretation</h3>
          <p>
            Words where the initial letter is capitalized have meanings defined
            under the following conditions. These definitions apply regardless
            of whether they appear in singular or plural.
          </p>
          <h3 className="subsection-heading">Definitions</h3>
          <ul className="definitions-list">
            <li>
              <p>
                <strong>Company</strong> - Refers to AEROIN SPACETECH PRIVATE
                LIMITED, located at 1st Floor, MS Nivas, VIP Nagar, Krishnagiri,
                Tamil Nadu 635001.
              </p>
            </li>
            <li>
              <p>
                <strong>Service</strong> - Refers to the website accessible from
                https://aeroinedutech.in.
              </p>
            </li>
            <li>
              <p>
                <strong>You</strong> - Means the individual accessing or using
                the Service, or the company, or other legal entity on behalf of
                which such individual is accessing or using the Service, as
                applicable.
              </p>
            </li>
            <li>
              <p>
                <strong>Agreement</strong> - Refers to these Terms and
                Conditions and any other rules or guidelines that may be posted
                and updated on the website from time to time.
              </p>
            </li>
          </ul>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="section-heading">Acknowledgment</h2>
          <p>
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service. <br />
            <br />
            Your access to and use of the Service is conditioned on Your
            acceptance of and compliance with these Terms and Conditions. These
            Terms and Conditions apply to all visitors, users and others who
            access or use the Service.
            <br />
            <br />
            By accessing or using the Service You agree to be bound by these
            Terms and Conditions. If You disagree with any part of these Terms
            and Conditions then You may not access the Service.
            <br />
            <br />
            You represent that you are over the age of 18. The Company does not
            permit those under 18 to use the Service.
            <br />
            <br />
            Your access to and use of the Service is also conditioned on Your
            acceptance of and compliance with the Privacy Policy of the Company.
            Our Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your personal information when You
            use the Application or the Website and tells You about Your privacy
            rights and how the law protects You. Please read Our Privacy Policy
            carefully before using Our Service.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="section-heading">Usage of Our Service</h2>
          <p>
            By accessing or using the Service, you agree to comply with all
            applicable laws and regulations and not to use the Service in any
            manner that is unlawful, harassing, threatening, or otherwise
            harmful. You agree not to engage in any prohibited activity that may
            disrupt or harm the Service or its functionality.
          </p>
          <br />
        </section>
        <section className="privacy-section">
          <h2 className="section-heading">Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate,
            complete, and current information. You are responsible for
            safeguarding your account and ensuring your account details remain
            confidential.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="section-heading">Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality
            are and will remain the exclusive property of Aeroin EduTech and its
            licensors. Our trademarks may not be used in connection with any
            product or service without prior written consent.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="section-heading">Termination</h2>
          <p>
            We may terminate or suspend your access immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if you breach these Terms and Conditions. Upon
            termination, your right to use the Service will cease immediately.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="section-heading">Limitation of Liability</h2>
          <p>
            In no event shall Aeroin EduTech, nor its directors, employees, or
            affiliates, be liable for any damages resulting from the use or
            inability to use the Service, including any direct, indirect,
            incidental, consequential, or punitive damages.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="section-heading">Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of Tamil Nadu, India, without regard to its conflict of law
            provisions. Our failure to enforce any right or provision of these
            Terms will not be considered a waiver of those rights.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="subsection-heading">Disputes Resolution</h2>
          <p>
            If You have any concern or dispute about the Service, You agree to
            first try to resolve the dispute informally by contacting the
            Company.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="subsection-heading">For European Union (EU) Users</h2>
          <p>
            If You are a European Union consumer, you will benefit from any
            mandatory provisions of the law of the country in which You are
            resident.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="subsection-heading">United States Legal Compliance</h2>
          <p>
            You represent and warrant that (i) You are not located in a country
            that is subject to the United States government embargo, or that has
            been designated by the United States government as a "terrorist
            supporting" country, and (ii) You are not listed on any United
            States government list of prohibited or restricted parties.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="subsection-heading">Translation Interpretation</h2>
          <p>
            These Terms and Conditions may have been translated if We have made
            them available to You on our Service. You agree that the original
            English text shall prevail in the case of a dispute.
          </p>
        </section>
        <br />
        <section className="privacy-section">
          <h2 className="subsection-heading">Changes to These Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. By continuing to access or use our Service
            after any revisions become effective, you agree to be bound by the
            updated Terms. If you do not agree to the new terms, please stop
            using the Service.
          </p>
        </section>
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
      </div>
    </>
  );
}

export default TermsAndCondition;
