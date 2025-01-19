import "shards-ui/dist/css/shards.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Row, Col, NavLink } from "shards-react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Header = (props) => {
  const matches = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 30,
          marginBottom: 30,
        }}>
        <Col md={8}>
          <h3 style={{ textAlign: matches ? "center" : "left", marginTop: 5 }}>Hi I'm Kaustubh!</h3>
        </Col>

        {props.isMain && (
          <Col style={{ display: "flex", justifyContent: matches ? "center" : "left" }} md={4}>
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
          </Col>
        )}
      </Row>
    </>
  );
};

export default Header;
