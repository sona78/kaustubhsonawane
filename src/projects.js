import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './projects.css'
import {BsChevronDoubleUp, BsSearch, BsLink45Deg} from 'react-icons/bs';
import {AiOutlineGithub, AiFillPlaySquare} from 'react-icons/ai';
import { CardColumns, Card } from "react-bootstrap"
import { Container, Row, Button, Collapse} from "shards-react";

import React from "react";
import LungStatUI from './assets/LungStatUI.png';
import Rhyzode from './assets/Rhyzode.png';
import ListenIn from './assets/ListenIn.png';
import OpenPulse from './assets/OpenPulse.png';


class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collapse: [false, false, false, false, false]
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle(num) {
        let collapse = this.state.collapse
        console.log(collapse)
        collapse[num] = !collapse[num]
        this.setState({ collapse: collapse });
    }
    render(){
    return(
        <Container className = "area" fluid>
            <Row>
                <h1 className = "header2">Projects</h1>
            </Row>
            <br/><br/>


            <div style  = {{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>

                <CardColumns style = {{columns:'auto'}}>
            
                    <Card className = 'card'>
                        <Card.Header><strong>06/18 - Present</strong></Card.Header>
                        <div style = {{display: 'flex', justifyContent:'center'}}>
                        <Card.Img src = {LungStatUI} style = {{width: '20rem', margin: '1rem'}} />
                        </div>
                        <Card.Title>LungStat</Card.Title>
                        <Card.Body>

                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                        <Button onClick = {() => this.toggle(0)}>Learn More</Button>
                        </div>

                        <Collapse open = {this.state.collapse[0]} style = {{textAlign: 'left', margin: '1vw'}} className="p-3 mt-3 border rounded">
                            <div style = {{margin: '1vw'}} >
                                <span>
                                <Row>
                                    LungStat is a fully-packaged machine learning web application solution for the current diagnosis process for lung cancer. Using a stack consisting of a Lambda Function API, React, and DynamoDB built within AWS, the software can locate and identify lung cancer tumors at more than a 93% accuracy. 
                                </Row>
                                <br/>
                                <Row>
                                    <u><strong>Recognition: </strong></u>
                                    TXSEF Finalist, GENIUS Olympiad Silver Medalist, IEMS Presenter
                                </Row>
                                </span>
                            </div>
                        </Collapse>

                            <br/>
                                <Row>
                                    <div style = {{display: 'flex', margin: 'auto'}}>
                                        <a href = "https://www.lungstat.com/" target = "_blank" rel="noreferrer"><BsLink45Deg size = '3rem'/></a>
                                        <a href = "https://drive.google.com/file/d/10lAsHvdIM7tOWJGnl2nauMmMJfJGyu7K/view" target = "_blank" rel="noreferrer"><BsSearch size = '3rem'/></a>
                                    </div>
                                </Row>
                        </Card.Body>
                        
                    </Card>
                    
                    <Card className = 'card'>
                        <Card.Header><strong>08/20 - Present</strong></Card.Header>
                        <div style = {{display: 'flex', justifyContent:'center'}}>
                        <Card.Img src = {ListenIn} style = {{width: '20rem', margin: '1rem'}} />
                        </div>
                        <Card.Title>ListenIn</Card.Title>
                        <Card.Body>

                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                        <Button onClick = {() => this.toggle(1)}>Learn More</Button>
                        </div>

                        <Collapse open = {this.state.collapse[1]} style = {{textAlign: 'left', margin: '1vw'}} className="p-3 mt-3 border rounded">
                            <div style = {{margin: '1vw'}} >
                                <span>
                                <Row>
                                ListenIn Inc has created a cost-effective, AI-based hearing aid to address the Cocktail Party Problem. Our device reads a listener’s brainwaves to identify a single speaker in a busy crowd.  ListenIn can significantly improve conversational speech quality for hard-of-hearing users, allowing for greater adoption and utility of hearing aids worldwide.
                                </Row>
                                <br/>
                                <Row>
                                    <u><strong>Recognition: </strong></u>
                                    2021 Diamond Challenge 2nd Place Winner (2/800+), 2021 Roundpier Entrepreneurship Competition 1st Place Winner (1/60+)
                                </Row>
                                </span>
                            </div>
                        </Collapse>

                            <br/>
                                <Row>
                                    <div style = {{display: 'flex', margin: 'auto'}}>
                                        <a href = "https://listenin.info/" target = "_blank" rel="noreferrer"><BsLink45Deg size = '3rem'/></a>
                                        <a href = "https://www.youtube.com/watch?v=0SOuqN3godo" target = "_blank" rel="noreferrer"><AiFillPlaySquare size = '3rem'/></a>
                                    </div>
                                </Row>
                        </Card.Body>    
                    </Card>

                    <Card className = 'card'>
                        <Card.Header><strong>06/21 - Present</strong></Card.Header>
                        <div style = {{display: 'flex', justifyContent:'center'}}>
                        <Card.Img src = {OpenPulse} style = {{width: '20rem', margin: '1rem'}} />
                        </div>
                        <Card.Title>OpenPulse</Card.Title>
                        <Card.Body>

                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                        <Button onClick = {() => this.toggle(3)}>Learn More</Button>
                        </div>

                        <Collapse open = {this.state.collapse[3]} style = {{textAlign: 'left', margin: '1vw'}} className="p-3 mt-3 border rounded">
                            <div style = {{margin: '1vw'}} >
                                <span>
                                <Row>
                                In order to incorporate existing innovation within portable ECGs and make them more accessible to the developing world, this project establishes a wearable prototype ECG band with haptic feedback for a user to be used in a resource-constrained environment.
                                </Row>
                                </span>
                            </div>
                        </Collapse>

                            <br/>
                                <Row>
                                    <div style = {{display: 'flex', margin: 'auto'}}>
                                        <a href = "https://docs.google.com/presentation/d/1dVH1CVKSn8gjADsDj8vdTK-3Z6R9WLipYORamzsMNiw/edit?usp=sharing" target = "_blank" rel="noreferrer"><BsLink45Deg size = '3rem'/></a>
                                    </div>
                                </Row>
                        </Card.Body>    
                    </Card>

                    <Card className = 'card'>
                        <Card.Header>01/21 - 07/21</Card.Header>
                        <div style = {{display: 'flex', justifyContent:'center'}}>
                        <Card.Img src = {Rhyzode} style = {{width: '20rem', margin: '1rem'}} />
                        </div>
                        
                        <Card.Title>Rhyzode</Card.Title>
                        <Card.Body>

                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                        <Button onClick = {() => this.toggle(2)}>Learn More</Button>
                        </div>

                        <Collapse open = {this.state.collapse[2]} style = {{textAlign: 'left', margin: '1vw'}} className="p-3 mt-3 border rounded">
                            <div style = {{margin: '1vw'}} >
                                <span>
                                <Row>
                                Rhyzode is a public display platform for students to share their projects with the world!. This platform was developed in order to offer a new platform for students to showcase any engineering projects they did in their spare time and allow them a space to gain recognition and users for their applications
                                </Row>
                                </span>
                            </div>
                        </Collapse>

                            <br/>
                                <Row>
                                    <div style = {{display: 'flex', margin: 'auto'}}>
                                        <a href = "https://rhyzode.tech/" target = "_blank" rel="noreferrer"><BsLink45Deg size = '3rem'/></a>
                                        <a href = "https://github.com/sona78/Rhyzode" target = "_blank" rel="noreferrer"><AiOutlineGithub size = '3rem'/></a>
                                    </div>
                                </Row>
                        </Card.Body>    
                    </Card>

                </CardColumns>
                </div>
                
            <Row>
                <div className = "holder">
                    <h1><a href = "/#"><BsChevronDoubleUp/></a></h1>
                </div>
            </Row>
        </Container>
    );
    }
}

export default Projects;