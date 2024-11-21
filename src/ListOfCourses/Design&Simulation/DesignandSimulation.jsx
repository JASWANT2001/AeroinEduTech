import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DesignOverview from "./DesignOverview";
import CourseOverview from "./CourseOverview";
import SkillsGain from "./SkillsGain";
import CertificationSection from "./CertificationSection";
import Achieve from "./Achieve";
import CoursePlan from "./CoursePlan";
import FeedBack from "../../HomePage/FeedBack";
import PlanEnquiry from "../../CoursePage/PlanEnquiry";
import WhatsApp from "../../assets/Whatsapp";

function DesignandSimulation() {
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
      <DesignOverview />
      <CourseOverview />
      <SkillsGain />
      <CertificationSection />
      <Achieve />
      <CoursePlan />
      <PlanEnquiry />
      <FeedBack />
      <WhatsApp/>
    </>
  );
}

export default DesignandSimulation;
