import React from "react";
import { Carousel, Image, Row, Col, Container } from "react-bootstrap";

function Workbanner() {
  return (
    <>
      <Container
        style={{ backgroundImage: `url("/images/work_banner.png")` }}
        fluid
        className="h-banner d-flex"
      >
        <Container className="text-white d-flex flex-column justify-content-center">
          <Row>
            <Col lg={6}>
              <h1 className="fs-1">Work</h1>
              <p className="fs-5 thin">
              We are focused on results that will help us achieve the UN SDGs and create a Circular Economy.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Workbanner;
