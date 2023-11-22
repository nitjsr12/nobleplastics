/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';
import React from 'react'
import {Carousel, Image, Container, Col} from 'react-bootstrap';

function Aboutinside() {
  return (

    <div className="container" >
     <div class=" row d-flex justify-content-center sm">
    <div className="col-md-5">
    <Image src="./images/aboutin.jpeg" className="about_img" alt="..." width='100'/> 
    <Image src="./images/cricles.svg " className="f-image-1 d-md-block d-none"/>
    </div>

    <div className="col-md-7">
    <Image src="./images/cricles.svg " className="f-image d-md-block d-none"/>
    <div className="about_text">
        <h2>About Us</h2>
        <p>Noble Plastics is a Circular Economy initiative which champions the effective use of plastic waste while promoting the well-being of people and the planet.
        </p>
<p>An incubation of the <strong>Catalyst Group</strong>, Noble Plastics works in line with the UN SDGs by integrating sustainability and social responsibility into supply chains across the apparel industry, while benefiting people and the planet.
</p>
<button type="button" className="btn btn-outline-primary btn-about" > <Link href="/about-us"> LEARN MORE </Link> </button> 
</div>    
    </div>
    </div>
   </div>
  )
}

export default Aboutinside
