import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import './home.css';
import {BsChevronDoubleDown} from 'react-icons/bs';
import { Container, Row } from "shards-react";
import Typist from 'react-text-typist';
import { SocialIcon } from 'react-social-icons';

import headshot from './assets/headshot.png';

function Home(){
    return(
        <Container className = "display" fluid>
            <br/><br/>
            <Row>
                <div className = "holder">
                    <img id = "headshot" src = {headshot} alt = "Headshot" width = "400wv"/>
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
            <br/><br/>
            <Row>
                <div className = "holder">
                    <SocialIcon className= "icon" url="https://github.com/sona78" bgColor="#eeeeee"/>
                    <SocialIcon className= "icon" url="https://www.linkedin.com/in/kaustubh-sonawane-977a8318a/" bgColor="#eeeeee"/>
                    <SocialIcon className= "icon" url="https://www.facebook.com/kaustubh.sona.1297" bgColor="#eeeeee"/>
                    <SocialIcon className= "icon" url="https://www.instagram.com/kaustubhsonawane78/" bgColor="#eeeeee"/>
                    <SocialIcon className= "icon" url="mailto: sona.om78@gmail.com" bgColor="#eeeeee"/>
                </div>
            </Row>
            <br/><br/>
            <Row>
                <div className = "holder">
                    <h1><a href = "#aboutme"><BsChevronDoubleDown/></a></h1>
                </div>
            </Row>
        </Container>
    );
}

export default Home;