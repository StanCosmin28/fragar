import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderSection from "./Components/HeaderSection";
import Navbar from "./Components/Navbar";
import Solutions from "./Components/Solutions";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Mission from "./Components/Mission";
import WhatWeOffer from "./Components/WhatWeOffer";
import Footer from "./Components/Footer";
import CTASection from "./Components/CTASection";
// import BlogCard from "./Components/BlogCard"; // add when bms is done
import StackedCardsSlider from "./Components/StackedCardsSlider";
import ProjectsNavigation from "./Components/ProjectsNavigation";
import ProjectsHeader from "./Components/ProjectsHeader";
import ProjectsSection from "./Components/ProjectsSection";
import EuroProjects from "./Components/EuroProjects";
import NewsHeader from "./Components/NewsHeader";
import ProjectDetail from "./Components/ProjectDetails";
import ScrollToTop from "./Components/ScrollToTop";
// import ProjectDescription from "./Components/ProjectDescription";
//
// import projects from "./Model/euroProjects";
// import ProjectsList from "./Components/ProjectList";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeaderSection />
              <Solutions />
              <AboutUs />
              <Services />
              <Mission />
              <WhatWeOffer />
              <StackedCardsSlider />
              {/* <BlogCard />  // add when bms is done */}
              <CTASection />
              <Footer />
            </>
          }
        />
        <Route
          path="/proiecte"
          element={
            <>
              <ProjectsNavigation />
              <ProjectsHeader />
              <ProjectsSection />
              <CTASection />
              <Footer />
            </>
          }
        />
        <Route
          path="/noutati"
          element={
            <>
              <ProjectsNavigation />
              <NewsHeader />
              <EuroProjects />
              <CTASection />
              <Footer />
            </>
          }
        />
        <Route
          path="/noutati/:id"
          element={
            <>
              <ProjectsNavigation />
              <ProjectDetail />
              <CTASection />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
