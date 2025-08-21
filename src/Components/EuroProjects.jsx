import { Link } from "react-router-dom";
import data from "../Model/data";

// import { euroProjects } from "./data";
const { projectIcon } = { ...data };
export const euroProjects = [
  {
    id: 1,
    title:
      "Lansare proiect / Finantare nerambursabila pentru SC FRAGAR TRADING SRL",
    date: "May 19, 2023",
    link: "/fragar/noutati/proiect-1",
  },
  {
    id: 2,
    title:
      "Lansare proiect / Finantare nerambursabila pentru SC FRAGAR TRADING SRL inscris in cadrul Măsurii „Granturi pentru capital de lucru” instituită prin OUG nr. 130/2020",
    date: "May 12, 2021",
    link: "/fragar/noutati/proiect-2",
  },
  {
    id: 3,
    title:
      "Lansare proiect / Finantare nerambursabila pentru SC FRAGAR TRADING SRL DIGI TOUCH NEXTGEN",
    date: "Iulie 28, 2025",
    link: "/fragar/noutati/proiect-3",
  },
  {
    id: 4,
    title:
      "Lansare proiect / Finantare nerambursabila pentru SC FRAGAR TRADING SRL",
    date: "May 19, 2023",
    link: "/fragar/noutati/proiect-4",
  },
];

const EuroProjectCard = ({ title, date, link }) => (
  <Link
    to={link}
    className="w-full h-64 bg-[#CAE7FF] rounded-lg flex flex-col justify-center items-center text-center p-4 lg:p-6"
  >
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center mb-4">
        <img src={projectIcon} alt="📄" />
        {/* <span className="text-gray-600">📄</span> */}
      </div>
      <p className="text-gray-700 text-sm lg:text-base">{title}</p>
      <p className="text-gray-500 text-xs lg:text-sm mt-1">by admin | {date}</p>
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
            date={project.date}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
