import CountUp from "react-countup";
import { Image, Container, Col, Row,Card } from "react-bootstrap";
import React from "react";

function counter() {
  return (
    <> 
    <Container className="">
    <div className="unique_text text-center">
          <h2>
            Our <span style={{ color: "#A6CE41" }}>Impact</span>
          </h2>
        </div>
    <Row xs={1} md={2} className="g-4">
    <Col lg={6} xs={12}  className="impact-c ">
          <Card className="c-impact mx-4">
            <Card.Img variant="top" src="./images/rupee.svg"
                class="card-img-top rupee"
                alt="..." width={60} height={60}/>
            <Card.Body>
              <Card.Title><CountUp
                  start={0}
                  end={90}
                  separator=" "
                  prefix="INR  "
                  suffix="+ lakh"
                  className="increment"
                ></CountUp></Card.Title>
              <Card.Text className="impact-text">
              generated in wages for
              marginalised groups
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col lg={6} xs={12}  className="impact-c ">
          <Card className="c-impact mx-4">
            <Card.Img variant="top" src="./images/plants.svg"
                class="card-img-top plants"
                alt="..." width={60} height={60}/>
            <Card.Body>
              <Card.Title>
              <CountUp
                  start={0}
                  end={20500}
                  separator=","
                  prefix=""
                  suffix="+"
                  className="increment-1"
                ></CountUp>
              </Card.Title>
              <Card.Text className=" impact-text">
              trees planted in Karnataka
               to achieve carbon neutrality
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    <Row xs={1} md={2} className="g-4">
        <Col lg={6} xs={12}  className="impact-c ">
          <Card  xs={1} className="c-impact mx-4">
            <Card.Img variant="top" src="./images/heart.svg"
                class="card-img-top"
                alt="..." width={60} height={60}/>
            <Card.Body>
              <Card.Title><CountUp
                  start={0}
                  end={50}
                  separator=""
                  prefix="INR  "
                  suffix="+ lakh"
                  className="increment-1"
                ></CountUp></Card.Title>
              <Card.Text className=" impact-text">
              invested in improving
                health outcomes
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col lg={6} xs={12} className="impact-c ">
          <Card  className="c-impact mx-4">
            <Card.Img variant="top" src="./images/garbage.svg"
                class="card-img-top"
                alt="..." width={60} height={60}/>
            <Card.Body>
              <Card.Title>
              <CountUp
                  start={0}
                  end={600}
                  separator=" "
                  prefix=""
                  suffix="+ tonnes"
                  className="increment"
                ></CountUp>
              </Card.Title>
              <Card.Text className="impact-text">
              of plastic kept away from landfills & waterways
                 via repurposing and recycling
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    <Row>
          <Col>
            {" "}
            <div className="col-12 d-flex justify-content-center align-items-center ">
              <button type="button" class="btn btn-impact">
                LEARN MORE
              </button>
            </div>
          </Col>
        </Row>
    </Container>
     
    </>
  );
}

export default counter;
