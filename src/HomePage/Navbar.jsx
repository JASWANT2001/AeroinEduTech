import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
        aria-label="Primary navigation"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" aria-label="Go to home page">
            <img
              src="https://ik.imagekit.io/cjh0dpnmu/Logo/Edutech%20Black%20BG%20logo.jpg?updatedAt=1732635772558"
              alt="Aeroin EduTech Logo"
              className="img-fluid"
              style={{
                maxWidth: "auto",
                height: "48px", 
                objectFit: "contain", 
                objectPosition: "center",
              }}
            />
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
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/course"}
                  aria-label="View available courses"
                  onClick={handleLinkClick}
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/about"}
                  aria-label="Learn more about us"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/contact"}
                  aria-label="Get in touch with us"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/insights"}
                  aria-label="Explore insights"
                  onClick={handleLinkClick}
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
