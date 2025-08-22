import euroProjects from "../Model/euroProjects";
import { Link } from "react-router-dom";
import data from "../Model/data";

const { projectIcon } = { ...data };

const EuroProjectCard = ({ title, byline, id }) => (
  <Link
    to={`/noutati/${id}`}
    className="w-full h-auto bg-[#CAE7FF] rounded-2xl flex flex-col justify-center items-center text-center p-4 lg:p-20 hover:scale-103 transition duration-200"
  >
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center mb-4">
        <img src={projectIcon} alt="📄" />{" "}
      </div>
      <p className="text-gray-700 text-sm lg:text-base">{title}</p>
      <p className="text-gray-500 text-xs lg:text-sm mt-1">{byline}</p>
      <button className="cursor-pointer hover:scale-103 transform duration-200 mt-4 py-2 px-4 border-2 border-gray-700 rounded-lg text-gray-700 text-sm lg:text-base">
        Vezi tot
      </button>
    </div>
  </Link>
);

export default function EuroProjects() {
  return (
    <section className="max-w-7xl mt-20 mb-20 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {euroProjects.map((project) => (
          <EuroProjectCard
            key={project.id}
            title={project.title}
            byline={project.byline}
            id={project.id}
          />
        ))}
      </div>
    </section>
  );
}
