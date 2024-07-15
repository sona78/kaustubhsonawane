import "shards-ui/dist/css/shards.min.css";
import './experience.css';
import React, {useState} from 'react';
import {BsChevronDoubleDown} from 'react-icons/bs';
import {  Carousel } from 'react-bootstrap'
import { Container, Row, Col } from "shards-react";

import TutorScopeLogo from './assets/TutorScopeLogo.png';
import FiveableLogo from './assets/FiveableLogo.png';
import WagerLogo from './assets/WagerLogo.png';
import FederalLogo from './assets/FedReserve.png';

function Experience(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }
    return(
        <Container className = "block" fluid>
            <Row>
                <h1 className = "head">Experience</h1>
            </Row>
            <br/><br/>

            <Carousel style={{backgroundColor: "#111111", borderRadius: 20}}interval={null}  activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item >

                <div className = "fit" style={{justifyContent:"center"}}>
                        <div style = {{ width: '22rem'}}>
                            <Col md="auto" >
                                <img id = "logo" src = {WagerLogo} alt = "Wager Logo" height = "100wv"/>
                            </Col><br/>
                            <Col style={{justifyContent:"center", textAlign:"center"}}>
                                
                                    <h1 className = 'heading' style={{justifyContent:"center", textAlign:"center", color:"#ffffff"}}><a href="https://wager.social" rel="noreferrer" target="_blank" style={{color:"#ffffff"}}>Wager</a></h1>
                                    <h4 className = 'heading' style={{justifyContent:"center", textAlign:"center"}}>Chief Technical Officer</h4>
                                    <h5 className = 'heading' style={{justifyContent:"center", textAlign:"center"}}>10/22-Present</h5><br/>
                                
                            </Col>

                        </div>
                <div className = "lift">
                    <Col style = {{display: 'flex', alignItems: 'center'}} >
                            <h6 className = 'heading'>
                            &gt;  Founded a <u><strong> peer-to-peer social betting startup</strong></u> allowing users to bet on anything, anytime, anywhere <br/><br/>
                            &gt;  Designed and built a <u><strong>cross-platform cloud-centric</strong></u> mobile and web application using React, AWS, web3.js, and Node.js <br/><br/>
                            &gt;  Invited to the Solana Breakpoint Conference in Lisbon, Portugal to network with industry leaders and VC investors over 5 days
                            </h6>
                    </Col>
                    
                </div>
                </div>
                <h3 style={{color: "#ffffff", marginLeft:"95%"}}>
                    1
                </h3>

                </Carousel.Item>
                <Carousel.Item>

                <div className = "fit" style={{justifyContent:"center"}}>
                        <div style = {{width: '30rem'}}>
                            <Col md="auto" >
                                <img id = "logo" src = {FederalLogo} alt = "Federal Reserve Logo" height = "100wv"/>
                            </Col><br/>
                            <Col>
                                
                                    <h1 className = 'heading' style={{justifyContent:"center", textAlign:"center"}}><a href="https://www.dallasfed.org/"  rel="noreferrer" target="_blank" style={{color:"#ffffff"}}>Federal Reserve</a></h1>
                                    <h4 className = 'heading' style={{justifyContent:"center", textAlign:"center"}}>National IT Intern</h4>
                                    <h5 className = 'heading' style={{justifyContent:"center", textAlign:"center"}}>06/23-08/23</h5> <br/>
                                
                            </Col>

                        </div>
                <div className = "lift">
                    <Col style = {{display: 'flex', alignItems: 'center'}} >
                            <h6 className = 'heading'>
                            &gt;  Coordinated the migration of the <u><strong>End User Services</strong></u> team resources to the Azure Cloud through a proof-of-concept cloud architecture <br/><br/>
                            &gt;  Restructured the dataflow of multiple server datacenters linked to systemwide endpoints to <u><strong>reduce hardware operational costs by 70%</strong></u> <br/><br/>
                            &gt;  Enhanced the <u><strong>data analytics capabilities</strong></u> for systems tracking of 5000+ devices using Tableau, Power BI, and Visual Basic
                            </h6>
                    </Col>

                </div>

                </div>
                <h3 style={{color: "#ffffff", marginLeft:"95%"}}>
                    2
                </h3>

                </Carousel.Item>
                <Carousel.Item>

                <div className = "fit" style={{justifyContent:"center"}}>
                        <div style = {{width: '22rem'}}>
                            <Col md="auto" >
                                <img id = "logo" src = {FiveableLogo} alt = "Wager Logo" height = "100wv"/>
                            </Col><br/>
                            <Col>
                                
                                    <h1 className = 'heading' style={{justifyContent:"center", textAlign:"center"}}><a href="https://fiveable.me"  rel="noreferrer" target="_blank" style={{color:"#ffffff"}}>Fiveable</a></h1>
                                    <h4 className = 'heading' style={{justifyContent:"center", textAlign:"center"}}>Operations Associate</h4>
                                    <h5 className = 'heading' style={{justifyContent:"center", textAlign:"center"}}>05/21-06/22</h5> <br/>
                                
                            </Col>

                        </div>
                <div className = "lift">
                    <Col style = {{display: 'flex', alignItems: 'center'}} >
                            <h6 className = 'heading'>
                            &gt;  Selected for a paid position from <u><strong>200+ applicants</strong></u> as the youngest member of the Experience department <br/><br/>
                            &gt;  <u><strong>Enhanced project communication efficiency by 60%</strong></u> by overseeing migration to a new project management platform <br/><br/>
                            &gt;  Collaborated directly with head executives to shift company focus from AP exam content to building student discussion groups
                            </h6>
                    </Col>

                </div>

                </div>
                <h3 style={{color: "#ffffff", marginLeft:"95%"}}>
                    3
                </h3>

                </Carousel.Item>
                <Carousel.Item>

                <div className = "fit" style={{justifyContent:"center"}}>
                        <div style = {{width: '22rem'}}>
                            <Col md="auto">
                                <img  id = "logo" src = {TutorScopeLogo} alt = "TutorScope Logo" height = "100wv"/>
                            </Col><br/>
                            <Col>
                                <h1 className = 'heading' style={{justifyContent:"center", textAlign:"center"}}><a href="https://tutorscope.org" rel="noreferrer" target="_blank" style={{color:"#ffffff"}}>TutorScope</a></h1>
                                <h4 className = 'heading' style={{justifyContent:"center", textAlign:"center"}}>Cofounder/Director</h4>
                                <h5 className = 'heading' style={{justifyContent:"center", textAlign:"center"}}>03/20-05/22</h5> <br/>
                            </Col>

                        </div>

                <div className = "lift">
                    <Col style = {{display: 'flex', alignItems: 'center'}} >
                            <h6 className = 'heading'>
                                &gt;  <u><strong>Founded a free tutoring organization</strong></u> to address the lack of personalized education during COVID-19<br/><br/>
                                &gt;  Directed student registration, signup, and session scheduling of the nonprofit organization <u><strong>with 3000+ students</strong></u><br/><br/>
                                &gt;  Featured on AP News, the Washington Post, and NBC-DFW and <u><strong>recognized by House of Representatives</strong></u> 
                            </h6>
                    </Col>
                    
                </div>
                </div>
                <h3 style={{color: "#ffffff", marginLeft:"95%"}}>
                    4
                </h3>
                </Carousel.Item>
            </Carousel>

           
               

            <br/>
            <Row>
                <div className = "holder">
                    <h1><a href = "#activities"><BsChevronDoubleDown/></a></h1>
                </div>
            </Row>
        </Container>
    );
}

export default Experience;