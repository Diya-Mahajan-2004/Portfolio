import React from "react";
import Home from "./Pages/Home";
import About from './Pages/About'
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
           {" "}
      <Routes>
        {/* Using element prop (recommended for v6+) */}
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/project" element={<Project />} />       {" "}
      </Routes>
         {" "}
    </Router>
  );
}

export default App;
