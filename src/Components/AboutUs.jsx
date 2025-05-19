export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between my-20">
      <div className="h-full md:w-1/2 text-center md:text-left justify-between flex flex-col">
        <h2 className="text-red-600 text-4xl font-bold mb-2">CINE SUNTEM</h2>
        <hr className="border-red-600 w-16 mb-4 md:mx-0 mx-auto" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:max-w-7/8">
          Clădiri Inteligente, Construite după Viziunea Ta
        </h1>
        <p className="text-gray-600 mb-6 md:max-w-4/5">
          Suntem FRAGAR, o firmă de construcții care combină know-how-ul solid
          cu tehnologii smart pentru proiecte durabile și eficiente.
        </p>
        <div className="flex flex-row justify-center md:justify-start gap-4 flex-wrap">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm sm:text-base">
            Inovație
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm sm:text-base">
            Profesionalism
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm sm:text-base">
            Expertiză
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Construction Site"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
