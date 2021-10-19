import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import { Chart } from "react-google-charts";
import Loader from "./shared/Loader";
import products from "../products";

import { ListGroup } from "react-bootstrap";

import { faPenAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminHome = () => {
  const [set1, setSet1] = useState(false);

  const data = [
    [
      "Location",
      "Parent",
      "Market trade volume (size)",
      "Market increase/decrease (color)",
    ],
    ["Global", null, 0, 0],
    ["America", "Global", 0, 0],
    ["Europe", "Global", 0, 0],
    ["Asia", "Global", 0, 0],
    ["Australia", "Global", 0, 0],
    ["Africa", "Global", 0, 0],
    ["Brazil", "America", 11, 10],
    ["USA", "America", 52, 31],
    ["Mexico", "America", 24, 12],
    ["Canada", "America", 16, -23],
    ["France", "Europe", 42, -11],
    ["Germany", "Europe", 31, -2],
    ["Sweden", "Europe", 22, -13],
    ["Italy", "Europe", 17, 4],
    ["UK", "Europe", 21, -5],
    ["China", "Asia", 36, 4],
    ["Japan", "Asia", 20, -12],
    ["India", "Asia", 40, 63],
    ["Laos", "Asia", 4, 34],
    ["Mongolia", "Asia", 1, -5],
    ["Israel", "Asia", 12, 24],
    ["Iran", "Asia", 18, 13],
    ["Pakistan", "Asia", 11, -52],
    ["Egypt", "Africa", 21, 0],
    ["S. Africa", "Africa", 30, 43],
    ["Sudan", "Africa", 12, 2],
    ["Congo", "Africa", 10, 12],
    ["Zaire", "Africa", 8, 10],
  ];

  const options = {
    minColor: "#f00",
    midColor: "#ddd",
    maxColor: "#0d0",
    headerHeight: 15,
    fontColor: "black",
    showScale: true,
  };

  useEffect(() => {
    const timer = setTimeout(() => {}, 4000);
    setSet1(false);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="bg-image"></div>
      <Container fluid>
        <div>
          {set1 ? (
            <div style={{ position: "absolute", left: "190px", top: "-120px" }}>
              <Loader />
            </div>
          ) : (
            <Container fluid>
              <Row>
                <p>Reports</p>
              </Row>
              <Row className="no-gutters">
                <Col md={4} className="mt-2">
                  <Card className="border-0">
                    <Card.Header className="p-3 bg-none shadow-none">
                      Country Wise Order
                    </Card.Header>
                    <Card.Body className="p-0">
                      <div className="App">
                        <Chart
                          chartType="TreeMap"
                          loader={
                            <div
                              style={{
                                position: "absolute",
                                left: "170px",
                                top: "120px",
                              }}
                            >
                              <Loader />
                            </div>
                          }
                          width="100%"
                          height="300px"
                          data={data}
                          options={options}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4} className="mt-2">
                  <Card className="border-0">
                    <Card.Header className="p-3 bg-none shadow-none">
                      Weekly Order Report
                    </Card.Header>
                    <Card.Body className="bg-none">
                      <Chart
                        width={"100%"}
                        height={"265px"}
                        chartType="CandlestickChart"
                        loader={
                          <div
                            style={{
                              position: "absolute",
                              left: "170px",
                              top: "120px",
                            }}
                          >
                            <Loader />
                          </div>
                        }
                        data={[
                          ["day", "a", "b", "c", "d"],
                          ["Sun", 0, 14, 48, 25],
                          ["Mon", 20, 28, 38, 45],
                          ["Tue", 31, 38, 55, 66],
                          ["Wed", 50, 55, 77, 80],
                          ["Thu", 77, 77, 66, 50],
                          ["Fri", 68, 66, 22, 15],
                          ["Sat", 88, 56, 32, 25],
                        ]}
                        options={{
                          legend: "none",
                        }}
                        rootProps={{ "data-testid": "1" }}
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="mt-2 ">
                  <Card className="border-0">
                    <Card.Header className="bg-none p-3">
                      Performance Record in Year (2020-21)
                    </Card.Header>
                    <Card.Body className="">
                      <Row className="mt-5 text-center">
                        <Col>Total Products :</Col>
                        <Col>
                          5000&nbsp;
                          <span className="text-success">( Available )</span>
                        </Col>
                      </Row>
                      <div className="dropdown-divider mb-3"> </div>
                      <Row className="mt-2 text-center">
                        <Col>Total Orders :</Col>
                        <Col>
                          1,15,000&nbsp;
                          <span className="text-success">( Till Date )</span>
                        </Col>
                      </Row>
                      <div className="dropdown-divider mb-3"> </div>
                      <Row className="mt-2 text-center">
                        <Col>Total Sales :</Col>
                        <Col>
                          15000 &nbsp;
                          <span className="text-success">( Till Date )</span>
                        </Col>
                      </Row>
                      <div className="dropdown-divider mb-3"> </div>
                      <Row className="mt-2 text-center">
                        <Col>Total Shipped :</Col>
                        <Col>
                          90,000 &nbsp;
                          <span className="text-success">( Till Date )</span>
                        </Col>
                      </Row>
                      <div className="dropdown-divider mb-3"> </div>
                      <Row className="mt-2 text-center">
                        <Col>Total Shipped :</Col>
                        <Col>
                          50,000 &nbsp;
                          <span className="text-success">( Till Date )</span>
                        </Col>
                      </Row>
                      <div className="dropdown-divider mb-3"> </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          )}
        </div>
        <div className="dropdown-divider"></div>
        <p style={{ fontSize: "22px" }}>All Time Favourite Products</p>
        <Container>
          {products.map((item, index) => (
            <ListGroup>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={1} className="text-start">
                      <img src={item.image} height="90px" alt={item.name} />
                    </Col>
                    <Col className="pt-4 text-end" md={4}>
                      {item.name}
                    </Col>

                    <Col
                      className="pt-4 text-success text-end"
                      style={{ fontSize: "18px" }}
                      md={1}
                    >
                      {item.price} $
                    </Col>
                    <Col className="pt-4 text-end" md={1}>
                      {item.countInStock}
                    </Col>
                    <Col className="pt-4 text-end" md={1}>
                      {item.brand}
                    </Col>
                    <Col className="pt-4 text-end" md={2}>
                      {item.category}
                    </Col>
                    <Col className="pt-3 text-end" md={1}>
                      <Button
                        variant="outline-danger"
                        style={{ fontSize: "18px" }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </Col>
                    <Col className="pt-3 text-end" md={1}>
                      <Button
                        style={{ fontSize: "18px" }}
                        variant="outline-info"
                      >
                        <FontAwesomeIcon icon={faPenAlt} />
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </ListGroup>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default AdminHome;
