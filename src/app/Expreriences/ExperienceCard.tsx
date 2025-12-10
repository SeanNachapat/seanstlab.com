import React from "react";
import { experiences } from "../../data/experiences";
import type { Experience } from "../../data/experiences";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className={`relative flex justify-between items-center w-full mb-8 ${experience.type === "cs" ? "flex-row" : "flex-row-reverse"} md:${experience.type === "cs" ? "flex-row" : "flex-row-reverse"}`}>
      <div className="hidden md:block w-5/12"></div>
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center shadow-xl w-4 h-4 rounded-full bg-gray-700 border border-gray-900"></div>
      <div className={`w-full md:w-5/12 pl-12 md:pl-0 md:px-6 py-4 rounded-lg shadow-xl ${experience.type === "cs" ? "text-left" : "text-left md:text-right"}`}>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {experience.date}
        </time>
        <a className={`flex ${experience.type === "cs" ? "justify-start" : "justify-start md:justify-end"}`} href={experience.referLink}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {experience.title}
          </h3>
          {experience.referLink ? (
            <span className="material-symbols-outlined text-xs text-gray-400 px-2 pt-1">
              open_in_new
            </span>
          ) : (
            <span></span>
          )}
        </a>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 line-clamp-5">
          {experience.description}
        </p>
        <div className={`flex flex-wrap gap-2 mt-2 max-h-16 overflow-hidden ${experience.type === "cs" ? "justify-start" : "justify-start md:justify-end"}`}>
          {experience.tags?.map((tag: string, index: number) => (
            <li key={index} className="flex bg-raisinBlack p-1 rounded-lg">
              <span className="text-gray-300 text-sm font-light">{tag}</span>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;
