import 'antd/dist/antd.css';
import './loadingscreen.css'
import { Container } from "shards-react";
import { Spin } from 'antd';

function LoadingScreen(){
    return (
        <Container className = "full" fluid>
            <Spin className = "loader" size="large" />
        </Container>
    );
}

export default LoadingScreen;