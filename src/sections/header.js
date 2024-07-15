import "shards-ui/dist/css/shards.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row, NavLink } from "shards-react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";

const Header = () => {
  return (
    <>
      <Row>
        <Container
          style={{
            margin: "0px",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "flex-end",
          }}>
          <Container style={{ display: "flex", justifyContent: "flex-end" }}>
            <NavLink href="https://github.com/sona78" target="_blank" active>
              <GrGithub />
            </NavLink>
            <NavLink
              href="https://www.linkedin.com/in/kaustubh-sonawane-977a8318a/"
              target="_blank"
              active>
              <GrLinkedin />
            </NavLink>
            <NavLink href="mailto: kaustubh.sonawane@utexas.edu" target="_blank" active>
              <GrMail />
            </NavLink>

            <NavLink active href="/Resume.pdf" target="_blank">
              <strong>Resume</strong>
            </NavLink>
          </Container>
        </Container>
      </Row>
      <Row style={{ display: "flex", justifyContent: "left", alignItems: "left" }}>
        <h3 style={{ textAlign: "left" }}>Hi I'm Kaustubh</h3>
      </Row>
    </>
  );
};

export default Header;
