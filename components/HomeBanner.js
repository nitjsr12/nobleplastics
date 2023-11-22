import React from 'react'
import {Carousel, Image, Container, Row, Col} from 'react-bootstrap';



function UncontrolledExample() {
  return (
    <>
    <div className='banner-text d-none d-lg-block'>
        <h3 className='t-banner'>noble plastics</h3>
        <p className='p-banner'>An eco-social initiative by the Catalyst Group that champions the effective use of plastic waste, while promoting the well-being of people and the planet.</p>
      </div>
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="./images/Banner-1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="./images/banner-2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="./images/Banner-3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <div className='banner-text-mob d-sm-block d-lg-none'>
        <h3 className='t-banner'>noble plastics</h3>
        <p className='p-banner'>An eco-social initiative by the Catalyst Group that champions the effective use of plastic waste, while promoting the well-being of people and the planet.</p>
      </div>
    </>
  );
};


export default UncontrolledExample;