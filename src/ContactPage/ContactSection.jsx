import React from "react";

function ContactSection() {
  return (
    <>
      <div
        className="contact-container mt-3 mb-3"
        // data-aos="fade-up"
        // data-aos-duration={1500}
      >
        {/* Left Side Content */}
        <div className="contact-left-section">
          <h2>Contact Us</h2>
          <p>Need support? We’re just a message away!.</p>
          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-icon">📞</span>
              <span>
                <span className="highlight">Give us a call</span>
                <br />
                <strong>+91 9176209914</strong>
              </span>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">✉️</span>
              <span>
                <span className="highlight">Write to us</span>
                <br />
                <strong>info@aeroinedutech.in</strong>
              </span>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">📍</span>
              <span>
                <span className="highlight">Visit us in Chennai @</span>
                <br />
                <strong>
                  2nd floor, G.R.S Complex, 152, Velachery main road,
                  Pallikarnai, Chennai, Tamil Nadu 600100{" "}
                </strong>
              </span>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6834640040965!2d80.1988373!3d12.9280546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525de9adf3bd4f%3A0x8ae51d4ab2dda93b!2sAeroin%20SpaceTech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1725896359048!5m2!1sen!2sin"
                width="100%"
                height="240px"
                style={{ borderRadius: 8 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        {/* Right Side Form */}
        <div className="contact-right-section">
          <h2>Say Hello!</h2>
          <p>Ready to talk? Feel free to stop by and say Hello!</p>
          <form className="contact-form mt-5">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required="" />
            <label htmlFor="email">E-mail id *</label>
            <input type="email" id="email" name="email" required="" />
            <label htmlFor="contact">Contact Number *</label>
            <input type="tel" id="contact" name="contact" required="" />
            {/* <label for="subject">Subject *</label>
          <input type="text" id="subject" name="subject" required> */}
            <label htmlFor="message">Message </label>
            <textarea
              id="message"
              name="message"
              required=""
              defaultValue={""}
            />
            <button type="submit" className="mt-3">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
