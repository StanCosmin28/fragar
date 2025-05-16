export default function Services() {
  return (
    <>
      <div className="flex flex-col items-left">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-red-600 text-2xl font-bold mb-2">SERVICII</h2>
          <hr className="border-red-600 w-16 mb-4" />
          <p className="text-gray-600 mb-6">
            Proiectăm și executăm clădiri și spații urbane durabile, eficiente
            și inteligente, adaptate nevoilor comunității.
          </p>
        </div>
        <img
          className="flex flex-col justify-center items-center"
          src=""
          alt=""
        />

        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-4 md:container md:mx-auto md:px-4 md:py-8">
          <div>
            <img
              className="h-auto max-w-full md:rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full md:rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full md:rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full md:rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full md:rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full md:rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
