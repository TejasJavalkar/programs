import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container className="bg-dark mt-5" fluid>
        <Row>
          <Col className="text-light text-center p-2">
            &copy; 2021 copyright :
            <Link
              to="/"
              style={{ fontSize: "15px" }}
              className="text-light text-decoration-none"
            >
              &nbsp;DemoApp.com
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
