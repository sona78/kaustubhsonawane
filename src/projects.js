import "shards-ui/dist/css/shards.min.css";
import './projects.css'
import {BsChevronDoubleUp, BsSearch, BsLink45Deg} from 'react-icons/bs';
import {AiOutlineGithub, AiFillPlaySquare} from 'react-icons/ai';
import { CardColumns, Col, Row, Card } from "react-bootstrap"
import { Container, Button, Collapse} from "shards-react";

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
        <Container className = "block" fluid>
            <Row>
                <h1 className = "head">Projects</h1>
            </Row>
            <br/><br/>


            <div style  = {{alignItems: 'center', justifyContent: 'center', display:'block'}}>

                <Row>
                    <Col>           
                    <Card className = 'card'>
                        <Card.Header><strong>06/19 - 05/22</strong></Card.Header>
                        <div style = {{display: 'flex', justifyContent:'center'}}>
                        <Card.Img alt="LungStat" src = {LungStatUI} style = {{width: '90%', height:'90%', margin: '5%'}} />
                        </div>
                        <Card.Title className = "fillin">LungStat</Card.Title>
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
                                </span>
                            </div>
                        </Collapse>

                            <br/>
                                <Row>
                                    <div style = {{justifyContent: "center", display: 'flex', margin: 'auto'}}>
                                        <a href = "https://master.d3l44ojvpwarms.amplifyapp.com" target = "_blank" rel="noreferrer"><BsLink45Deg size = '3rem'/></a>
                                        <a href = "https://drive.google.com/file/d/1Z0olu0kkQKZ9CuU8sgcVbCKg6K6VCD9J/view?usp=sharing" target = "_blank" rel="noreferrer"><BsSearch size = '3rem'/></a>
                                    </div>
                                </Row>
                        </Card.Body>
                        
                    </Card>
                    </Col>
                    <Col>
                    <Card className = 'card'>
                        <Card.Header><strong>08/20 - 05/22</strong></Card.Header>
                        <div style = {{display: 'flex', justifyContent:'center'}}>
                        <Card.Img alt="ListenIn" src = {ListenIn} style = {{width: '90%', height:'90%', margin: '5%'}} />
                        </div>
                        <Card.Title className = "fillin">ListenIn</Card.Title>
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
                                </span>
                            </div>
                        </Collapse>

                            <br/>
                                <Row>
                                    <div style = {{justifyContent: "center", display: 'flex', margin: 'auto'}}>
                                        <a href = "https://www.youtube.com/watch?v=0SOuqN3godo" target = "_blank" rel="noreferrer"><AiFillPlaySquare size = '3rem'/></a>
                                    </div>
                                </Row>
                        </Card.Body>    
                    </Card>
                    </Col>
                    <Col>
                    <Card className = 'card'>
                        <Card.Header><strong>06/21 - 04/22</strong></Card.Header>
                        <div style = {{display: 'flex', justifyContent:'center'}}>
                        <Card.Img alt="OpenPulse" src = {OpenPulse} style = {{width: '90%', height:'90%', margin: '5%'}} />
                        </div>
                        <Card.Title className = "fillin">OpenPulse</Card.Title>
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
                                    <div style = {{justifyContent: "center", display: 'flex', margin: 'auto'}}>
                                        <a href = "https://docs.google.com/presentation/d/1dVH1CVKSn8gjADsDj8vdTK-3Z6R9WLipYORamzsMNiw/edit?usp=sharing" target = "_blank" rel="noreferrer"><BsLink45Deg size = '3rem'/></a>
                                    </div>
                                </Row>
                        </Card.Body>    
                    </Card>
                    </Col>
                    <Col>
                    <Card className = 'card'>
                        <Card.Header><strong>01/21 - 07/21</strong></Card.Header>
                        <div style = {{display: 'flex', justifyContent:'center'}}>
                        <Card.Img alt="Rhyzode" src = {Rhyzode} style = {{width: '90%', height:'90%', margin: '5%'}} />
                        </div>
                        
                        <Card.Title className = "fillin">Rhyzode</Card.Title>
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
                                <Row >
                                    <div style = {{justifyContent: "center", display: 'flex', margin: 'auto'}}>
                                        <a href = "https://rhyzode.web.app/" target = "_blank" rel="noreferrer"><BsLink45Deg size = '3rem'/></a>
                                        <a href = "https://github.com/sona78/Rhyzode" target = "_blank" rel="noreferrer"><AiOutlineGithub size = '3rem'/></a>
                                    </div>
                                </Row>
                        </Card.Body>    
                    </Card>
                    </Col>
                </Row>
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