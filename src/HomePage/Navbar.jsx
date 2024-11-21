import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <>
      <motion.nav
        className="navbar navbar-expand-lg navbar-dark"
        initial={{ opacity: 0, y: -350 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="container-fluid">
          <motion.a
            className="navbar-brand"
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <h1>Aeroin EduTech</h1>
          </motion.a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <motion.div
            className="collapse navbar-collapse"
            id="navbarNav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <ul className="navbar-nav ml-auto">
              <motion.li
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
              >
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
              >
                <Link className="nav-link" to={"/course"}>
                  Courses
                </Link>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
              >
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
              >
                <Link className="nav-link" to={"/contact"}>
                  Contact
                </Link>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
              >
                <Link className="nav-link" to={"/insights"}>
                  Insights
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
