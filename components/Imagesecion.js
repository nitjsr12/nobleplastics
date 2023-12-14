'use client';
import React from 'react'
import {Carousel, Image, Container, Row, Col} from 'react-bootstrap';

function Imagesecion() {
  return (
    <Container>
        <Row>
          <Col lg={4} className=' text-center'>
          <Image
                src="./images/img_1.jpeg"
                className=" image-home"
                alt="home image "
                width={400}
                height={500}
                
              />
          </Col>
          <Col lg={4} className=' text-center'>
          <Image
                src="./images/img_2.jpeg"
                alt="home image-1"
                className= "image-home"
                width={400}
                height={500}
              />
          </Col>
          <Col lg={4} className=' text-center'>
          <Image
                src="./images/img_3.jpeg"
                alt="home image-3."
                className= "image-home"
                width={400}
                height={500}
              />
          </Col>
        </Row>
       </Container>
  )
}

export default Imagesecion
