import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./Hero";
import Accredited from "./Accredited";
import WhoAreWe from "./WhoAreWe";
import WhatAeroinOffers from "./WhatAeroinOffers";
import FourColumnGrid from "./FourColumnGrid";
import Training from "./Training";
import FeedBack from "./FeedBack";

import WhatsApp from "../assets/Whatsapp";
import ScrollToTop from "../assets/ScrollToTop";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Accredited />
      <WhoAreWe />
      <br />
      <br />
      <Training />
      <WhatAeroinOffers />
      <FourColumnGrid />
      <FeedBack />

      <WhatsApp />
      <ScrollToTop />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
