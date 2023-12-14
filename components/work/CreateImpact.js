'use client';
import React from "react";
import { Carousel, Image, Row, Col, Container, Card } from "react-bootstrap";

function CreateImpact() {
  return (
    <>
      <Container className="text-center">
        <div className="unique_text">
          <h2>
            <span style={{ color: "#A6CE41" }}>
              Here Are the Ways through Which
            </span>{" "}
            We Create Impact
          </h2>
        </div>
      </Container>
      <Container className="text-center">
        <Row>
          <Col className="justify-content-end">
            <Card className="text-start card-impact">
              <div className="row g-0">
                <div className="col-md-6">
                  <Card.Title className="t-impact d-lg-none">
                    Hanger Repurposing & Recycling
                  </Card.Title>
                  <Card.Img
                    src="./images/Hanger.png"
                    alt="Card Image"
                    className="img-fluid image-impact"
                  />
                </div>
                <div className="col-md-5 p-3 ">
                  <Card.Body className="">
                    <Card.Title className="t-impact d-none d-lg-block">
                      Hanger Repurposing & Recycling
                    </Card.Title>
                    <Card.Text className=" p-impact">
                      Our model provides multiple benefits to People—by creating
                      jobs and a sustainable livelihood; Planet—through reduced
                      plastic use and tree plantation; and Stakeholders—by
                      ensuring prosperity of everybody involved in the whole
                      process.
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Col>
          <hr style={{ align: "center" }} className="new" />
        </Row>
      </Container>
      <Container className="text-center">
        <Row>
          <Col className="justify-content-end">
            <Card className="text-start card-impact">
              <div className="row g-0">
                <div className="col-md-6">
                  <Card.Title className="t-impact d-lg-none">
                    Film Plastic Recycling
                  </Card.Title>
                  <Card.Img
                    src="./images/Film.png"
                    alt="Card Image"
                    className="img-fluid image-impact"
                  />
                </div>
                <div className="col-md-5 p-3 ">
                  <Card.Body className="">
                    <Card.Title className="t-impact d-none d-lg-block">
                      Film Plastic Recycling
                    </Card.Title>
                    <Card.Text className=" p-impact">
                      We collect and recycle films and other plastics found in
                      apparel stores, factories and warehouses. The end products
                      are channelled into the production of films and other
                      materials that are useful for brands.
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Col>
          <hr style={{ align: "center" }} className="new-1" />
        </Row>
      </Container>
      <Container className="text-center">
        <Row>
          <Col className="justify-content-end">
            <Card className="text-start card-impact">
              <div className="row g-0">
                <div className="col-md-6">
                  <Card.Title className="t-impact d-lg-none">
                    Pyrolysis
                  </Card.Title>
                  <Card.Img
                    src="./images/polymer.png"
                    alt="Card Image"
                    className="img-fluid image-impact"
                  />
                </div>
                <div className="col-md-5 p-3 ">
                  <Card.Body className="">
                    <Card.Title className="t-impact d-none d-lg-block">
                      Pyrolysis
                    </Card.Title>
                    <Card.Text className=" p-impact">
                      Through Pyrolysis, we convert single-use plastics (SUPs)
                      into fuel for energy generation. Noble Plastics
                      orchestrates this entire process by facilitating
                      connections between generators of non-recyclable waste and
                      pyrolysis recyclers, who ensure these wastes are properly
                      used.
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Col>
          <hr style={{ align: "center" }} className="new" />
        </Row>
      </Container>
    </>
  );
}

export default CreateImpact;
