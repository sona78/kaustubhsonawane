import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './projects.css'
import { Container} from "shards-react";

function Footer(){
    return(
        <Container style = {{backgroundColor: '#eeeeee',  display: 'flex', justifyContent:'center'}} fluid>
            <h6><strong>© 2021 Kaustubh Sonawane. All rights reserved.</strong></h6>
        </Container>
    );
}

export default Footer;