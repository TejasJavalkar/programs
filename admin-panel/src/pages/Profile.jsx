import {
  faEnvelopeOpen,
  faMars,
  faPhoneSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Accordion,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Button,
  Figure,
} from "react-bootstrap";

const Profile = () => {
  const contactBlur = () => {};
  const fnblur = () => {};
  const lnblur = () => {};
  const emBlur = () => {};
  const adblur = () => {};
  const coblur = () => {};

  const input = {
    paddingLeft: "60px",
    border: "0",
    borderBottom: "1px solid green",
    fontSize: "18px",
  };

  return (
    <>
      <Container fluid>
        <Card className="p-2">
          <h5 style={{ marginLeft: "120px" }}>My Account</h5>
        </Card>
        <Row className="mt-3 justify-content-center">
          <Col md={3}>
            <Figure className="mt-5 text-center">
              <Figure.Image
                width={171}
                height={180}
                style={{ borderRadius: "50px" }}
                src="/asset/person/2.jpeg"
                alt="Profile Pic"
                className="shadow-lg"
              />
            </Figure>
            <Row>
              <InputGroup className="d-flex justify-content-center">
                <Form.Control type="file" />
              </InputGroup>
            </Row>
            <Row className="mt-3 d-flex justify-content-end">
              <Button className="btn" variant="outline-success w-50">
                Upload
              </Button>
            </Row>
          </Col>
          <Col md={8}>
            <Accordion defaultActiveKey="1" className="mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h5>Personal Details</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      className="mb-3 text-center"
                      style={{ width: "60%" }}
                    >
                      <InputGroup.Text
                        id="basic-addon2"
                        className="p-3 border-0 bg-none "
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className="text-info"
                          style={{
                            fontSize: "22px",
                            backgroundColor: "transparent",
                          }}
                        />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Enter First Name"
                        className="rounded-0 shadow-none"
                        onBlur={fnblur}
                        style={input}
                      />
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      style={{ width: "60%" }}
                      className="mb-3  text-center"
                    >
                      <InputGroup.Text
                        id="basic-addon2"
                        className="p-3 border-0 text-info"
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{
                            fontSize: "22px",
                            backgroundColor: "transparent",
                          }}
                        />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Enter Last Name"
                        className="rounded-0 shadow-none"
                        onBlur={lnblur}
                        style={input}
                      />
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      className="mb-3 text-center"
                      style={{ width: "60%" }}
                    >
                      <InputGroup.Text
                        id="basic-addon2"
                        className="p-3 border-0 bg-none text-info"
                      >
                        <FontAwesomeIcon
                          icon={faEnvelopeOpen}
                          style={{
                            fontSize: "22px",
                            backgroundColor: "transparent",
                          }}
                        />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Enter Email"
                        onBlur={emBlur}
                        style={input}
                        className="rounded-0 shadow-none"
                      />
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      className="mb-3 text-center"
                      style={{ width: "60%" }}
                    >
                      <InputGroup.Text
                        id="basic-addon2"
                        className="p-3 border-0 bg-none text-info"
                      >
                        <FontAwesomeIcon
                          icon={faPhoneSquare}
                          style={{
                            fontSize: "22px",
                            backgroundColor: "transparent",
                          }}
                        />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Enter Contact No"
                        onBlur={contactBlur}
                        style={input}
                        className="rounded-0 shadow-none"
                      />
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      className="mb-3 text-center"
                      style={{ width: "60%" }}
                    >
                      <InputGroup.Text
                        id="basic-addon2"
                        className="p-3 border-0 bg-none text-info"
                      >
                        <FontAwesomeIcon
                          icon={faMars}
                          style={{
                            fontSize: "22px",
                            backgroundColor: "transparent",
                          }}
                        />
                      </InputGroup.Text>
                      <div style={{ marginLeft: "20px", marginTop: "17px" }}>
                        {" "}
                        <Form.Check
                          className=" shadow-none"
                          inline
                          checked
                          label="Male"
                          name="group1"
                          type="radio"
                        />
                        <Form.Check
                          className=" shadow-none"
                          inline
                          label="Female"
                          name="group1"
                          type="radio"
                        />
                      </div>
                    </InputGroup>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1" className="mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h5>Personal Address Details</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      className="mb-3 text-center"
                      style={{ width: "60%" }}
                    >
                      <Form.Control
                        placeholder="Address Line-1"
                        className="rounded-0 shadow-none"
                        onBlur={adblur}
                        style={input}
                      />
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      style={{ width: "60%" }}
                      className="mb-3  text-center"
                    >
                      <Form.Control
                        placeholder="Address Line-2"
                        className="rounded-0 shadow-none"
                        onBlur={lnblur}
                        style={input}
                      />
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      className="mb-3 text-center"
                      style={{ width: "60%" }}
                    >
                      <Form.Control
                        placeholder="Pincode"
                        onBlur={emBlur}
                        style={input}
                        className="rounded-0 shadow-none"
                      />
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      className="mb-3 text-center"
                      style={{ width: "60%" }}
                    >
                      <Form.Select
                        onBlur={contactBlur}
                        style={input}
                        className="rounded-0 shadow-none"
                        placeholder="Select state"
                      >
                        <option style={{ color: "#999" }}>Select State</option>
                        <option>Andhra Pradesh</option>
                        <option>Arunachal Pradesh</option>
                        <option>Assam</option>
                        <option>Bihar</option>
                        <option>Chhattisgarh</option>
                        <option>Delhi</option>
                        <option>Goa</option>
                        <option>Gujarat </option>
                        <option>Haryana </option>
                        <option>Himachal </option>
                        <option>Jharkhand </option>
                        <option>Karnataka </option>
                        <option>Bengaluru</option>
                        <option>Kerala</option>
                        <option>Madhya-Pradesh</option>
                        <option>Maharashtra </option>
                        <option>Meghalaya</option>
                        <option>Mizoram</option>
                        <option>Odisha</option>
                        <option>Punjab</option>
                        <option>Rajasthan</option>
                        <option>Sikkim </option>
                        <option>Tamil Nadu </option>
                        <option>Hyderabad </option>
                        <option>Tripura</option>
                        <option>Uttar Pradesh </option>
                        <option>Uttarakhand </option>
                        <option>Kolkata </option>
                        <option>Other</option>
                      </Form.Select>
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      style={{ width: "60%" }}
                      className="mb-3  text-center"
                    >
                      <Form.Control
                        placeholder="City"
                        className="rounded-0 shadow-none"
                        onBlur={lnblur}
                        style={input}
                      />
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      className="mb-3 text-center"
                      style={{ width: "60%" }}
                    >
                      <Form.Control
                        placeholder="Country"
                        className="rounded-0 shadow-none"
                        onBlur={coblur}
                        style={input}
                      />
                    </InputGroup>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1" className="mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h5>Shop Details</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      className="mb-3 text-center"
                      style={{ width: "60%" }}
                    >
                      <Form.Control
                        placeholder="Shop Address Line-1"
                        className="rounded-0 shadow-none"
                        onBlur={adblur}
                        style={input}
                      />
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      style={{ width: "60%" }}
                      className="mb-3  text-center"
                    >
                      <Form.Control
                        placeholder="ShopAddress Line-2"
                        className="rounded-0 shadow-none"
                        onBlur={lnblur}
                        style={input}
                      />
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      className="mb-3 text-center"
                      style={{ width: "60%" }}
                    >
                      <Form.Select
                        onBlur={contactBlur}
                        style={input}
                        className="rounded-0 shadow-none"
                        placeholder="Select state"
                      >
                        <option style={{ color: "#999" }}>Select State</option>
                        <option>Andhra Pradesh</option>
                        <option>Arunachal Pradesh</option>
                        <option>Assam</option>
                        <option>Bihar</option>
                        <option>Chhattisgarh</option>
                        <option>Delhi</option>
                        <option>Goa</option>
                        <option>Gujarat </option>
                        <option>Haryana </option>
                        <option>Himachal </option>
                        <option>Jharkhand </option>
                        <option>Karnataka </option>
                        <option>Bengaluru</option>
                        <option>Kerala</option>
                        <option>Madhya-Pradesh</option>
                        <option>Maharashtra </option>
                        <option>Meghalaya</option>
                        <option>Mizoram</option>
                        <option>Odisha</option>
                        <option>Punjab</option>
                        <option>Rajasthan</option>
                        <option>Sikkim </option>
                        <option>Tamil Nadu </option>
                        <option>Hyderabad </option>
                        <option>Tripura</option>
                        <option>Uttar Pradesh </option>
                        <option>Uttarakhand </option>
                        <option>Kolkata </option>
                        <option>Other</option>
                      </Form.Select>
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      style={{ width: "60%" }}
                      className="mb-3  text-center"
                    >
                      <Form.Control
                        placeholder="City"
                        className="rounded-0 shadow-none"
                        onBlur={lnblur}
                        style={input}
                      />
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      className="mb-3 text-center"
                      style={{ width: "60%" }}
                    >
                      <Form.Control
                        placeholder="Pincode"
                        onBlur={emBlur}
                        style={input}
                        className="rounded-0 shadow-none"
                      />
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      className="mb-3 text-center"
                      style={{ width: "60%" }}
                    >
                      <Form.Control
                        placeholder="Country"
                        className="rounded-0 shadow-none"
                        onBlur={coblur}
                        style={input}
                      />
                    </InputGroup>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <InputGroup
                      style={{ width: "60%" }}
                      className="mb-3  text-center"
                    >
                      <Form.Control
                        placeholder="Shop Licence Number"
                        className="rounded-0 shadow-none"
                        onBlur={lnblur}
                        style={input}
                      />
                    </InputGroup>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Row className="d-flex justify-content-end mt-4">
              <Button
                className="w-25"
                style={{ height: "43px" }}
                variant="outline-success"
              >
                Save
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
