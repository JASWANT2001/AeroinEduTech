import React, { useEffect } from "react";
import design from "./Image/hero_section_planet.png";
import rocket from "./Image/rocketry.png";
import stress from "./Image/hero_section_asteroid.png";
import "../assets/aeroin.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <>
      <motion.section
        ref={ref}
        className="hero d-flex align-items-center"
        initial={{ opacity: 0, y: -350 }}
        animate={controls}
        transition={{ duration: 2.5 }}
      >
        <div className="container">
          <div className="row">
            {/* Hero Content */}
            <motion.div
              className="hero-content"
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {/* Overlay Images */}
              {/* <div className="overlay-images">
                <motion.a
                  href="drone_intern.html"
                  className="overlay-image drone-image"
                  data-hover-text="Drone Innovation"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={design} alt="Drone Innovation" />
                </motion.a>
                <motion.a
                  href="cubeSat_intern.html"
                  className="overlay-image cubesat-image"
                  data-hover-text="CubeSat Research"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                 
                </motion.a>
                <motion.a
                  href="rocketry_intern.html"
                  className="overlay-image rocketry-image"
                  data-hover-text="Rocket Propulsion"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={rocket} alt="Rocket Propulsion" />
                </motion.a>
                <motion.a
                  href="space_robotics.html"
                  className="overlay-image robotics-image"
                  data-hover-text="Space Robotics"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={stress} alt="Space Robotics" />
                </motion.a>
              </div> */}
            </motion.div>
          </div>
        </div>
        {/* Hero Text */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.0, duration: 0.5 }}
        >
          <span>Empowering Space EduTech</span>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Hero;
