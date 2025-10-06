import React from "react";
import Card from "./Card";
import { projects } from "../../data/projects";
import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    document.title = "Projects";
  }, []);
  return (
    <div className="bg-night text-white font-JetBrain">
      <div className="flex flex-col items-center min-h-screen">
        <h2 className="text-center text-2xl font-bold p-5">Projects</h2>
        <div className="p-6 gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
