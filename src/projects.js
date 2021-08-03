import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './projects.css'
import {BsChevronDoubleUp, BsSearch, BsLink45Deg} from 'react-icons/bs';
import {AiOutlineGithub, AiFillPlaySquare} from 'react-icons/ai';

import { CardColumns, Card, CardHeader, CardTitle, CardImg, CardBody, Container, Row} from "shards-react";

import LungStatUI from './assets/LungStatUI.png';
import Rhyzode from './assets/Rhyzode.png';
import ListenIn from './assets/ListenIn.png';

function Projects(){
    return(
        <Container className = "area" fluid>
            <Row>
                <h1 className = "header2">Projects</h1>
            </Row>
            <br/><br/>
                <CardColumns>

                    <Card style={{ maxWidth: "20vw", backgroundColor: '#eeeeee' }}>
                        <CardHeader><strong>06/18 - Present</strong></CardHeader>
                        <CardImg src = {LungStatUI} style = {{maxWidth: '18vw', margin: '1vw'}} />
                        <CardTitle>LungStat</CardTitle>
                        <CardBody style = {{textAlign: "left"}}>
                            <Row>
                                LungStat is a fully-packaged machine learning web application solution for the current diagnosis process for lung cancer. Using a stack consisting of a Lambda Function API, React, and DynamoDB built within AWS, the software can locate and identify lung cancer tumors at more than a 93% accuracy. 
                            </Row>
                            <br/>
                            <Row>
                                <u><strong>Recognition: </strong></u>
                                TXSEF Finalist, GENIUS Olympiad Silver Medalist, IEMS Presenter
                            </Row>
                            <br/>
                            <Row>
                                <div style = {{display: 'flex', margin: 'auto'}}>
                                    <a href = "https://www.lungstat.com/" target = "_blank" rel="noreferrer"><BsLink45Deg size = '3vw'/></a>
                                    <a href = "https://drive.google.com/file/d/10lAsHvdIM7tOWJGnl2nauMmMJfJGyu7K/view" target = "_blank" rel="noreferrer"><BsSearch size = '3vw'/></a>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>

                    <Card style={{ maxWidth: "20vw", backgroundColor: '#eeeeee' }}>
                        <CardHeader><strong>08/20 - Present</strong></CardHeader>
                        <CardImg src = {ListenIn} style = {{maxWidth: '18vw', margin: '1vw'}} />
                        <CardTitle>ListenIn</CardTitle>
                        <CardBody style = {{textAlign: "left"}}>
                            <Row>
                                ListenIn Inc has created a cost-effective, AI-based hearing aid to address the Cocktail Party Problem. Our device reads a listener’s brainwaves to identify a single speaker in a busy crowd.  ListenIn can significantly improve conversational speech quality for hard-of-hearing users, allowing for greater adoption and utility of hearing aids worldwide.
                            </Row>
                            <br/>
                            <Row>
                                <u><strong>Recognition: </strong></u>
                                2021 Diamond Challenge 2nd Place Winner (2/800+)
                            </Row>
                            <br/>
                            <Row>
                                <div style = {{display: 'flex', margin: 'auto'}}>
                                    <a href = "https://listenin.info/" target = "_blank" rel="noreferrer"><BsLink45Deg size = '3vw'/></a>
                                    <a href = "https://www.youtube.com/watch?v=0SOuqN3godo" target = "_blank" rel="noreferrer"><AiFillPlaySquare size = '3vw'/></a>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>

                    <Card style={{ maxWidth: "20vw", backgroundColor: '#eeeeee' }}>
                        <CardHeader>01/21 - 07/21</CardHeader>
                        <CardImg src = {Rhyzode} style = {{maxWidth: '18vw', margin: '1vw'}} />
                        <CardTitle>Rhyzode</CardTitle>
                        <CardBody style = {{textAlign: "left"}}>
                            <Row>
                                Rhyzode is a public display platform for students to share their projects with the world!. This platform was developed in order to offer a new platform for students to showcase any engineering projects they did in their spare time and allow them a space to gain recognition and users for their applications
                            </Row>
                            <br/>
                            <Row>
                                <div style = {{display: 'flex', margin: 'auto'}}>
                                    <a href = "https://rhyzode.tech/" target = "_blank" rel="noreferrer"><BsLink45Deg size = '3vw'/></a>
                                    <a href = "https://github.com/sona78/Rhyzode" target = "_blank" rel="noreferrer"><AiOutlineGithub size = '3vw'/></a>
                                </div>
                            </Row>
                            
                        </CardBody>
                    </Card>

                </CardColumns>
            <Row>
                <div className = "holder">
                    <h1><a href = "/#"><BsChevronDoubleUp/></a></h1>
                </div>
            </Row>
        </Container>
    );
}

export default Projects;