import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './experience.css';
import {BsChevronDoubleDown} from 'react-icons/bs';
import { Jumbotron } from 'react-bootstrap'
import { Container, Row, Col } from "shards-react";

import TutorScopeLogo from './assets/TutorScopeLogo.png';
import ActiveTeaching from './assets/ActiveTeaching.jpg';
import FiveableLogo from './assets/FiveableLogo.png';
import FiveableSpot from './assets/FiveableSpot.png';

function Experience(){
    return(
        <Container className = "block" fluid>
            <Row>
                <h1 className = "head">Experience</h1>
            </Row>
            <br/><br/>
            <Row>
                <Jumbotron className = "lift">
                    <div style = {{display:'flex'}}>
                        <Col>
                            <h3 className = 'heading'>Intern to the CXO</h3>
                            <h5 className = 'heading'>Fiveable</h5> <br/>
                            <h6 className = 'heading'>
                            &gt;  Selected for a paid internship position from <u><strong>200+ applicants</strong></u> in a multiple round interview process <br/><br/>
                            &gt;  Spearheaded projects across the startup in the <u><strong>Trust and Safety department and Experience Team</strong></u> <br/><br/>
                            &gt;  Worked directly with head executives to improve the student experience within the Fiveable platform and <u><strong>expand to new markets beyond AP exams</strong></u>
                            </h6>
                        </Col>
                        <Col>
                            <img id = "logo" src = {FiveableLogo} alt = "Fiveable Logo" height = "300wv" style = {{margin: '1vh'}}/>
                            <img id = "pic" src = {FiveableSpot} alt = "Website Spot" height = "300wv"/>
                        </Col>
                    </div>
                </Jumbotron>
            </Row>
            <Row>
            </Row>
            <Row>
                <Jumbotron className = "lift">
                    <div style = {{display:'flex'}}>
                        <Col>
                            <img id = "logo" src = {TutorScopeLogo} alt = "TutorScope Logo" height = "300wv" style = {{margin: '1vh'}}/>
                            <img id = "pic" src = {ActiveTeaching} alt = "Teaching a Student" height = "300wv"/>
                        </Col>
                        <Col>
                            <h3 className = 'heading'>Co-Founder and Director</h3>
                            <h5 className = 'heading'>TutorScope</h5> <br/>
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
                    <h1><a href = "#projects"><BsChevronDoubleDown/></a></h1>
                </div>
            </Row>
        </Container>
    );
}

export default Experience;