import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Reduced global animation duration
      once: true, // Animate elements only once when scrolled into view
      easing: "ease-in-out", // Use lighter easing for better performance
    });
  }, []);

  const handleLinkClick = () => {
    // Close the navbar toggle when a link is clicked (for small screens)
    const navbarToggler = document.getElementById("navbarToggler");
    if (navbarToggler && !navbarToggler.classList.contains("collapsed")) {
      navbarToggler.click();
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        data-aos="fade-up"
        aria-label="Primary navigation"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" aria-label="Go to home page">
            <h1>Aeroin EduTech</h1>
          </a>
          <button
            className="navbar-toggler"
            id="navbarToggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/"}
                  aria-label="Go to home page"
                  onClick={handleLinkClick} // Close toggle on link click
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/course"}
                  aria-label="View available courses"
                  onClick={handleLinkClick} // Close toggle on link click
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/about"}
                  aria-label="Learn more about us"
                  onClick={handleLinkClick} // Close toggle on link click
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/contact"}
                  aria-label="Get in touch with us"
                  onClick={handleLinkClick} // Close toggle on link click
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/insights"}
                  aria-label="Explore insights"
                  onClick={handleLinkClick} // Close toggle on link click
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
