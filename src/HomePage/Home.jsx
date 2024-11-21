import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Navbar";
import WhatsApp from "../assets/Whatsapp";
import Hero from "./Hero";
import Accredited from "./Accredited";
import WhoAreWe from "./WhoAreWe";
import WhatAeroinOffers from "./WhatAeroinOffers";
import FourColumnGrid from "./FourColumnGrid";
import Training from "./Training";
import FeedBack from "./FeedBack";
import Footer from "./Footer";

function Home() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Accredited />
      <WhoAreWe />
      <WhatAeroinOffers />
      <FourColumnGrid />
      <Training />
      <FeedBack />
      <WhatsApp />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
