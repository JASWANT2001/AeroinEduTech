import React, { useEffect } from "react";
import CourseDetails from "./CourseDetails";
import SkillsGain from "./SkillsGain";
import { useLocation } from "react-router-dom";
import CertificationSection from "./CertificationSection";
import Achieve from "./Achieve";
import CoursePlan from "./CoursePlan";
import PlanEnquiry from "../../CoursePage/PlanEnquiry";
import FeedBack from "../../HomePage/FeedBack";
import WhatsApp from "../../assets/Whatsapp";
import SpaceRoboticsOverview from "./SpaceRoboticsOverview";

function SpaceRobotics() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <SpaceRoboticsOverview />
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

export default SpaceRobotics;
