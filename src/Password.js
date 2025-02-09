import React, { useState } from "react";
import { Container, Row, Col, FormInput, Button } from "shards-react";

const Password = (props) => {
  const [password, setPassword] = [props.password, props.setPassword];

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col className="text-center">
          <FormInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Password;
