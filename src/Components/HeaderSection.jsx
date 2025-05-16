import data from "../Model/data";

export default function HeaderSection() {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={data.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Construcții inteligente pentru proiecte strategice
        </h1>
        <p className="text-lg md:text-xl mb-6">
          De la fundație la automatizare - livrăm clădiri și spații smart,
          pregătite pentru viitor.
        </p>
        <div className="flex space-x-4">
          <button className="bg-red-600 hover:bg-red-800 hover:scale-105 text-white font-medium py-4 px-10 transition duration-300 cursor-pointer">
            CERE OFERTĂ
          </button>
          <button className="border-2 border-white hover:bg-white hover:scale-105 hover:text-red-600 text-white font-medium py-2 px-6 transition duration-300 cursor-pointer">
            Vezi Portofoliul
          </button>
        </div>
      </div>
    </header>
  );
}
