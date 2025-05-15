import HeaderSection from "./Components/HeaderSection";
import Navbar from "./Components/Navbar";
import "./App.css";
import Solutions from "./Components/Solutions";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <Solutions /> {/* //solutions will be inside the header , optional */}
      <Footer />
    </>
  );
}

export default App;
