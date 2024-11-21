import Course from "./CoursePage/Course";
import Home from "./HomePage/Home";
import About from "./AboutPage/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./ContactPage/Contact";
import Insights from "./InsightsPage/Insights";
import Navbar from "./HomePage/Navbar";
import Footer from "./HomePage/Footer";
import RocketPropulsion from "./ListOfCourses/Rocket/RocketPropulsion.jsx";
import CubeSatTech from "./ListOfCourses/CubeSat/CubeSatTech.jsx";
import StressAnalysis from "./ListOfCourses/StressAnalysis/StressAnalysis.jsx";
import DesignandSimulation from "./ListOfCourses/Design&Simulation/DesignandSimulation.jsx";
import PrivacyPolicy from "./PoliciesPage/PrivacyPolicy.jsx";
import TermsAndCondition from "./PoliciesPage/TermsAndCondition.jsx";
import RefundPolicy from "./PoliciesPage/RefundPolicy.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course" element={<Course />}></Route>

          {/* List Of Courses */}
          <Route path="/course/rocket" element={<RocketPropulsion />}></Route>
          <Route path="/course/cubesat" element={<CubeSatTech />}></Route>
          <Route path="/course/stressanalysis" element={<StressAnalysis />}></Route>
          <Route path="/course/simulation" element={<DesignandSimulation />}></Route>

          {/* Navbar Items */}
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/insights" element={<Insights />}></Route>

          {/* Policies */}
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
          <Route path="/termsandcondition" element={<TermsAndCondition/>}></Route>
          <Route path="/refund-policy" element={<RefundPolicy/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
