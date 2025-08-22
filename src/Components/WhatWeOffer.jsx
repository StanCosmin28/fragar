import data from "../Model/data";
import "./whatWeOffer.css";

export default function WhatWeOffer() {
  const { wwoIcons } = data;
  return (
    <div className="py-12 px-4 my-25">
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-red-500 text-4xl font-bold mb-2">
          CE OFERIM ÎN PLUS
        </h2>
        <hr className="border-red-500 w-16 mb-4 mx-auto md:mx-0" />
        <p className="text-gray-600 mb-8 max-w-md">
          Tratăm fiecare proiect cu responsabilitate și livrăm soluții moderne,
          atent gândite în cele mai mici detalii.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 custom-cursor">
          {/* Card 1 */}
          <div className="relative w-full h-80 sm:h-72 md:h-80 lg:h-72 xl:h-80 scl-card">
            {/* Black backdrop */}
            <div className="absolute inset-0 bg-[#4B3B99] rounded-3xl translate-x-2 translate-y-2 scl-card"></div>
            {/* Card content */}
            <div className="absolute inset-0 bg-[#E5E0FF] rounded-3xl shadow-xl flex flex-col p-6 sm:p-5 md:p-6 lg:p-4 xl:p-6 overflow-hidden">
              <div className="flex justify-center md:justify-start mb-3 sm:mb-2 flex-shrink-0">
                <img
                  className="w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-gray-800"
                  src={wwoIcons[0]}
                  alt=""
                />
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-lg sm:text-base md:text-lg lg:text-sm xl:text-lg font-semibold mb-2 sm:mb-1 leading-tight">
                  Experiență în proiecte publice și private
                </h3>
                <p className="text-sm sm:text-xs md:text-sm lg:text-xs xl:text-sm text-gray-600 leading-relaxed">
                  Dezvoltatori, instituții, autorități - știm ce înseamnă
                  standarde înalte și livrare sigură.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full h-80 sm:h-72 md:h-80 lg:h-72 xl:h-80 scl-card">
            {/* Black backdrop */}
            <div className="absolute inset-0 bg-[#4B3B99] rounded-3xl translate-x-2 translate-y-2 scl-card"></div>
            {/* Card content */}
            <div className="absolute inset-0 bg-[#E5E0FF] rounded-3xl shadow-xl flex flex-col p-6 sm:p-5 md:p-6 lg:p-4 xl:p-6 overflow-hidden">
              <div className="flex justify-center md:justify-start mb-3 sm:mb-2 flex-shrink-0">
                <img
                  className="w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-gray-800"
                  src={wwoIcons[1]}
                  alt=""
                />
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-lg sm:text-base md:text-lg lg:text-sm xl:text-lg font-semibold mb-2 sm:mb-1 leading-tight">
                  Execuție completă, fără bătăi de cap
                </h3>
                <p className="text-sm sm:text-xs md:text-sm lg:text-xs xl:text-sm text-gray-600 leading-relaxed">
                  Coordonăm toate etapele - proiectare, construcție și instalare
                  - cu un singur punct de contact.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-full h-80 sm:h-72 md:h-80 lg:h-72 xl:h-80 scl-card">
            {/* Black backdrop */}
            <div className="absolute inset-0 bg-[#4B3B99] rounded-3xl translate-x-2 translate-y-2 scl-card"></div>
            {/* Card content */}
            <div className="absolute inset-0 bg-[#E5E0FF] rounded-3xl shadow-xl flex flex-col p-6 sm:p-5 md:p-6 lg:p-4 xl:p-6 overflow-hidden">
              <div className="flex justify-center md:justify-start mb-3 sm:mb-2 flex-shrink-0">
                <img
                  className="w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-gray-800"
                  src={wwoIcons[2]}
                  alt=""
                />
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-lg sm:text-base md:text-lg lg:text-sm xl:text-lg font-semibold mb-2 sm:mb-1 leading-tight">
                  Construcții durabile, tehnologii smart
                </h3>
                <p className="text-sm sm:text-xs md:text-sm lg:text-xs xl:text-sm text-gray-600 leading-relaxed">
                  Clădiri solide, automatizate și eficiente energetic, pregătite
                  pentru viitor.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative w-full h-80 sm:h-72 md:h-80 lg:h-72 xl:h-80 scl-card">
            {/* Black backdrop */}
            <div className="absolute inset-0 bg-[#4B3B99] rounded-3xl translate-x-2 translate-y-2 scl-card"></div>
            {/* Card content */}
            <div className="absolute inset-0 bg-[#E5E0FF] rounded-3xl shadow-xl flex flex-col p-6 sm:p-5 md:p-6 lg:p-4 xl:p-6 overflow-hidden">
              <div className="flex justify-center md:justify-start mb-3 sm:mb-2 flex-shrink-0">
                <img
                  className="w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-gray-800"
                  src={wwoIcons[3]}
                  alt=""
                />
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-lg sm:text-base md:text-lg lg:text-sm xl:text-lg font-semibold mb-2 sm:mb-1 leading-tight">
                  Respect pentru termene și buget
                </h3>
                <p className="text-sm sm:text-xs md:text-sm lg:text-xs xl:text-sm text-gray-600 leading-relaxed">
                  Planificare riguroasă și rezultate livrate la timp, fără
                  costuri ascunse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
