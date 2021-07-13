import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './home.css';
import React from 'react';
import {BsChevronDoubleDown} from 'react-icons/bs';
import { Button, Container, Row, Modal, ModalHeader, ModalBody } from "shards-react";
import Typist from 'react-text-typist';
import { SocialIcon } from 'react-social-icons';

import headshot from './assets/headshot.png';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
          open: !this.state.open
        });
    }
    render(){
        const { open } = this.state;
        return(
            <>
            <Container className = "display" fluid>
                <br/><br/>
                <Row>
                    <div className = "holder">
                        <img id = "headshot" src = {headshot} alt = "Headshot" width = "300wv"/>
                    </div>
                </Row>
                <Row>
                    <div className = "holder">
                        <h1 className = "header">Hello!</h1>
                    </div>
                </Row>
                <Row>
                    <div className = "holder">
                        <h1 className = "header">I'm <Typist sentences={['Kaustubh Sonawane', 'a Passionate Learner', 'a Driven Student', 'a Future Leader', 'Kaustubh Sonawane']} typingSpeed= "150" deletingSpeed="60"  loop={false}/></h1>
                    </div>
                </Row>
                <br/>
                <Button theme = "dark" onClick={this.toggle} >Learn more about Me!</Button>
                <br/> <br/>
                <Row>
                    <div className = "holder">
                        <SocialIcon className= "icon" url="https://github.com/sona78" target = "_blank" bgColor="#eeeeee"/>
                        <SocialIcon className= "icon" url="https://www.linkedin.com/in/kaustubh-sonawane-977a8318a/" target = "_blank" bgColor="#eeeeee"/>
                        <SocialIcon className= "icon" url="https://www.facebook.com/kaustubh.sona.1297" target = "_blank" bgColor="#eeeeee"/>
                        <SocialIcon className= "icon" url="https://www.instagram.com/kaustubhsonawane78/" target = "_blank" bgColor="#eeeeee"/>
                        <SocialIcon className= "icon" url="mailto: sona.om78@gmail.com" target = "_blank" bgColor="#eeeeee"/>
                    </div>
                </Row>
                <br/><br/>
                <Row>
                <div className = "holder">
                    <h1><a href = "#experience"><BsChevronDoubleDown/></a></h1>
                </div>
                </Row>
            </Container>


            <Modal open={open} toggle={this.toggle} centered = 'true'>
                <ModalHeader>About Me</ModalHeader>
                <ModalBody className = "sect">Nice to meet you! I'm Kaustubh Sonawane, and I'm currently a senior at Plano West Senior High School in Plano, Texas. I've worn a lot of hats throughout my educational career, but I consider myself a full-time learner of the wonders in the world 🌎. Outside of this pursuit of knowledge, I'm a proud pianist of 10 years 🎹, a self-titled entrepreneur 💼, and a professional arguer (debater) 📝. Welcome to my humble abode of the internet 🌟!</ModalBody>
            </Modal>
            </>
        );
    }
}

export default Home;