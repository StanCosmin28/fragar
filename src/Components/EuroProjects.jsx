import euroProjects from "../Model/euroProjects";
import { Link } from "react-router-dom";

const EuroProjectCard = ({ title, byline, id }) => (
  <Link
    to={`/fragar/noutati/${id}`} // Simplified to :id
    className="w-full h-64 bg-[#CAE7FF] rounded-lg flex flex-col justify-center items-center text-center p-4 lg:p-6"
  >
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center mb-4">
        <img src={euroProjects[0].projectIcon} alt="📄" />{" "}
        {/* Adjust if projectIcon is elsewhere */}
      </div>
      <p className="text-gray-700 text-sm lg:text-base">{title}</p>
      <p className="text-gray-500 text-xs lg:text-sm mt-1">{byline}</p>
      <button className="mt-4 py-2 px-4 border-2 border-gray-700 rounded-lg text-gray-700 text-sm lg:text-base">
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
            id={project.id} // Pass id for the link
          />
        ))}
      </div>
    </section>
  );
}
