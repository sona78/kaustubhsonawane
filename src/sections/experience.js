import React, { useState } from "react";
import { Container, Col, Collapse } from "shards-react";

import * as S from "./styled";
import TutorScopeLogo from "../assets/TutorScopeLogo.png";
import FiveableLogo from "../assets/FiveableLogo.png";
import WagerLogo from "../assets/WagerLogo.png";
import FederalLogo from "../assets/FedReserve.png";
import JusticeTextLogo from "../assets/JusticeTextLogo.jpg";

const experiences = [
  {
    logo: JusticeTextLogo,
    company: "JusticeText",
    title: "Software Engineering Intern / True Fellow",
    dates: "Jun 2024 - Aug 2024",
    description:
      "Seed-stage startup building an AI platform for public defenders to efficiently review police bodycam footage",
  },
  {
    logo: FederalLogo,
    company: "Federal Reserve",
    title: "National IT Intern",
    dates: "Jun 2023 - Aug 2023",
    description:
      "National bank of the United States managing cash flow across 12 districts and 10,000+ financial institutions",
  },
  {
    logo: WagerLogo,
    company: "Wager",
    title: "Chief Technical Officer and Cofounder",
    dates: "Oct 2022 - Apr 2024",
    description: "Startup developing a Web3 peer-to-peer social betting platform for any event",
  },
  {
    logo: FiveableLogo,
    company: "Fiveable Inc",
    title: "Product Operations Associate",
    dates: "May 2021 - Jun 2022",
    description:
      "Series A startup building a student-led educational platform for AP test preparation content and private virtual study rooms",
  },
  {
    logo: TutorScopeLogo,
    company: "TutorScope",
    title: "Director and Cofounder",
    dates: "Mar 2020 - May 2022",
    description:
      "Nonprofit organization offering free online tutoring to thousands of students of all ages across the world",
  },
];

function Experience() {
  const [toggle, setToggle] = useState(new Array(experiences.length).fill(false));

  const handleToggle = (index) => {
    setToggle(toggle.map((value, i) => (i === index ? !value : value)));
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h6>
        <strong>Experience</strong>
      </h6>

      <hr style={{ borderTop: "2px dotted #000000" }} />

      {experiences.map((experience, i) => {
        return (
          <>
            <Container
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => handleToggle(i)}>
              <Col md={1}>
                <img src={experience.logo} alt="Logo" height="25px" />
              </Col>
              <Col md={2}>
                <S.Anchor>
                  <strong>{experience.company}</strong>
                </S.Anchor>
              </Col>
              <Col md={7}>{experience.title}</Col>
              <Col md={4}>{experience.dates}</Col>
            </Container>
            <Collapse className="p-3 mt-3 " style={{ height: "100%" }} open={toggle[i]}>
              <span>{experience.description}</span>
            </Collapse>

            <hr style={{ borderTop: "2px dotted #000000" }} />
          </>
        );
      })}
      <br />
      <br />
    </div>
  );
}

export default Experience;
