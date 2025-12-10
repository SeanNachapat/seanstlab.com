import React from "react";
import { useEffect } from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../data/experiences";

const Experiences = () => {
  useEffect(() => {
    document.title = "Experiences";
  }, []);
  return (
    <body className="text-white font-JetBrain bg-night">
      <div className="flex flex-col max-w-4xl min-h-screen mx-auto p-7">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          <ol className="relative">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </ol>
        </div>
      </div>
    </body>
  );
};
export default Experiences;
