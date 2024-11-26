import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is included
import { Link } from "react-router-dom";

function CarouselSection() {
  return (
    <>
      <div
        id="aboutCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link
              to="/course/simulation"
              aria-label="Explore space simulation course"
            >
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Carousel%20Content/Banner4.png?updatedAt=1731895399616"
                className="d-block w-100"
                alt="Space simulation course banner"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link
              to="/course/cubesat"
              aria-label="Learn about CubeSat satellite design course"
            >
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Carousel%20Content/Banner2.png?updatedAt=1731895398468"
                className="d-block w-100"
                alt="CubeSat course banner"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link
              to="/course/stressanalysis"
              aria-label="Discover stress analysis for structural engineering"
            >
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Carousel%20Content/Banner3.png?updatedAt=1731895399190"
                className="d-block w-100"
                alt="Stress analysis course banner"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link
              to="/course/rocket"
              aria-label="Enroll in rocket engineering and design course"
            >
              <img
                src="https://ik.imagekit.io/cjh0dpnmu/Carousel%20Content/Banner1.png?updatedAt=1731895399578"
                className="d-block w-100"
                alt="Rocket engineering course banner"
              />
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide="prev"
          data-aos="fade-in" // Animate the "Previous" button
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
          data-aos="fade-in" // Animate the "Next" button
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
