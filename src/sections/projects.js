import React from "react";
import "./projects.css";

import { GoLinkExternal } from "react-icons/go";
import { Card, CardTitle, CardBody } from "shards-react";

const projects = [
  {
    title: "Clarity",
    description:
      "AI-generated career plans: predict the future of an industry and create actionable steps for upskilling",
    stack: "Flask, Prompt Engineering, Exa, React, Supabase",
    link: "https://github.com/sona78/Clarity",
  },
  {
    title: "Storybook",
    description:
      "Public MCP Server that allows users to collaborate on AI stories published to social media",
    stack: "MCP, Tool Calling, AI Agents, Next.js, Flask",
    link: "https://github.com/sona78/Storybook",
  },
  {
    title: "Me.md",
    description:
      "A personalized browser agent that completes actions based on discovered insights about you",
    stack: "Chrome Extension, BrowserUse, Playwright, Dynamic Web Scraping",
    link: "https://github.com/masterfung/agihousehackathon",
  },
  {
    title: "Citation Crawler",
    description: "Write an article, then automatically find citations that support your claims",
    stack: "Exa, Next.js, Python, Flask, GPT-3.5",
    link: "https://github.com/sona78/Citation-Crawler",
  },
  {
    title: "Apollo",
    description: "A self completing to-do list using Generative AI Agents",
    stack: "Next.js, Flask, Python, AWS, Function Calling, AI Agents",
    link: "https://github.com/sanjitjuneja/agent_todo_list",
  },
  {
    title: "Bee Cave Foundation: Art Gallery",
    description:
      "Art gallery website for an Austin-area non-profit that supports community art initatives",
    stack: "React, Google API, Firebase",
    link: "https://github.com/tpeo/BeecaveFoundation",
  },
  {
    title: "Scribe",
    description: "AI-powered collective notetaking platform",
    stack: "Pinecone, Node.js, Python, AWS Lambda, Ada-002 Embeddings LLM",
    link: "https://scribenotes.netlify.app/",
  },
  {
    title: "LungStat",
    description: "Physician-assistant ML detection of Lung Cancer Tumors",
    stack: "TensorFlow, Python, React, OpenCV",
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
