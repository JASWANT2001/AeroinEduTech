import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import SkillsGain from "./SkillsGain";
import CertificationSection from "./CertificationSection";
import Achieve from "./Achieve";
import CoursePlan from "./CoursePlan";
import PlanEnquiry from "../../CoursePage/PlanEnquiry";
import FeedBack from "../../HomePage/FeedBack";
import WhatsApp from "../../assets/Whatsapp";
import DronesOverview from "./DronesOverview";

function Drones() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, [pathname]); // Effect triggered whenever the pathname changes
  return (
    <>
      <DronesOverview/>
      <CourseDetails />
      <SkillsGain />
      <CoursePlan />
      <Achieve />
      <CertificationSection />
      <PlanEnquiry />
      <FeedBack />
      <WhatsApp />
    </>
  );
}

export default Drones;
