import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import {BsChevronDoubleUp} from 'react-icons/bs';
import { Container, Row } from "shards-react";

function Achievements(){
    return(
        <Container className = "area" fluid>
            <Row>
                <h1 className = "header2">Achievements</h1>
            </Row>
            <br/><br/>
            <Row>
            </Row>
            <Row>
                <div className = "holder">
                    <h1><a href = "/#"><BsChevronDoubleUp/></a></h1>
                </div>
            </Row>
        </Container>
    );
}

export default Achievements;