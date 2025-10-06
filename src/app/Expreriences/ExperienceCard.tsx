import React from "react";
import { experiences } from "../../data/experiences";
import type { Experience } from "../../data/experiences";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {experience.date}
        </time>
        <a className="flex" href={experience.referLink}>
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
      </li>
    </div>
  );
};
export default ExperienceCard;
