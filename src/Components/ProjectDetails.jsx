import { useParams } from "react-router-dom";
import ProjectDescription from "./ProjectDescription";
import euroProjects from "../Model/euroProjects";
import { Link } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  const projectId = parseInt(id); // Directly parse the id
  const project = euroProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto py-10 text-center text-gray-600">
        Proiectul nu a fost găsit.
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto py-10">
        <ProjectDescription data={project} />
      </div>
      <div className="w-full max-w-4xl flex flex-row justify-end mx-auto mb-20">
        <Link
          className="py-2 px-4 border-1 rounded-lg bg-blue-600 text-white hover:scale-105 transition duration-200"
          to="/fragar/noutati"
        >
          Inapoi la proiecte
        </Link>
      </div>
    </>
  );
}
