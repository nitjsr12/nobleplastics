import React from "react";
import { Carousel, Image, Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import Contact from '../utils/ContactForm'

function Footer() {
  return (
    <>
      <Container className="footer" fluid>
        <Row className="d-flex flex-row">
          <Col lg={6} className="">
            <Image
              src="./images/Noble-Plastic-footer.svg"
              className="card-img-top footer-logo"
              alt="..."
            />
            <p className="p-footer">
              This initiative has been supported by an Impact Investor and
              fashion retailer Marks & Spencer.
            </p>
            <p className="p-footer">
              Fuzhio Health and Business Services Pvt. Ltd. No. 25, RMV
              <br /> 2nd Stage, AECS Layout, 1st Main Road, Ashwathnagar, <br />
              Bangalore – 560094 <br />
              Phone: +91 937981 5394
            </p>
            <p className="p-footer">
              For more information please email fuzhio@catalysts.org
            </p>
          </Col>
          <Col lg={5} className="">
            <p className="f-title">Send Us a Message</p>
            
            
            <Contact/>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
