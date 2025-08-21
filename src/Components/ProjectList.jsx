// import { Link } from "react-router-dom";
// import projects from "../Model/euroProjects";

// export default function ProjectsList() {
//   return (
//     <div className="container mx-auto py-10">
//       {projects.map((project) => (
//         <div key={project.id} className="mb-12">
//           <Link
//             to={`/fragar/noutati/proiect-${project.id}`}
//             className="block p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               {project.title}
//             </h2>
//             <p className="text-sm text-gray-600 mt-2">{project.byline}</p>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import euroProjects from "../Model/euroProjects";

export default function ProjectsList() {
  return (
    <div className="container mx-auto py-10">
      {euroProjects.map((project) => (
        <div key={project.id} className="mb-12">
          <Link
            to={`/fragar/noutati/${project.id}`} // Simplified to :id
            className="block p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2">{project.byline}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
