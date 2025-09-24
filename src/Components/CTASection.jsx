import { useState } from "react";
import data from "../Model/data";

export default function CTASection() {
  const [showPopup, setShowPopup] = useState(false);

  const handleConsultClick = (e) => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault(); // blocăm apelul pe desktop
      setShowPopup(true); // afișăm popup
    }
    // pe mobil funcționează normal <a href="tel:...">
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("+40232250885");
    alert("Numărul de telefon a fost copiat!");
  };

  return (
    <>
      <div className="h-120 md:h-160 lg:h-100 w-full relative bg-gray-800 flex justify-center lg:block ">
        <div className="flex flex-col gap-4 lg:gap-10 w-full h-full p-5 lg:justify-start lg:items-start max-w-[1440px] lg:relative lg:mx-auto">
          <h2 className="text-[20px] md:text-3xl font-bold text-white mt-10">
            Vrei spații moderne și eficiente? <br /> Hai să discutăm despre
            proiectul tău!
          </h2>
          <a href="tel:+40232250885" onClick={handleConsultClick}>
            <button className="bg-red-600 hover:bg-red-800 hover:scale-105 text-white font-medium py-4 px-10 transition duration-300 cursor-pointer">
              CONSULTANȚĂ GRATUITĂ
            </button>
          </a>
          <img
            className="max-h-80 absolute right-0 bottom-9"
            src={data.CTAsvg}
            alt=""
          />
        </div>
        <div className="h-10 w-full bg-[#2691EA] absolute bottom-0 z-10"></div>
      </div>

      {/* Popup cu blur pe fundal */}
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
    </>
  );
}
