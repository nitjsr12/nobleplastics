import React from 'react'
import CountUp from "react-countup";
import { Carousel, Image, Row, Col, Container } from "react-bootstrap";

function CounterImpact() {
  return (
    <>
    <Container className='pt-5'>
    <Image
              src="./images/cricles.svg"
              className="card-img-top cricle d-md-block d-none"
              alt="..."
            />
       <Row className=" text-center">
          <Col lg={6} className="d-flex justify-content-start mb-4">
            <div className="card text-center impact ">
              <Image
                src="./images/rupee.svg"
                class="card-img-top rupee"
                alt="..."
              />
              <div className="card-body">
                <CountUp
                  start={0}
                  end={90}
                  separator=" "
                  prefix="INR  "
                  suffix="+ lakh"
                  className="increment"
                ></CountUp>
              </div>
              <p className="card-text impact-text">
                generated in wages for
                <br /> marginalised groups
              </p>
            </div>
          </Col>
          <Col lg={6} className="justify-content-end">
            <div className="card text-center impact ">
              <Image
                src="./images/plants.svg"
                class="card-img-top plants"
                alt="..."
              />
              <div className="card-body">
                <CountUp
                  start={0}
                  end={20500}
                  separator=","
                  prefix=""
                  suffix="+"
                  className="increment-1"
                ></CountUp>
              </div>
              <p className="card-text impact-text">
                trees planted in Karnataka
                <br /> to achieve carbon neutrality
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="text-center  justify-content-center mb-4">
        <Row className=" text-center justify-content-center">
          <Col lg={6} className="justify-content-end">
            <div className="card text-center impact ">
              <Image
                src="./images/heart.svg"
                class="card-img-top heart"
                alt="..."
              />
              <div className="card-body">
                <CountUp
                  start={0}
                  end={50}
                  separator=""
                  prefix="INR  "
                  suffix="+ lakh"
                  className="increment-1"
                ></CountUp>
              </div>
              <p className="card-text impact-text">
                invested in improving
                <br />
                health outcomes
              </p>
            </div>
          </Col>
          <Col lg={6} className="justify-content-end align-items-end">
            <div className="card text-center impact ">
              <Image
                src="./images/garbage.svg"
                class="card-img-top garbage"
                alt="..."
              />
              <div className="card-body">
                <CountUp
                  start={0}
                  end={600}
                  separator=" "
                  prefix=""
                  suffix="+ tonnes"
                  className="increment"
                ></CountUp>
              </div>
              <p className="card-text impact-text">
                of plastic kept away from landfills & waterways
                <br /> via repurposing and recycling
              </p>
            </div>
          </Col>
        </Row>
      <Image
              src="./images/cricles.svg"
              className="card-img-top cricle-1 d-md-block d-none"
              alt="..."
            />
      </Container>
    </>
  )
}

export default CounterImpact
