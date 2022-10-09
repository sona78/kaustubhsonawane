import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './experience.css';
import {BsChevronDoubleDown} from 'react-icons/bs';
import { Jumbotron } from 'react-bootstrap'
import { Container, Row, Col } from "shards-react";

import TutorScopeLogo from './assets/TutorScopeLogo.png';
import FiveableLogo from './assets/FiveableLogo.png';
import YSJournalLogo from './assets/YSJournal.png';
import CASHClubLogo from './assets/CASHClubLogo.png';

function Experience(){
    return(
        <Container className = "block" fluid>
            <Row>
                <h1 className = "head">Experience</h1>
            </Row>
            <br/><br/>
            <Row>
                
                <Jumbotron className = "fit">
                        <div style = {{width: '22rem'}}>
                            <Col md="auto" >
                                <img id = "logo" src = {FiveableLogo} alt = "Fiveable Logo" height = "100wv"/>
                            </Col><br/>
                            <Col>
                                
                                    <h3 className = 'heading'>Operations Associate</h3>
                                    <h4 className = 'heading'>05/21-06/22</h4>
                                    <h5 className = 'heading'>Fiveable</h5> <br/>
                                
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
                </Jumbotron>

                <Jumbotron className = "fit">
                        <div style = {{width: '22rem'}}>
                            <Col md="auto">
                                <img  id = "logo" src = {YSJournalLogo} alt = "YSJournal Logo" height = "100wv"/>
                            </Col><br/>
                            <Col>
                                <h3 className = 'heading'>Head of Resilience</h3>
                                <h4 className = 'heading'>01/21-05/22</h4>
                                <h5 className = 'heading'>Young Scientists Journal</h5> <br/>
                            </Col>

                        </div>

                <div className = "lift">
                    <Col style = {{display: 'flex', alignItems: 'center'}} >
                            <h6 className = 'heading'>
                                &gt;  The Young Scientists Journal (YSJ) is an <u><strong>international peer-reviewed journal</strong></u> operated and intended for young adults from the ages of 12 to 20 <br/><br/>
                                &gt;  Facilitated transition to <u><strong>new communication and organizational platforms</strong></u> and aided to streamline the publishing process <br/><br/>
                                &gt;  <u><strong>Spearheaded risk-management</strong></u> within the journal's operations across marketing, outreach, and backend systems
                            </h6>
                    </Col>
                    
                </div>
                </Jumbotron>

                <Jumbotron className = "fit">
                        <div style = {{width: '22rem'}}>
                            <Col md="auto">
                                <img  id = "logo" src = {CASHClubLogo} alt = "CASH Club Logo" height = "100wv"/>
                            </Col><br/>
                            <Col>
                                <h3 className = 'heading'>VP of Logistics</h3>
                                <h4 className = 'heading'>08/20-05/22</h4>
                                <h5 className = 'heading'>CASH Club Corp</h5> <br/>
                            </Col>
                        </div>

                <div className = "lift">
                    <Col style = {{display: 'flex', alignItems: 'center'}} >
                            <h6 className = 'heading'>
                                &gt;  CASH Club is a stock investment club with <u><strong>50+ branches internationally</strong></u> educating high school students about investing through weekly presentations<br/><br/>
                                &gt;  Managed intake of new branches and outreach representatives for the organization and <u><strong>networked with industry leaders</strong></u> to improve central curriculum <br/><br/>
                                &gt;  <u><strong>Expanded organization presence</strong></u> through grants and direct marketing to students worldwide
                            </h6>
                    </Col>
                    
                </div>
                </Jumbotron>

                <Jumbotron className = "fit">
                        <div style = {{width: '22rem'}}>
                            <Col md="auto">
                                <img  id = "logo" src = {TutorScopeLogo} alt = "TutorScope Logo" height = "100wv"/>
                            </Col><br/>
                            <Col>
                                <h3 className = 'heading'>Cofounder/Director</h3>
                                <h4 className = 'heading'>03/20-05/22</h4>
                                <h5 className = 'heading'>TutorScope</h5> <br/>
                            </Col>

                        </div>

                <div className = "lift">
                    <Col style = {{display: 'flex', alignItems: 'center'}} >
                            <h6 className = 'heading'>
                                &gt;  <u><strong>Founded a free tutoring organization</strong></u> to address the lack of personalized education during COVID-19<br/><br/>
                                &gt;  Directed student registration, signup, and session scheduling of the nonprofit organization <u><strong>with 2000+ students</strong></u><br/><br/>
                                &gt;  Featured on AP News, the Washington Post, and NBC-DFW and <u><strong>recognized by House of Representatives</strong></u> 
                            </h6>
                    </Col>
                    
                </div>
                </Jumbotron>

            </Row>


            <Row>
                <div className = "holder">
                    <h1><a href = "#activities"><BsChevronDoubleDown/></a></h1>
                </div>
            </Row>
        </Container>
    );
}

export default Experience;