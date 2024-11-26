import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lottie from "lottie-react";
import Navbar from "./HomePage/Navbar";
import Footer from "./HomePage/Footer";
import Home from "./HomePage/Home";
import Course from "./CoursePage/Course";
import About from "./AboutPage/About";
import Contact from "./ContactPage/Contact";
import Insights from "./InsightsPage/Insights";
import RocketPropulsion from "./ListOfCourses/Rocket/RocketPropulsion.jsx";
import CubeSatTech from "./ListOfCourses/CubeSat/CubeSatTech.jsx";
import StressAnalysis from "./ListOfCourses/StressAnalysis/StressAnalysis.jsx";
import DesignandSimulation from "./ListOfCourses/Design&Simulation/DesignandSimulation.jsx";
import PrivacyPolicy from "./PoliciesPage/PrivacyPolicy.jsx";
import TermsAndCondition from "./PoliciesPage/TermsAndCondition.jsx";
import RefundPolicy from "./PoliciesPage/RefundPolicy.jsx";

// Lottie JSON animation
import SpaceLoader from "./assets/Space-Animation.json"
import WhatsApp from "./assets/Whatsapp.jsx";
import ComingSoon from "./ComingSoon.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        // Preloader with Lottie animation
        <div className="preloader">
          <Lottie animationData={SpaceLoader} style={{ height: 400 }} />
          <h2 className="loading-text"></h2>
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />

            {/* List Of Courses */}
            <Route path="/course/rocket" element={<RocketPropulsion />} />
            <Route path="/course/cubesat" element={<CubeSatTech />} />
            <Route path="/course/stressanalysis" element={<StressAnalysis />} />
            <Route path="/course/simulation" element={<DesignandSimulation />}
            />

            {/* Policies */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/termsandcondition" element={<TermsAndCondition />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
          </Routes>
          <Footer />
          <WhatsApp />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
