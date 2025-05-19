import "./App.css";
import HeaderSection from "./Components/HeaderSection";
import Navbar from "./Components/Navbar";
import Solutions from "./Components/Solutions";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Mission from "./Components/Mission";
import WhatWeOffer from "./Components/WhatWeOffer";
import Footer from "./Components/Footer";
import CTASection from "./Components/CTASection";

function App() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <Solutions />
      <AboutUs />
      <Services />
      <Mission />
      <WhatWeOffer />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
