import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import BlogCard from "./Components/BlogCard";
import StackedCardsSlider from "./Components/StackedCardsSlider";
import ProjectsNavigation from "./Components/ProjectsNavigation";
import ProjectsHeader from "./Components/ProjectsHeader";
import ProjectsSection from "./Components/ProjectsSection";

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
              <BlogCard />
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
      </Routes>
    </Router>
  );
}

export default App;
