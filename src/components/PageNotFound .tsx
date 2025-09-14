import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageNotFound = () => {
  return (
    <div className="sticky text-white font-JetBrain">
      <div className="bg-night flex flex-col w-screen h-screen mx-auto justify-center items-center fixed">
        <h2 className="text-7xl font-bold mb-4">Σ(OДOᵕ)</h2>
        <p className="py-4">404 | Page not Found.</p>
        <a
          href="/"
          className="flex outline outline-white rounded-full p-2 hover:scale-110 transition-all"
        >
          Return
        </a>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};
export default PageNotFound;
