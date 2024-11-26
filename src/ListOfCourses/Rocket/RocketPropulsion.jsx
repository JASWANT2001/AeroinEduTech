import React, { useEffect } from "react";
import RocketOverview from "./RocketOverview";
import CourseDetails from "./CourseDetails";
import SkillsGain from "./SkillsGain";
import { useLocation } from "react-router-dom";
import CertificationSection from "./CertificationSection";
import Achieve from "./Achieve";
import CoursePlan from "./CoursePlan";
import PlanEnquiry from "../../CoursePage/PlanEnquiry";
import FeedBack from "../../HomePage/FeedBack";
import WhatsApp from "../../assets/Whatsapp";

function RocketPropulsion() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <RocketOverview />
      <CourseDetails />
      <SkillsGain />
      <CertificationSection />
      <Achieve />
      <CoursePlan />
      <PlanEnquiry />
      <FeedBack />
      <WhatsApp />
    </>
  );
}

export default RocketPropulsion;
