
import "shards-ui/dist/css/shards.min.css";
import './experience.css';
import './activities.css';
import {BsChevronDoubleDown} from 'react-icons/bs';
import { Card,Row, Col } from "react-bootstrap"
import { Container} from "shards-react";

import Debate from './assets/Debate.JPG'
import Entrepreneurship from './assets/Entrepreneurship.jpg'
import Piano from './assets/Piano.jpg'
import Hackathons from './assets/Hackathons.jpg'
import TPEO from './assets/TPEO.png'
import Noteworthy from './assets/Noteworthy.JPG'

function Activities(){
    return(
        <Container className = "area" fluid>
            <Row>
                <h1 className = "header2">Activities</h1>
            </Row>
            <br/><br/>


            <Row>

            <Col>
            <Card className="carddark">
                <Card.Header>
                <strong>Texas Product Engineering Organization</strong><br/>
                (09/2022 - Present)
                </Card.Header>
                <Card.Img  src={TPEO} style = {{width: '60%', height:'60%', marginLeft: '20%', marginRight: "20%", marginTop: "5%"}}/>    
                <Card.Body style={{textAlign:"left"}}>
                <strong>&gt;</strong> UT Austin student-led organization contracting projects from Austin-area nonprofit organizations <br/>
                <strong>&gt;</strong> Completed a 10-week product management course covering design-thinking, product execution, metric analysis, & user testing <br/>
                <strong>&gt;</strong> Led a team of designers and engineers to develop an apartment rating and reviewing web application for UT students
                </Card.Body>
                <Card.Footer style = {{textAlign: "left"}}>
                <strong>Projects:</strong> <br/>
                <strong>&gt;</strong>  <a href = "https://docs.google.com/presentation/d/1Ct17zUJlzM3M6IFGbPGFRB-1okLBRyCSi5bGxGGRO4I/edit?usp=sharing">Housing Buddy</a> <br/>
                </Card.Footer>
            </Card>
            </Col>
            <Col>
            <Card className="carddark">
                <Card.Header>
                <strong>Noteworthy A Cappella</strong><br/>
                (09/2022 - Present)
                </Card.Header>
                <Card.Img  src={Noteworthy} style = {{width: '60%', height:'60%', marginLeft: '20%', marginRight: "20%", marginTop: "5%"}}/>    
                <Card.Body style={{textAlign:"left"}}>
                <strong>&gt;</strong> Competed as part of UT Austin's premier A Cappella team as a Bass vocalist<br/>
                <strong>&gt;</strong> Attended competitions around the country as part of the International Championship of Collegiate A Cappella (ICCA) <br/>
                </Card.Body>
                <Card.Footer style = {{textAlign: "left"}}>
                <strong>Awards:</strong> <br/>
                <strong>&gt;</strong> Qualification to the southwestern region ICCA semifinals in Phoenix, Arizona <br/>
                <strong>&gt;</strong> Best Soloists at the SingStrong New York City A Cappella Festival <br/>
                </Card.Footer>
            </Card>
            </Col>
            <Col>
            <Card className="carddark">
                <Card.Header>
                <strong>Hackathons</strong><br/>
                (01/2021 - Present)
                </Card.Header>
                <Card.Img  src={Hackathons} style = {{width: '90%', height:'90%', margin: '5%'}}/>    
                <Card.Body style={{textAlign:"left"}}>
                <strong>&gt;</strong> Competed in 24, 48, and 1 week hackathons to rapidly create software solutions<br/>
                <strong>&gt;</strong> Developed full-stack applications using Python, React, AWS, and various APIs <br/>
                <strong>&gt;</strong> Created relevant solutions for Education, Medicine, Career Search, and more
                </Card.Body>
                <Card.Footer style = {{textAlign: "left"}}>
                <strong>Awards:</strong> <br/>
                <strong>&gt;</strong> 1st Place in Blockchain Track at HackTX: $7000 Grand Prize (<a href = "https://devpost.com/software/wager-r7wimn">Wager</a>) <br/>
                <strong>&gt;</strong> 1st Place at OneHacks from 40+ submissions (<a href = "https://devpost.com/software/clip">Clip!</a>) <br/>
                </Card.Footer>
            </Card>
            </Col>
            <Col>
            <Card className="carddark">
                <Card.Header>
                <strong>Entrepreneurship</strong><br/>
                (06/2020 - Present)
                </Card.Header>         
                <Card.Img  src={Entrepreneurship} style = {{width: '90%', height:'90%', margin: '5%'}}/>       
                <Card.Body style={{textAlign:"left"}}>
                <strong>&gt;</strong> Designed business, marketing, and expansion plans for novel startup ideas <br/>
                <strong>&gt;</strong> Competed in National and International pitch competitions <br/>
                <strong>&gt;</strong> Pitched to healthcare investors and VCs, receiving $7000+ in seed funding and international recognition
                </Card.Body>
                <Card.Footer style = {{textAlign: "left"}}>
                <strong>Awards:</strong> <br/>
                <strong>&gt;</strong> 2021 Diamond Challenge Business Competition 2nd Place Winner (2/800+) <br/>
                <strong>&gt;</strong> 2020 Tiger Global Case Competition North American Finalist (10/800+)
                </Card.Footer>
            </Card>
            </Col>
            <Col>
            <Card className="carddark">
                <Card.Header>
                <strong>Piano</strong><br/>
                (05/2011 - Present)
                </Card.Header>
                <a href="https://www.youtube.com/watch?v=f8Ym_PWRUco" rel="noreferrer" target= "_blank"><Card.Img  src={Piano} style = {{width: '90%', height:'90%', margin: '5%'}}/> </a>   
                <Card.Body style={{textAlign:"left"}}>
                <strong>&gt;</strong> Studied Piano from the age of 7 under the instruction of internationally-renowned teachers <br/>
                <strong>&gt;</strong> Tested each year in the Royal Conservatory of Music up to Level 9 <br/>
                <strong>&gt;</strong> Performed a 45-minute senior recital with Grade 10+ repertoire
                </Card.Body>
                <Card.Footer style = {{textAlign: "left"}}>
                <strong>Awards:</strong> <br/>
                <strong>&gt;</strong> William Gillock Award at the Dallas Piano Solo Competition (70+ entries) <br/>
                <strong>&gt;</strong> International Youth Talent Competition 2nd Place
                </Card.Footer>
            </Card>
            </Col>
    
            <Col>
            <Card className="carddark">
                <Card.Header>
                <strong>Debate</strong><br/>
                (08/2018 - 05/22)
                </Card.Header>
                <Card.Img  src={Debate} style = {{width: '90%', height:'90%', margin: '5%'}}/>    
                <Card.Body style={{textAlign:"left"}}>
                <strong>&gt;</strong> Competed as part of the varsity debate team throughout high school, both at Jasper and Plano West Senior High<br/>
                <strong>&gt;</strong> Spent 50+ hours coaching middle-school students in Public Forum Debate at feeder schools <br/>
                <strong>&gt;</strong> Took on Public Forum, Extemporaneous Speaking, and World Schools Debate
                </Card.Body>
                <Card.Footer style = {{textAlign: "left"}}>
                <strong>Awards:</strong> <br/>
                <strong>&gt;</strong> Top 50 in Public Forum at the 2021 NSDA National Tournament <br/>
                <strong>&gt;</strong> Top 4 World Schools Team at the University of Texas Tournament
                </Card.Footer>
            </Card>
            </Col>
           

            </Row>

            <Row>
                <div style = {{margin: 'auto'}}>
                    <h1><a href = "#projects"><BsChevronDoubleDown/></a></h1>
                </div>
            </Row>
        </Container>
    );
}

export default Activities;