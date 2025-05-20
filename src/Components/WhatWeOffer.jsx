export default function WhatWeOffer() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-red-500 text-4xl font-bold mb-2">
          CE OFERIM ÎN PLUS
        </h2>
        <hr className="border-red-500 w-16 mb-4 mx-auto md:mx-0" />
        <p className="text-gray-600 mb-8 max-w-2xl">
          Tratăm fiecare proiect cu responsabilitate și livrăm soluții moderne,
          atent gândite în cele mai mici detalii.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="relative aspect-square w-full">
            {/* Black backdrop */}
            <div className="absolute inset-0 bg-black rounded-lg translate-x-2 translate-y-2"></div>
            {/* Card content */}
            <div className="absolute inset-0 bg-[#E5E0FF] rounded-lg shadow-xl flex flex-col justify-between p-3 md:p-4 overflow-hidden">
              <div className="flex justify-center md:justify-start mb-1">
                <svg
                  className="w-12 h-12 md:w-12 md:h-12 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zm4-8h10V7H7v2z" />
                </svg>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  Experiență în proiecte publice și private
                </h3>
                <p className="text-xs md:text-sm text-gray-600 line-clamp-3">
                  Dezvoltatori, instituții, autorități - știm ce înseamnă
                  standarde înalte și livrare sigură.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative aspect-square w-full">
            {/* Black backdrop */}
            <div className="absolute inset-0 bg-black rounded-lg translate-x-2 translate-y-2"></div>
            {/* Card content */}
            <div className="absolute inset-0 bg-[#E5E0FF] rounded-lg shadow-xl flex flex-col justify-between p-3 md:p-4 overflow-hidden">
              <div className="flex justify-center md:justify-start mb-1">
                <svg
                  className="w-12 h-12 md:w-12 md:h-12 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  Execuție completă, fără bătăi de cap
                </h3>
                <p className="text-xs md:text-sm text-gray-600 line-clamp-3">
                  Coordonăm toate etapele - proiectare, construcție și instalare
                  – cu un singur punct de contact.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative aspect-square w-full">
            {/* Black backdrop */}
            <div className="absolute inset-0 bg-black rounded-lg translate-x-2 translate-y-2"></div>
            {/* Card content */}
            <div className="absolute inset-0 bg-[#E5E0FF] rounded-lg shadow-xl flex flex-col justify-between p-3 md:p-4 overflow-hidden">
              <div className="flex justify-center md:justify-start mb-1">
                <svg
                  className="w-12 h-12 md:w-12 md:h-12 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  Construcții durabile, tehnologii smart
                </h3>
                <p className="text-xs md:text-sm text-gray-600 line-clamp-3">
                  Clădiri solide, automatizate și eficiente energetic, pregătite
                  pentru viitor.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative aspect-square w-full">
            {/* Black backdrop */}
            <div className="absolute inset-0 bg-black rounded-lg translate-x-2 translate-y-2"></div>
            {/* Card content */}
            <div className="absolute inset-0 bg-[#E5E0FF] rounded-lg shadow-xl flex flex-col justify-between p-3 md:p-4 overflow-hidden">
              <div className="flex justify-center md:justify-start mb-1">
                <svg
                  className="w-12 h-12 md:w-12 md:h-12 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  Respect pentru termene și buget
                </h3>
                <p className="text-xs md:text-sm text-gray-600 line-clamp-3">
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
