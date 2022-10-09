import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './projects.css'
import { Container} from "shards-react";

function Footer(){
    let date = new Date();
    return(
        <Container style = {{backgroundColor: '#eeeeee',  display: 'flex', justifyContent:'center'}} fluid>
            <h6><strong>© {date.getFullYear()} Kaustubh Sonawane. All rights reserved.</strong></h6>
        </Container>
    );
}

export default Footer;