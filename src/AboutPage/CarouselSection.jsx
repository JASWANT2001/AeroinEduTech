import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function CarouselSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Global animation duration
      once: true, // Animate only once when the element comes into view
    });
  }, []);

  return (
    <>
      <div
        id="aboutCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-aos="fade-up" // Animates the entire carousel when it enters the viewport
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-aos="fade-right">
            <Link to="/course/simulation">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Carousel%20Content/Banner4.png?updatedAt=1731895399616"
                className="d-block w-100"
                alt="Image 1"
              />
            </Link>
          </div>
          <div
            className="carousel-item"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <Link to="/course/cubesat">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Carousel%20Content/Banner2.png?updatedAt=1731895398468"
                className="d-block w-100"
                alt="Image 2"
              />
            </Link>
          </div>
          <div
            className="carousel-item"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <Link to="/course/stressanalysis">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Carousel%20Content/Banner3.png?updatedAt=1731895399190"
                className="d-block w-100"
                alt="Image 3"
              />
            </Link>
          </div>
          <div
            className="carousel-item"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <Link to="/course/rocket">
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Carousel%20Content/Banner1.png?updatedAt=1731895399578"
                className="d-block w-100"
                alt="Image 4"
              />
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide="prev"
          data-aos="fade-in" // Animates the "Previous" button
          data-aos-delay="800"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide="next"
          data-aos="fade-in" // Animates the "Next" button
          data-aos-delay="1000"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default CarouselSection;
