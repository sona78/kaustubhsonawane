import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './experience.css';
import {BsChevronDoubleDown} from 'react-icons/bs';
import { Container, Row } from "shards-react";

function Experience(){
    return(
        <Container className = "block" fluid>
            <Row>
                <h1 className = "head">Experience</h1>
            </Row>
            <br/><br/>
            <Row>

            </Row>
            <Row>
                <div className = "holder">
                    <h1><a href = "#achievements"><BsChevronDoubleDown/></a></h1>
                </div>
            </Row>
        </Container>
    );
}

export default Experience;