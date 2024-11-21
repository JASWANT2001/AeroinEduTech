import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

import CarouselSection from "./CarouselSection";
import AeroinAboutSection from "./AeroinAboutSection";
import Training from "../HomePage/Training";
import BrainsSection from "./BrainsSection";
import AchievementSection from "./AchievementSection";
import PartnersSection from "./PartnersSection";
import MissionSection from "./MissionSection";
import IndustryAcademia from "./IndustryAcademia";

function About() {
  return (
    <>
      <CarouselSection />
      <AeroinAboutSection />
      <Training />
      <BrainsSection />
      <AchievementSection />
      <PartnersSection />
      <MissionSection />
      <IndustryAcademia />
    </>
  );
}

export default About;
