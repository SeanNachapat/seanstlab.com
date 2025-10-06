import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./app/About/About";
import Project from "./app/Project/Project";
import Link from "./app/Link/Link";
import PageNotFound from "./components/PageNotFound ";
import Experiences from "./app/Expreriences/Experiences";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/link" element={<Link />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
