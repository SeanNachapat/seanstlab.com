import React from "react";
import { useEffect } from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../data/experiences";

const Experiences = () => {
  useEffect(() => {
    document.title = "Experiences";
  }, []);
  return (
    <body className="text-white font-JetBrain bg-night  p-7">
      <div className="flex flex-col max-w-[600px] min-h-screen mx-auto p-7">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </ol>
      </div>
    </body>
  );
};
export default Experiences;
