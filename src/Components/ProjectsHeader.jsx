import samplePosts from "../Model/blogData";
import data from "../Model/data";
export default function ProjectsHeader() {
  console.log("This are the projects:", samplePosts);
  return (
    <>
      <div className="w-full  h-[60vh] overflow-hidden">
        <img
          src={data.blogHeader}
          alt="Blog header image"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* <section className="flex flex-col items-start p-10 mt-10">
        <h2 className="text-red-600 text-4xl font-bold mb-2">PROIECTE</h2>
        <hr className="border-red-600 w-16 mb-4" />
        <h1 className="font-bold text-4xl mb-4">
          FRAGAR construiește viitorul — durabil, eficient și conectat la
          tehnologie.
        </h1>
        <p className="text-gray-600 md:mb-6 max-w-2xl mb-10">
          Fiecare proiect este o provocare și o oportunitate de a combina
          expertiza în construcții civile și industriale cu soluții smart, de la
          sisteme BMS la instalații fotovoltaice.
        </p>
        <p className="text-gray-600 md:mb-6 mb-4 max-w-2xl">
          Ne dedicăm să aducem valoare reală, prin inovație și respect pentru
          mediu, adaptându-ne mereu cerințelor complexe ale clienților noștri.
        </p>
      </section> */}
    </>
  );
}
