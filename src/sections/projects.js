import React from "react";
import "./projects.css";

import { GoLinkExternal } from "react-icons/go";
import { Card, CardTitle, CardBody } from "shards-react";

const projects = [
  {
    title: "Apollo",
    description: "A self completing to-do list using Generative AI Agents",
    stack: "Next.js, Flask, Python, AWS, GPT-4",
    link: "https://drive.google.com/file/d/1Z0olu0kkQKZ9CuU8sgcVbCKg6K6VCD9J/view?usp=sharing",
  },
  {
    title: "Scribe",
    description: "AI-powered collective notetaking platform",
    stack: "Node.js, Python, AWS Lambda, Ada-002 Embeddings LLM",
    link: "https://scribenotes.netlify.app/",
  },
  {
    title: "LungStat",
    description: "Physician-assistant ML detection of Lung Cancer Tumors",
    stack: "Python, TensorFlow, React, OpenCV",
    link: "https://drive.google.com/file/d/1Z0olu0kkQKZ9CuU8sgcVbCKg6K6VCD9J/view?usp=sharing",
  },

  {
    title: "ListenIn",
    description: "EEG Hearing Aid to address the Cocktail Party Problem",
    stack: "Python, Arduino, OpenBCI, TensorFlow",
    link: "https://www.youtube.com/watch?v=0SOuqN3godo",
  },
  {
    title: "OpenPulse",
    description: "Real-time ECG monitoring system for Atrial Fibrillation",
    stack: "Arduino, Scikit-learn, Python",
    link: "https://docs.google.com/presentation/d/1dVH1CVKSn8gjADsDj8vdTK-3Z6R9WLipYORamzsMNiw/edit?usp=sharing",
  },
  {
    title: "Rhyzode",
    description: "Public Display Platform for engineering projects",
    stack: "Google Cloud, React",
    link: "https://rhyzode.web.app/",
  },
];

function Projects() {
  return (
    <div style={{ textAlign: "left" }}>
      <h6>
        <strong>Projects</strong>
      </h6>

      <div className="cardGrid">
        {projects.map((project, i) => {
          return (
            <Card
              key={i}
              style={{ maxWidth: "300px" }}
              onClick={() => window.open(project.link)}
              className="projectCard">
              <CardBody>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <CardTitle>{project.title}</CardTitle>
                  <GoLinkExternal />
                </div>
                <p>{project.description}</p>
                <p>
                  <strong>Technologies: </strong>
                  {project.stack}
                </p>
              </CardBody>
            </Card>
          );
        })}
      </div>

      <br />
      <br />
    </div>
  );
}

export default Projects;
