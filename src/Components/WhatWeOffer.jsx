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
          <div className="relative aspect-square w-full scl-card">
            {/* Black backdrop */}
            <div className="absolute inset-0 bg-[#4B3B99] rounded-3xl translate-x-2 translate-y-2 scl-card"></div>
            {/* Card content */}
            <div className="absolute inset-0 bg-[#E5E0FF] rounded-3xl shadow-xl flex flex-col justify-between p-8 md:p-4 overflow-hidden">
              <div className="flex justify-center md:justify-start mb-1">
                <img
                  className="w-28 h-28 md:w-18 md:h-18 xl:w-20 xl:h-20 text-gray-800"
                  src={wwoIcons[0]}
                  alt=""
                />
              </div>
              <div className="flex-grow flex flex-col justify-center gap-2">
                <h3 className="text-base md:text-xl font-semibold mb-1">
                  Experiență în proiecte publice și private
                </h3>
                <p className="text-xs lg:text-[15px] text-gray-600 line-clamp-3">
                  Dezvoltatori, instituții, autorități - știm ce înseamnă
                  standarde înalte și livrare sigură.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative aspect-square w-full scl-card">
            {/* Black backdrop */}
            <div className="absolute inset-0 bg-[#4B3B99] rounded-3xl translate-x-2 translate-y-2 scl-card"></div>
            {/* Card content */}
            <div className="absolute inset-0 bg-[#E5E0FF] rounded-3xl shadow-xl flex flex-col justify-between p-8 md:p-4 overflow-hidden">
              <div className="flex justify-center md:justify-start mb-1">
                <img
                  className="w-28 h-28 md:w-18 md:h-18 xl:w-20 xl:h-20 text-gray-800"
                  src={wwoIcons[1]}
                  alt=""
                />
              </div>
              <div className="flex-grow flex flex-col justify-center gap-2">
                <h3 className="text-base md:text-xl font-semibold mb-1">
                  Execuție completă, fără bătăi de cap
                </h3>
                <p className="text-xs lg:text-[15px] text-gray-600 line-clamp-3">
                  Coordonăm toate etapele - proiectare, construcție și instalare
                  - cu un singur punct de contact.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative aspect-square w-full scl-card">
            {/* Black backdrop */}
            <div className="absolute inset-0 bg-[#4B3B99] rounded-3xl translate-x-2 translate-y-2 scl-card"></div>
            {/* Card content */}
            <div className="absolute inset-0 bg-[#E5E0FF] rounded-3xl shadow-xl flex flex-col justify-between p-8 md:p-4 overflow-hidden">
              <div className="flex justify-center md:justify-start mb-1">
                <img
                  className="w-28 h-28 md:w-18 md:h-18 xl:w-20 xl:h-20 text-gray-800"
                  src={wwoIcons[2]}
                  alt=""
                />
              </div>
              <div className="flex-grow flex flex-col justify-center gap-2">
                <h3 className="text-base md:text-xl font-semibold mb-1">
                  Construcții durabile, tehnologii smart
                </h3>
                <p className="text-xs lg:text-[15px] text-gray-600 line-clamp-3">
                  Clădiri solide, automatizate și eficiente energetic, pregătite
                  pentru viitor.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative aspect-square w-full scl-card">
            {/* Black backdrop */}
            <div className="absolute inset-0 bg-[#4B3B99] rounded-3xl translate-x-2 translate-y-2 scl-card"></div>
            {/* Card content */}
            <div className="absolute inset-0 bg-[#E5E0FF] rounded-3xl shadow-xl flex flex-col justify-between p-8 md:p-4 overflow-hidden">
              <div className="flex justify-center md:justify-start mb-1">
                <img
                  className="w-28 h-28 md:w-18 md:h-18 xl:w-20 xl:h-20 text-gray-800"
                  src={wwoIcons[3]}
                  alt=""
                />
              </div>
              <div className="flex-grow flex flex-col justify-center gap-2">
                <h3 className="text-base md:text-xl font-semibold mb-1">
                  Respect pentru termene și buget
                </h3>
                <p className="text-xs lg:text-[15px] text-gray-600 line-clamp-3">
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
