'use client';
import React from 'react'
import { Carousel, Image, Row, Col, Container } from "react-bootstrap";


function ImpactBanner() {
  return (
    <>
      <Container
        style={{ backgroundImage: `url("/images/impactBanner.png")` }}
        fluid
        className="h-banner d-flex"
      >
        <Container className="text-white d-flex flex-column justify-content-center">
          <Row>
            <Col lg={6}>
              <h1 className="fs-1">Our Impact</h1>
              <p className="fs-5 thin">
              From facilitating the creation of a circular economy, to collaborating with like-minded partners in making better environmental choices, we are on the path to achieve our mission of synergising people, planet and profits.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default ImpactBanner
