import React from "react";
import { useEffect } from "react";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "404";
  }, []);
  return (
    <body className="sticky text-white font-JetBrain">
      <div className="bg-night flex flex-col w-screen h-screen mx-auto justify-center items-center fixed">
        <h2 className="text-7xl font-bold mb-4 animate-bounce">Σ(OДOᵕ)</h2>
        <p className="py-4">404 | Page not Found.</p>
        <a
          href="/"
          className="flex outline outline-white rounded-full p-2 hover:scale-110 transition-all"
        >
          Return
        </a>
      </div>
    </body>
  );
};
export default PageNotFound;
