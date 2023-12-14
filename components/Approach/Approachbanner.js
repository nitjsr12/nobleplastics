'use client';
import React from 'react';
import {Carousel, Image, Row, Col, Container} from 'react-bootstrap';



function Approachbanner() {
  return (
    <>
<Container style={{backgroundImage: `url("/images/about-banner.jpeg")`}} fluid className="h-banner d-flex">
<Container className="text-white d-flex flex-column justify-content-center">
<Row><Col lg={6} sm={12}>
<h1 className="fs-1">The Noble Plastics Approach</h1>
<p className="fs-5 thin">The Noble Plastics Approach
Successful action stems from innovative approaches, and Noble Plastics is a proof of that. We work to provide practical solutions that are backed by quantifiable results.</p>
</Col>
</Row>
</Container>         
</Container>
    </>
  )
}

export default Approachbanner
