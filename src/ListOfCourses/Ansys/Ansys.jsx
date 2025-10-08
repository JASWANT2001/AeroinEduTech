import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AnsysOverview from "./AnsysOverview";
import CourseDetails from "./CourseDetails";
import SkillsGain from "./SkillsGain";
import CertificationSection from "./CertificationSection";
import Achieve from "./Achieve";
import CoursePlan from "./CoursePlan";
import PlanEnquiry from "../../CoursePage/PlanEnquiry";
import FeedBack from "../../HomePage/FeedBack";
import WhatsApp from "../../assets/Whatsapp";

function Ansys() {
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
      <AnsysOverview />
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

export default Ansys;
