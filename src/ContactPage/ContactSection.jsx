import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactSection() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          form.current.reset();
          setIsLoading(false);

          toast.success(
            "Thank you for reaching out! We'll be in touch soon to assist you!",
            {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Flip,
              className: "custom-toast", // Apply custom class for styling
            }
          );
        },
        (error) => {
          setIsLoading(false);

          toast.error("Error sending message. Please try again.", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
            className: "custom-toast", // Apply custom class for styling
          });
        }
      );
  };

  return (
    <>
      <div className="contact-container mt-3 mb-3">
        {/* Left Side Content */}
        <div className="contact-left-section">
          <h2>Contact Us</h2>
          <p>Need support? We’re just a message away!</p>
          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-icon">📞</span>
              <span>
                <span className="highlight">Give us a Ring !!</span>
                <br />
                <strong style={{ color: "#E6E6FA" }}>+91 9176209914</strong>
              </span>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">✉️</span>
              <span>
                <span className="highlight">Write to us !!</span>
                <br />
                <strong style={{ color: "#E6E6FA" }}>
                  info@aeroinedutech.in
                </strong>
              </span>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">📍</span>
              <span>
                <span className="highlight">Visit us in Chennai @</span>
                <br />
                <strong style={{ color: "#E6E6FA" }}>
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
          <form className="contact-form mt-4" ref={form} onSubmit={sendEmail}>
            {/* Mandatory Field: Name */}
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />

            {/* Mandatory Field: E-mail */}
            <label htmlFor="email">E-mail ID *</label>
            <input type="email" id="email" name="email" required />

            {/* Mandatory Field: Contact Number */}
            <label htmlFor="contact">Contact Number *</label>
            <input type="tel" id="contact" name="contact" required />

            {/* Optional Field: Message */}
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />

            {/* Submit Button */}
            <button type="submit" className="mt-3" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <ToastContainer
          position="top-center" 
          autoClose={1500}
          hideProgressBar={true}
          closeOnClick
          pauseOnHover
          draggable
          progress={undefined}
          theme="colored"
          className="custom-toast-container" 
        />
      </div>
    </>
  );
}

export default ContactSection;
