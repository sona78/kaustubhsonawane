import React from "react";
import headshot from "../assets/headshot.webp";
import { Image } from "react-bootstrap";
import { Col, Row } from "shards-react";
import * as S from "./styled";

const interests = ["Systems Development", "Intuitive Product Design", "NLP"];

const books = ["Superintelligence by Nick Bostrom", "Wuthering Heights by Emily Bronte"];

function Home() {
  return (
    <>
      <Row>
        <Col style={{ textAlign: "left" }} xs={8}>
          <text>
            I'm a student at UT Austin majoring in{" "}
            <S.Anchor href="https://csb.utexas.edu/" target="_blank">
              Computer Science & Business
            </S.Anchor>
          </text>{" "}
          <br />
          <br />
          <text>
            On campus, I'm part of the{" "}
            <S.Anchor href="https://txproduct.org/" target="_blank">
              Texas Product Engineering Organization (TPEO)
            </S.Anchor>{" "}
            building software solutions for my community. In my free hours, I'm a singer in
            Noteworthy A Cappella, a pianist of 14 years, and an avid distance runner
          </text>{" "}
          <br />
          <br />
          <text>
            I'm interested in {interests[0]}, {interests[1]}, and {interests[2]}
          </text>
          <br />
          <br />
          <text>
            I'm currently reading {books[0]} and {books[1]}
          </text>
          <br />
          <br />
          <text>
            I'm always looking to learn from new people. Reach out to me at{" "}
            <S.Anchor href="mailto:kaustubh.sonawane@utexas.edu" target="_blank">
              kaustubh.sonawane@utexas.edu
            </S.Anchor>
          </text>
        </Col>
        <Col xs={4}>
          <Image rounded id="headshot" src={headshot} alt="Kaustubh Sonawane" width="300wv" />
        </Col>
      </Row>
      <br />
      <br />
    </>
  );
}

export default Home;
