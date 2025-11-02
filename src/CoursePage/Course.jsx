import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import AOS from "aos";
// import "aos/dist/aos.css";

import OverviewPage from "./OverviewPage";
import Aboutus from "./Aboutus";
import CourseDisplay from "./CourseDisplay";
import PlanEnquiry from "./PlanEnquiry";
import VerticalColumn from "./VerticalColumn";
import { Outlet } from "react-router-dom";
import WhatsApp from "../assets/Whatsapp";

function Course() {
  return (
    <>
      {/* <Outlet /> */}
      <OverviewPage />
      <Aboutus />
      <CourseDisplay />
      <PlanEnquiry />
      <VerticalColumn />
      <WhatsApp />
    </>
  );
}

export default Course;
