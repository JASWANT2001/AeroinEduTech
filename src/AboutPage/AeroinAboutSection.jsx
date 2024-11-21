import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AeroinAboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Global animation duration
      once: true, // Animate only once when the element enters the viewport
    });
  }, []);

  return (
    <>
      <section className="company-intro-section" data-aos="fade-up">
        <div className="company-intro-container">
          {/* Left Photo Gallery Section */}
          <div
            className="company-intro-left"
            data-aos="fade-right" // Animation for the gallery
            data-aos-delay="200"
          >
            <div className="photo-gallery">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/About%20Page%20Content/Pondy%20startup%20conference.JPG"
                alt="Gallery Image 1"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <img
                src="src/AboutPage/Image/1709281378046.jpg"
                alt="Gallery Image 2"
                data-aos="zoom-in" // Specific animation for this image
                data-aos-delay="400"
              />
              <img
                src="src/AboutPage/Image/IMG_20240424_170839.jpg"
                alt="Gallery Image 3"
                style={{ objectFit: "fill", objectPosition: "center" }}
                data-aos="zoom-in"
                data-aos-delay="600"
              />
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/About%20Page%20Content/about_img.jpg"
                alt="Gallery Image 4"
                data-aos="zoom-in"
                data-aos-delay="800"
              />
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/About%20Page%20Content/1709281245235.jpg"
                alt="Gallery Image 5"
                data-aos="zoom-in"
                data-aos-delay="1000"
              />
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/About%20Page%20Content/RISE%202.jpg"
                alt="Gallery Image 6"
                style={{ objectFit: "fill", objectPosition: "bottom" }}
                data-aos="zoom-in"
                data-aos-delay="1200"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div
            className="company-intro-right"
            data-aos="fade-left" // Animation for the text content
            data-aos-delay="300"
          >
            <p>
              Aeroin EduTech is leading the way in Aerospace Education in India,
              offering state-of-the-art internships, training, workshops, and
              courses in Rocket Science, CubeSats, Drones, and Space Robotics.
              Our goal is to equip the next generation with the skills and
              knowledge to excel in the aerospace industry.
            </p>
            <p>
              Our initiatives include educating students and space enthusiasts
              about Aerospace, Aeronautics, Cosmology, and Astronomy. We offer
              internship programs that provide practical experience and support
              research paper publications.
            </p>
            <p>
              We strive to foster a vibrant aerospace community by providing
              valuable resources, networking opportunities, and professional
              development. We actively engage in international conferences,
              taking students as volunteers to represent us, and conduct
              workshops on Aerospace and Aeronautics across schools, colleges,
              and universities.
            </p>
            <p>
              Join us in this transformative journey of aerospace education and
              innovation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AeroinAboutSection;
