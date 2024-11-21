import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BrainsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: true, // Animation happens only once when scrolled into view
    });
  }, []);

  return (
    <>
      <section
        className="leadership-section"
        data-aos="fade-up"
      >
        <h2 data-aos="fade-right" data-aos-delay="200">
          Brains Behind the Mission
        </h2>
        <p data-aos="fade-right" data-aos-delay="400">
          Experts Shaping the Future of Space Education and Inspiring Tomorrow's
          Aerospace Leaders.
        </p>
        <div
          className="leadership-container"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="leader-box" data-aos="zoom-in" data-aos-delay="800">
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/Linkedin%20Content/ragul_pic.JPG?updatedAt=1731902174809"
              alt="Founder 1"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <p>MS Ragul </p>
            <p> Founder &amp; CEO</p>
            <a href="https://www.linkedin.com/in/ragulms" target="_blank">
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <div className="leader-box" data-aos="zoom-in" data-aos-delay="1000">
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/Linkedin%20Content/VISHNU%20PRAKASH.jpg?updatedAt=1731902174635"
              alt="Operational Manager"
              style={{ objectFit: "cover", objectPosition: "0 45%" }}
            />
            <p>Vishnu Prakash </p>
            <p>Operational Manager</p>
            <a
              href="https://www.linkedin.com/in/vishnuprakashb"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <div className="leader-box" data-aos="zoom-in" data-aos-delay="1200">
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/Linkedin%20Content/nahla.webp?updatedAt=1731902173484"
              alt="Business Development Executive"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <p>Nahla Rasheed</p>
            <p>Business Development Executive</p>
            <a href="https://www.linkedin.com/in/nahla-rasheed" target="_blank">
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <div className="leader-box" data-aos="zoom-in" data-aos-delay="1400">
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/Linkedin%20Content/Thirunavukarasu_JPG.webp?updatedAt=1731902173223"
              alt="Public Relations Officer"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <p>Thiru R</p>
            <p>Public Relations Officer</p>
            <a
              href="https://www.linkedin.com/in/thirunavukkarasu-r-9b2719227"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
        <br />
        <br />
        <div
          className="leadership-container"
          data-aos="fade-up"
          data-aos-delay="1600"
        >
          <div className="leader-box" data-aos="zoom-in" data-aos-delay="1500">
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/Linkedin%20Content/mdabdulah.webp?updatedAt=1731902173720"
              alt="Project Associate"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <p>MD Abdullah </p>
            <p>Project Associate</p>
            <a
              href="https://www.linkedin.com/in/mohamed-abdullah-k-186478235"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <div className="leader-box" data-aos="zoom-in" data-aos-delay="2000">
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/Linkedin%20Content/parthiv.webp?updatedAt=1731902173523"
              alt="CAD / CAM - Engineer"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <p> Parthiv</p>
            <p>CAD / CAM - Engineer</p>
            <a
              href="https://www.linkedin.com/in/parthiv-manepalli-b1b7a5169"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <div className="leader-box" data-aos="zoom-in" data-aos-delay="2200">
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/Linkedin%20Content/satyavignesh.webp?updatedAt=1731902173213"
              alt="Structural Engineer"
              style={{ objectFit: "cover", objectPosition: "bottom" }}
            />
            <p>Satya Vighnesh</p>
            <p>Structural Engineer</p>
            <a
              href="https://www.linkedin.com/in/pardha-satya-vighnesh-kella-34097b192"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <div className="leader-box" data-aos="zoom-in" data-aos-delay="2400">
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/Linkedin%20Content/chandru.webp?updatedAt=1731902173864"
              alt="Design Engineer"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <p>Chandru P A</p>
            <p>Design Engineer</p>
            <a
              href="https://www.linkedin.com/in/chandru-p-a-7287032a4"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default BrainsSection;
