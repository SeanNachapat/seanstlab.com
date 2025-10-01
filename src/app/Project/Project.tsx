import React from "react";
import Card from "./Card";
import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    document.title = "Projects";
  }, []);
  return (
    <div className="bg-night text-white font-JetBrain">
      <div className="flex flex-col items-center min-h-screen">
        <h2 className="text-center text-2xl font-bold p-5">Projects</h2>
        <div className="p-6 gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center">
          <Card
            title="N-Pochna | Diet Assistant"
            description="This project is made for educational purposes as a senior project at Kasetsart University Laboratory School Multilingual Program. N'Pochna is a LINE Bot integrated with Edamam API to assist in managing diets and workouts. Made by Nachapat Iamphuang."
            imageUrl="public\Project\N-Pochna.png"
            pageLink="https://github.com/SeanNachapat/N-Pochna"
            tags={["Javascript", "Node.js", "LINE", "RapidAPI", "Ngrok"]}
          />
          <Card
            title="What's The Word"
            description="This project was created for educational purposes by Computer Science students at KMITL. What's The Word? is a web application game for Thai students to practice their knowledge of English vocabulary, categorized by the Common European Framework of Reference for Languages(CEFR)."
            imageUrl="public\Project\wtw.png"
            pageLink="https://github.com/SeanNachapat/whatstheword"
            tags={["Javascript", "NEXT.js", "Vercel"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
