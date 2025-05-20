export default function Mission() {
  return (
    <div className=" md:bg-transparent text-white py-12 md:px-4 relative min-h-[80vh] md:flex md:flex-row md:items-center md:justify-center">
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10 hidden md:block"
        src="https://images.unsplash.com/photo-1635950574717-a0e150ee34bb?q=80&w=3576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
      />
      <div className="md:container mx-auto flex flex-col md:flex-row-reverse items-center relative md:p-10 p-5 justify-center">
        <div className="md:w-1/2  grid-cols-2 gap-4 mb-8 md:mb-0 hidden md:grid">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt="Mission Image 1"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt="Mission Image 2"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt="Mission Image 3"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt="Mission Image 4"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h2 className="text-red-500 text-4xl font-bold mb-2">MISIUNE</h2>
          <hr className="border-red-500 w-16 mb-8 md:mb-4 mx-auto md:mx-0" />
          <h2 className="text-2xl md:text-lg mb-6 md:max-w-[90%] mx-auto md:mx-0 font-bold max-w-[400px] md:text">
            Partenerul tău în construirea unui viitor sustenabil și confortabil.
          </h2>
          <p className="text-md md:text-lg mb-6 md:max-w-[90%] mx-auto md:mx-0 max-w-[400px]">
            Livrăm soluții de construcție inteligente și sustenabile, integrate
            cu tehnologii avansate, pentru clădiri și parcări eficiente și
            durabile.
          </p>
          <p className="text-md md:text-lg mb-6 md:max-w-[90%] mx-auto md:mx-0 max-w-[400px]">
            Oferim valoare pe termen lung și confort prin inovație și design
            personalizat.
          </p>
        </div>
        <div className="absolute w-full h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover md:hidden block "
            src="https://images.unsplash.com/photo-1635950574717-a0e150ee34bb?q=80&w=3576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
          />
        </div>
      </div>
      <div className="md:hidden mt-8 flex flex-col space-y-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          alt="Mission Image 1"
          className="w-full h-auto md:rounded-lg"
        />
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          alt="Mission Image 2"
          className="w-full h-auto md:rounded-lg"
        />
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
          alt="Mission Image 3"
          className="w-full h-auto md:rounded-lg"
        />
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt="Mission Image 4"
          className="w-full h-auto md:rounded-lg"
        />
      </div>
    </div>
  );
}
