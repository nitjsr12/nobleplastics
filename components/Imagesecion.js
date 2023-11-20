import React from 'react'
import {Carousel, Image, Container, Row, Col} from 'react-bootstrap';

function Imagesecion() {
  return (
    <Container>
        <Row>
          <Col lg={4} className=''>
          <Image
                src="./images/img_1.jpeg"
                className=" img_1"
                alt="..."
                width={400}
                height={500}
              />
          </Col>
          <Col lg={4} className=''>
          <Image
                src="./images/img_2.jpeg"
                className="img_2 "
                alt="..."
                width={400}
                height={500}
              />
          </Col>
          <Col lg={4} className=''>
          <Image
                src="./images/img_3.jpeg"
                className="img_3 "
                alt="..."
                width={400}
                height={500}
              />
          </Col>
        </Row>
       </Container>
  )
}

export default Imagesecion
