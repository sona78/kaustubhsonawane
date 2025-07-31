import React from "react";
import "./education.css";
import { Container, Row, Col } from "shards-react";

function Education() {
  const educationData = [
    {
      school: "University of Texas at Austin",
      degree: "Computer Science & Business Honors",
      dates: "August 2022 - May 2026",
      relevantCoursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Architecture",
        "Virtualization",
        "Machine Learning",
        "Systems for ML/Big Data",
        "Natural Language Processing",
      ],
      activities: [
        "Texas Product Engineering Organization",
        "Noteworthy A Cappella",
        "Texas Ballroom",
        "Computer Science & Business Association",
      ],
    },
    {
      school: "Plano West Senior High School",
      dates: "August 2018 - May 2022",
      activities: ["Debate", "Science Fair", "Pitch Competitions", "Robotics", "Piano"],
    },
  ];

  return (
    <div style={{ textAlign: "left" }}>
      <h6>
        <strong>Education</strong>
      </h6>

      {educationData.map((education, index) => (
        <Container key={index} className="educationBlurb">
          <Row style={{ display: "flex", justifyContent: "space-between", margin: 10 }}>
            <Col sm={8}>
              <strong>{education.school}</strong>
            </Col>
            <Col sm={4}>
              <p>{education.dates}</p>
            </Col>
          </Row>

          <ul>
            {education.activities && (
              <li>
                <p>
                  <strong>Activities:</strong> {education.activities.join(", ")}
                </p>
              </li>
            )}
            {education.relevantCoursework && (
              <li>
                <p>
                  <strong>Relevant Coursework:</strong> {education.relevantCoursework.join(", ")}
                </p>
              </li>
            )}
          </ul>
        </Container>
      ))}
    </div>
  );
}

export default Education;
