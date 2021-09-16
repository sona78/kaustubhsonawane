import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './projects.css'
import { Container} from "shards-react";

function Footer(){
    return(
        <Container style = {{backgroundColor: '#111111',  display: 'flex', justifyContent:'center'}} fluid>
            <h6 className = "heading">© 2021 Kaustubh Sonawane. All rights reserved.</h6>
        </Container>
    );
}

export default Footer;