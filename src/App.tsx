import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Project from "./app/Project/Project";
import Link from "./app/Link/Link";
import PageNotFound from "./components/PageNotFound ";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/link" element={<Link />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
