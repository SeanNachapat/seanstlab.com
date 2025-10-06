import React from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

const Card: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a href={project.pageLink} target="_blank">
      <div className="bg-raisinBlack flex flex-col gap-1 my-1 rounded-2xl w-[360px] h-[450px] hover:scale-105 transition-transform cursor-pointer">
        <img
          className="flex rounded-t-2xl h-52 object-cover"
          src={project.imageUrl}
          alt={project.altText}
        ></img>
        <div className="px-6 py-2 flex flex-col h-full">
          <div className="flex flex-row pb-1">
            <a className="font-bold text-lg hover:font-extrabold hover:underline">
              {project.title}
            </a>
            <span className="material-symbols-outlined text-sm text-gray-400 px-2 pt-1">
              open_in_new
            </span>
          </div>
          <p className="text-sm text-gray-400 text-justify mb-3 line-clamp-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto max-h-16 overflow-hidden">
            {project.tags?.map((tag: string, index: number) => (
              <li key={index} className="flex bg-night p-1 rounded-lg">
                <span className="text-white text-sm font-light">{tag}</span>
              </li>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
