import "shards-ui/dist/css/shards.min.css";
import "./home.css";
import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Image } from "react-bootstrap";
import { Button, Container, Row, Modal, ModalHeader, ModalBody } from "shards-react";
import Typist from "react-text-typist";
import { SocialIcon } from "react-social-icons";
import headshot from "./assets/headshot.webp";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    const { open } = this.state;
    return (
      <>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Container className="display" fluid>
            <br />
            <br />
            <Row>
              <div className="holder">
                <Image id="headshot" src={headshot} alt="Kaustubh Sonawane" width="300wv" />
              </div>
            </Row>
            <Row>
              <div className="holder">
                <h1 className="header">Hello!</h1>
              </div>
            </Row>
            <Row>
              <div className="holder">
                <h1 className="header">
                  I'm{" "}
                  <Typist
                    sentences={[
                      "Kaustubh Sonawane",
                      "a Passionate Learner",
                      "a Driven Student",
                      "a Future Leader",
                      "Kaustubh Sonawane",
                    ]}
                    typingSpeed="1"
                    deletingSpeed="2"
                    loop={false}
                  />
                </h1>
              </div>
            </Row>
            <br />
            <span>
              <Button style={{ margin: "1vw" }} theme="dark" onClick={this.toggle}>
                Learn more about Me!
              </Button>
            </span>
            <br /> <br />
            <Row>
              <div className="holder">
                <SocialIcon
                  rel="noopener"
                  className="icon"
                  url="https://github.com/sona78"
                  target="_blank"
                  bgColor="#eeeeee"
                />
                <SocialIcon
                  rel="noopener"
                  className="icon"
                  url="https://www.linkedin.com/in/kaustubh-sonawane-977a8318a/"
                  target="_blank"
                  bgColor="#eeeeee"
                />
                <SocialIcon
                  className="icon"
                  url="mailto: kaustubh.sonawane@utexas.edu"
                  target="_blank"
                  bgColor="#eeeeee"
                />
              </div>
            </Row>
            <br />
            <br />
            <Row>
              <div className="holder">
                <h1>
                  <a href="#experience">
                    <BsChevronDoubleDown />
                  </a>
                </h1>
              </div>
            </Row>
          </Container>
        </div>

        <Modal open={open} toggle={this.toggle} centered="true">
          <ModalHeader>About Me</ModalHeader>
          <ModalBody className="sect">
            Nice to meet you! I'm Kaustubh Sonawane, and I'm currently a student in the Computer
            Science & Business Honors Program at UT Austin. I'm deeply invested in giving back to
            community, especially through applying my skills in computer science and
            entrepreneurship to solve real-world problems. Outside of these pursuits, I'm a proud
            pianist of 11 years 🎹 and an aspiring startup founder 👨‍💼. Welcome to my humble abode of
            the internet! 🌟
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Home;
