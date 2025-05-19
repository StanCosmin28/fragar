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
          <div className="relative bg-[#E5E0FF] p-6 rounded-lg shadow-xl aspect-square flex flex-col justify-evenly">
            <div className="w-full h-full bg-black rounded-lg top-2 left-2 absolute -z-[-10]"></div>
            <div className="z-10">
              <div className="flex justify-center md:justify-start mb-4">
                <svg
                  className="w-30 h-30 md:w-20 md:h-20 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zm4-8h10V7H7v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Experiență în proiecte publice și private
              </h3>
              <p className="text-gray-600">
                Dezvoltatori, instituții, autorități - știm ce înseamnă
                standarde înalte și livrare sigură.
              </p>
            </div>
          </div>
          <div className="bg-[#E5E0FF] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 aspect-square sm:aspect-square lg:aspect-square justify-evenly flex flex-col">
            <div className="flex  justify-center md:justify-start mb-4">
              <svg
                className="w-30 h-30 md:w-20 md:h-20 text-gray-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Execuție completă, fără bătăi de cap
            </h3>
            <p className="text-gray-600">
              Coordonăm toate etapele - proiectare, construcție și instalare –
              cu un singur punct de contact.
            </p>
          </div>
          <div className="bg-[#E5E0FF] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 aspect-square sm:aspect-square lg:aspect-square justify-evenly flex flex-col">
            <div className="flex  justify-center md:justify-start mb-4">
              <svg
                className="w-30 h-30 md:w-20 md:h-20 text-gray-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Construcții durabile, tehnologii smart
            </h3>
            <p className="text-gray-600">
              Clădiri solide, automatizate și eficiente energetic, pregătite
              pentru viitor.
            </p>
          </div>
          <div className="bg-[#E5E0FF] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 aspect-square sm:aspect-square lg:aspect-square justify-evenly flex flex-col">
            <div className="flex  justify-center md:justify-start mb-4">
              <svg
                className="w-30 h-30 md:w-20 md:h-20 text-gray-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Respect pentru termene și buget
            </h3>
            <p className="text-gray-600">
              Planificare riguroasă și rezultate livrate la timp, fără costuri
              ascunse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
