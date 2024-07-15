import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./App.css";
import React from "react";
import Home from "./sections/home.js";
import Experience from "./sections/experience.js";
import Projects from "./sections/projects.js";
import Education from "./sections/education.js";
import Header from "./sections/header.js";
import Footer from "./sections/footer.js";

function App() {
  return (
    <>
      <div className="App" style={{ marginLeft: "20%", marginRight: "20%" }}>
        <Header />
        <span id="home">
          <Home />
        </span>

        <span id="experience">
          <Experience />
        </span>
        <span id="projects">
          <Projects />
        </span>
        <span id="education">
          <Education />
        </span>
        <Footer />
      </div>
    </>
  );
}

export default App;
