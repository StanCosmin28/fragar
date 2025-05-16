export default function Mission() {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 relative">
      <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between">
        <div className="md:w-1/2 md:grid grid-cols-2 gap-4 mb-8 md:mb-0 hidden ">
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
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-red-500 text-2xl font-bold mb-2">MISIUNE</h2>
          <hr className="border-red-500 w-16 mb-4 md:mx-0 mx-auto" />
          <p className="text-lg mb-6 max-w-2xl md:max-w-4/5">
            Partenerul tău în construirea unui viitor sustenabil și confortabil.
            Livrăm soluții de construcție inteligente și sustenabile, integrate
            cu tehnologii avansate, pentru clădiri și parcări eficiente și
            durabile. Oferim valoare pe termen lung și confort prin inovație și
            design personalizat.
          </p>
        </div>
      </div>
      <div className="md:hidden mt-8 flex flex-col space-y-4">
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
    </div>
  );
}
