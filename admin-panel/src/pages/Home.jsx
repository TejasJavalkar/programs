import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { Container, Navbar, Nav, NavDropdown, Row } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";

import { LinkContainer } from "react-router-bootstrap";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid>
        <Box sx={{ flexGrow: 0 }}>
          <AppBar position="static">
            <Toolbar sx={{ padding: 1 }}>
              <IconButton onClick={handleShow}>
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
              <Navbar bg="none" className="w-100 ml-auto">
                <Navbar.Brand style={{ marginLeft: "20px" }}>
                  Dashboard
                </Navbar.Brand>
                <Container fluid="sm">
                  <Nav className="ml-auto">
                    <LinkContainer style={{ marginRight: "30px" }} to="/">
                      <Nav.Link>
                        <FontAwesomeIcon icon={faHome} />
                      </Nav.Link>
                    </LinkContainer>
                    <Nav.Item>
                      <NavDropdown
                        title="Tejas Javalkar"
                        id="navbarScrollingDropdown"
                      >
                        <NavDropdown.Item>
                          <li className="p-0 text-center">
                            <FontAwesomeIcon
                              style={{ fontSize: "18px" }}
                              icon={faPowerOff}
                            />
                          </li>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav.Item>
                  </Nav>
                </Container>
              </Navbar>
            </Toolbar>
          </AppBar>
        </Box>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Title closeButton></Offcanvas.Title>
          <Offcanvas.Header>
            <Offcanvas.Title>
              Admin-Panel{" "}
              <Offcanvas.Title
                className="text-secondary"
                style={{ fontSize: "12px" }}
              >
                Dashboard
              </Offcanvas.Title>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <div className="dropdown-divider mb-3"> </div>
          <Offcanvas.Body className="text-center mt-3">
            <Row className="justify-content-center " onClick={handleClose}>
              <Link to="/profile" className="text-decoration-none item1">
                Profile
              </Link>
            </Row>
            <div className="dropdown-divider"> </div>
            <Row className="justify-content-center" onClick={handleClose}>
              <Link to="/orders" className="text-decoration-none item1">
                Orders
              </Link>
            </Row>
            <div className="dropdown-divider"> </div>
            <Row className="justify-content-center" onClick={handleClose}>
              <Link to="/products" className="text-decoration-none item1">
                Products
              </Link>
            </Row>
            <div className="dropdown-divider"> </div>
            <Row className="justify-content-center" onClick={handleClose}>
              <Link to="/feedback" className="text-decoration-none item1">
                Feedbacks
              </Link>
            </Row>
            <div className="dropdown-divider"> </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
};

export default Home;
