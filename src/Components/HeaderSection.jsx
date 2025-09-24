import { useState } from "react";
import data from "../Model/data";

export default function HeaderSection() {
  const [showPopup, setShowPopup] = useState(false);

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const handleConsultClick = (e) => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault(); // împiedicăm apelul pe desktop
      setShowPopup(true); // arătăm popup-ul
    }
    // pe mobil lăsăm <a href="tel:..."> să funcționeze normal
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("+40232250885");
    alert("Numărul de telefon a fost copiat!");
  };

  return (
    <header className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={data.video} media="(max-width: 768px)" type="video/mp4" />
        <source
          src="https://stancosmin28.github.io/fragar/fragar-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-5 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Construcții inteligente pentru proiecte strategice
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          De la fundație la automatizare - livrăm clădiri și spații smart,
          pregătite pentru viitor.
        </p>
        <div className="min-w-full justify-center flex space-x-4 md:flex-row flex-col gap-4 md:px-0 sm:px-10">
          <a href="tel:+40232250885" onClick={handleConsultClick}>
            <button className="bg-red-600 hover:bg-red-800 hover:scale-105 text-white font-medium py-4 px-10 transition duration-300 cursor-pointer m-0">
              CONSULTANȚĂ GRATUITĂ
            </button>
          </a>

          <button
            onClick={(e) => handleScrollToSection(e, "projects")}
            className="self-center md:self-auto w-auto px-8 py-3 border-2 border-white hover:bg-white hover:scale-105 hover:text-red-600 text-white font-medium transition duration-300 cursor-pointer"
          >
            Vezi Portofoliul
          </button>
        </div>
      </div>

      {/* Popup simplu: blur pe fundal, fără overlay negru */}
      {showPopup && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/5 backdrop-blur-md">
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl text-center max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Consultanță Gratuită</h2>
            <p className="text-xl font-semibold mb-4">📞 +40 232 250 885</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleCopyNumber}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
              >
                Copiază
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition cursor-pointer"
              >
                Închide
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
