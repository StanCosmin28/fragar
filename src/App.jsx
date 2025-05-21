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
import BlogCard from "./Components/BlogCard";
import StackedCardsSlider from "./Components/StackedCardsSlider";
import ProjectsNavigation from "./Components/ProjectsNavigation";
import ProjectsHeader from "./Components/ProjectsHeader";

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
          path="fragar/proiecte"
          element={
            <>
              <ProjectsNavigation />
              <ProjectsHeader />
              <CTASection />
              <Footer />
            </>
          }
        />
        {/* <Route path="/projects/:id" element={<Projects />} /> */}
      </Routes>
    </Router>
    // <>
    //   <Navbar />
    //   <HeaderSection />
    //   <Solutions />
    //   <AboutUs />
    //   <Services />
    //   <Mission />
    //   <WhatWeOffer />
    //   <StackedCardsSlider />
    //   <BlogCard />
    //   <CTASection />
    //   {/* <BlogSliders /> */}
    //   <Footer />
    // </>
  );
}

export default App;
