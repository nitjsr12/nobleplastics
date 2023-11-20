import React from "react";
import {Image, Container, Col, Row } from "react-bootstrap";

function Unique() {
  return (
    <>
      <Container className="text-center mb-5">
        <div className="unique_text">
          <h2>
            What Makes Us <span style={{ color: "#A6CE41" }}>Unique </span>
          </h2>
          <p>
            The well-being of people, the planet and prosperity of all our
            <br />
            stakeholders lie at the heart of everything we do.
          </p>
        </div>
        <Row className="card-aling">
          <Col lg={4} className="   vertical-line">
      <div className="card position-relative unicq-img">
        <Image
          src="./images/pepole.png"
          className="card-img-top "
          alt="Card Image"
        />
        <div className="overlay">
          <div className="card-body text-light p-unique">
            <p className="card-text">We provide communities with increased employment, social equity and awareness of environmental protection methods, and better health.</p>
          </div>
        </div>
      </div>
     
          </Col>
        

          <Col lg={4} className=" vertical-line ">
      <div className="card position-relative  unicq-img">
        <Image
          src="./images/Planet.png"
          className="card-img-top"
          alt="Card Image"
        />
        <div className="overlay">
          <div className="card-body text-light p-unique">
            <p className="card-text">We improve the health of the environment by reducing plastic waste and carbon footprint, while ameliorating waste management.</p>
          </div>
        </div>
      </div>
     
          </Col>
        
          <Col lg={4} className=" ">
          <div className="card position-relative unicq-img">
        <Image
          src="./images/property.png"
          className="card-img-top"
          alt="Card Image"
        />
        <div className="overlay">
          <div className="card-body text-light p-unique">
            <p className="card-text">We enable companies to significantly reduce their costs, increase profits, improve reputation and contribute to sustainability.</p>
          </div>
        </div>
      </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Unique;
