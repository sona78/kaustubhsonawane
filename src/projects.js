import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './projects.css'
import {BsChevronDoubleDown} from 'react-icons/bs';
import { Container, Row} from "shards-react";

function Projects(){
    return(
        <Container className = "area" fluid>
            <Row>
                <h1 className = "header2">Projects</h1>
            </Row>
            <br/><br/>
            <Row>
            </Row>
            <Row>
                <div className = "holder">
                    <h1><a href = "#experience"><BsChevronDoubleDown/></a></h1>
                </div>
            </Row>
        </Container>
    );
}

export default Projects;