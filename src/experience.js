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
                                    <h4 className = 'heading'>05/21-Present</h4>
                                    <h5 className = 'heading'>Fiveable</h5> <br/>
                                
                            </Col>

                        </div>
                <div className = "lift">
                    <Col style = {{display: 'flex', alignItems: 'center'}} >
                            <h6 className = 'heading'>
                            &gt;  Selected for a paid position from <u><strong>200+ applicants</strong></u> as the youngest member of the Experience department <br/><br/>
                            &gt;  Spearheaded projects across the startup in the <u><strong>Trust and Safety department and Experience Team</strong></u> <br/><br/>
                            &gt;  Worked directly with head executives to improve the student experience within the Fiveable platform and <u><strong>expand to new markets beyond AP exams</strong></u>
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
                                <h4 className = 'heading'>01/21-Present</h4>
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
                                <h4 className = 'heading'>08/20-Present</h4>
                                <h5 className = 'heading'>CASH Club Corp</h5> <br/>
                            </Col>
                        </div>

                <div className = "lift">
                    <Col style = {{display: 'flex', alignItems: 'center'}} >
                            <h6 className = 'heading'>
                                &gt;  Stock Investment club with <u><strong>50+ branches internationally</strong></u> educating high school students about investing through weekly presentations<br/><br/>
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
                                <h4 className = 'heading'>03/20-Present</h4>
                                <h5 className = 'heading'>TutorScope</h5> <br/>
                            </Col>

                        </div>

                <div className = "lift">
                    <Col style = {{display: 'flex', alignItems: 'center'}} >
                            <h6 className = 'heading'>
                                &gt;  Community service organization offering free tutoring across the US for <u><strong>1500+</strong></u> students featured on <u><strong>AP News, NBC, and the Washington Post</strong></u><br/><br/>
                                &gt;  Managed intake of new students and tutors along with <u><strong>legal and financial aspects</strong></u> of the organization <br/><br/>
                                &gt;  <u><strong>Recognized by Representative Van Taylor</strong></u> for dedication to youth education during the COVID-19 Pandemic
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