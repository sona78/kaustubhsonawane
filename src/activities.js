import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './experience.css';
import './activities.css';
import {BsChevronDoubleDown} from 'react-icons/bs';
import { Card, CardColumns } from "react-bootstrap"
import { Container, Row} from "shards-react";

import ScienceFair from './assets/ScienceFair.jpg'
import Debate from './assets/Debate.JPG'
import Entrepreneurship from './assets/Entrepreneurship.jpg'
import Piano from './assets/Piano.jpg'
import Hackathons from './assets/Hackathons.jpg'
import Robotics from './assets/Robotics.png'

function Activities(){
    return(
        <Container className = "area" fluid>
            <Row>
                <h1 className = "header2">Activities</h1>
            </Row>
            <br/><br/>

            <CardColumns style = {{columns:'auto'}}>
            
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

            <Card className="carddark">
                <Card.Header>
                <strong>Science Fair</strong><br/>
                (08/2018 - Present)
                </Card.Header>         
                <Card.Img  src={ScienceFair} style = {{width: '90%', height:'90%', margin: '5%'}}/>       
                <Card.Body style={{textAlign:"left"}}>
                <strong>&gt;</strong> Pioneered several research projects with machine-learning over 4 years <br/>
                <strong>&gt;</strong> Developed novel MedTech solutions addressing Lung Cancer and Arrhythmia diagnosis <br/>
                <strong>&gt;</strong> Presented findings to top researchers at MIT, UCLA, and USC and received international recognition for research papers
                </Card.Body>
                <Card.Footer style = {{textAlign: "left"}}>
                <strong>Awards:</strong> <br/>
                <strong>&gt;</strong> Invitee to the MIT Undergraduate Research Tech Conference (250+ applicants) <br/>
                <strong>&gt;</strong> 2021 GENIUS Olympiad Silver Medalist (Top 20% of all Finalists)
                </Card.Footer>
            </Card>

            <Card className="carddark">
                <Card.Header>
                <strong>Debate</strong><br/>
                (08/2018 - Present)
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


            <Card className="carddark">
                <Card.Header>
                <strong>Robotics</strong><br/>
                (08/2018 - Present)
                </Card.Header>
                <Card.Img  src={Robotics} style = {{width: '90%', height:'90%', margin: '5%'}}/>    
                <Card.Body style={{textAlign:"left"}}>
                <strong>&gt;</strong> Led the engineering group of a robotics team with 40+ members to competitions such as the First Tech Challenge and The American Rocketry Challenge <br/>
                <strong>&gt;</strong> Awarded several design and innovation awards across DFW <br/>
                <strong>&gt;</strong> Connected with local tech companies for fundraising and mentorship
                </Card.Body>
                <Card.Footer style = {{textAlign: "left"}}>
                <strong>Awards:</strong> <br/>
                <strong>&gt;</strong> TARC National Finalist <br/>
                <strong>&gt;</strong> 2020 FTC Wild Card Qualifier Finalist
                </Card.Footer>
            </Card>

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
                <strong>&gt;</strong> 1st Place at OneHacks from 40+ submissions (<a href = "https://devpost.com/software/clip">Clip!</a>) <br/>
                <strong>&gt;</strong> Project Reboot: Most Innovative Hack (<a href = "https://github.com/KAJMHackathonTeam/EduCaptcha">EduCaptcha</a>)
                </Card.Footer>
            </Card>

            </CardColumns>
            

            <Row>
                <div className = "holder">
                    <h1><a href = "#projects"><BsChevronDoubleDown/></a></h1>
                </div>
            </Row>
        </Container>
    );
}

export default Activities;