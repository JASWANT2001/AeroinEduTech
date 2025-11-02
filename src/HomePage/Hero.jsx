import React, { useEffect } from "react";
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
        transition={{ duration: 0 }}
      >

        <iframe
          className="hero-iframe"
          // src="https://imagekit.io/player/embed/glvwzrukg/Aeroin%20New%20Upgrades/1851190-uhd_3840_2160_25fps.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1760237413100&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fglvwzrukg%2FAeroin%2520New%2520Upgrades%2F1851190-uhd_3840_2160_25fps.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1760237413100&updatedAt=1760237413100" 
          src="https://imagekit.io/player/embed/glvwzrukg/Aeroin%20New%20Upgrades/856857-uhd_4096_2160_30fps.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1760236618185&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fglvwzrukg%2FAeroin%2520New%2520Upgrades%2F856857-uhd_4096_2160_30fps.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1760236618185&updatedAt=1760236618185" 
          title="Hero Video"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />

        <div className="container">
          <div className="row">
            {/* Hero Content */}
            <motion.div
              className="hero-content"
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ delay: 0, duration: 0 }}
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
          transition={{ delay: 0, duration: 0.5 }}
        >
          <span>Empowering Space EduTech</span>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Hero;
