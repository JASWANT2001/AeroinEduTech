import React from "react";
import StressOverview from "./StressOverview";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import SkillsGain from "./SkillsGain";
import CertificationSection from "./CertificationSection";
import Achieve from "./Achieve";
import CoursePlan from "./CoursePlan";
import FeedBack from "../../HomePage/FeedBack";
import PlanEnquiry from "../../CoursePage/PlanEnquiry";
import WhatsApp from "../../assets/Whatsapp";

function StressAnalysis() {
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
      <StressOverview />
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

export default StressAnalysis;
