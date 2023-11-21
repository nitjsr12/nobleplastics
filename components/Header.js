import React from 'react'
import {Carousel} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { images } from '@/next.config';


function Header() {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="/"><Image
          className=" "
          src="./images/Noble-logo.svg"
          alt="logo"
          width={300}
          height={80}
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav className=''>
            <Nav.Link href="/about-us" >About</Nav.Link>
            <Nav.Link href="/approach" >Approach</Nav.Link>
            <Nav.Link href="/work" >Work</Nav.Link>
            <Nav.Link href="/impact" >Impact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .navbar {
          background-color: rgba(0, 0, 0, 0.5); /* Set the background color with transparency */
        }
        .navbar-brand {
          color: #fff; /* Set the color of the brand/logo */
        }
      
      `}</style>
    </Navbar>


  )
}

export default Header
