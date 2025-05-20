import "./services.css";
import data from "../Model/data";

export default function Services() {
  const { services, servicesDescription } = data;

  return (
    <>
      <div className="flex flex-col items-start lg:my-40">
        <div className="container mx-auto px-4">
          <h2 className="text-red-600 text-4xl font-bold mb-2">SERVICII</h2>
          <hr className="border-red-600 w-16 mb-4" />
          <p className="text-gray-600 md:mb-6 mb-4 max-w-lg">
            Proiectăm și executăm clădiri și spații urbane durabile, eficiente
            și inteligente, adaptate nevoilor comunității.
          </p>
        </div>

        <div className="w-full md:container md:mx-auto md:px-4 grid grid-cols-2 md:grid-cols-3 md:gap-4 md:py-8">
          {services.map((service, index) => (
            <div key={index} className="w-full relative group">
              <img
                className="h-auto w-full md:rounded-lg object-cover"
                src={service}
                alt={`Service ${index + 1}`}
              />
              <div className="cursor-pointer absolute inset-0 flex justify-center items-center text-center bg-black/50 transition-all duration-200 md:rounded-lg test">
                <h2 className="text-white text-lg md:text-xl font-bold px-4">
                  {servicesDescription[index]}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
