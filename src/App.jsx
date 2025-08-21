import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { HashRouter as Router, Routes, Route } from "react-router-dom"; // change this || HasRouter is for GitHub Pages bcs there is no server to the app || on plesk you can use BrowserRouter
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
// import ProjectDescription from "./Components/ProjectDescription";

// import projects from "./Model/euroProjects";
// import ProjectsList from "./Components/ProjectList";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/fragar"
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
          path="/fragar/proiecte"
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

        {/* <Route
          path="/fragar/noutati"
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
          path="/fragar/noutati/:id"
          element={
            <>
              <ProjectsNavigation />
              <ProjectDescription data={projects} />
              <CTASection />
              <Footer />
            </>
          }
        /> */}
        <Route
          path="/fragar/noutati"
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
          path="/fragar/noutati/:id"
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
