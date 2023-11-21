import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Container, Nav, Offcanvas, Button } from 'react-bootstrap';


function Header() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOffcanvasClose = () => setShowOffcanvas(false);
    const handleOffcanvasToggle = () => setShowOffcanvas((prev) => !prev);
  

  return (
    <>
    <Navbar bg="transparent" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="/"><Image
          className="img_logo "
          src="./images/Noble-logo.svg"
          alt="logo"
          width={300}
          height={80}
        /></Navbar.Brand>
          <Nav className='ml-auto d-xs-none'>
            <Nav.Link href="/about" >About</Nav.Link>
            <Nav.Link href="/approach" >Approach</Nav.Link>
            <Nav.Link href="/work" >Work</Nav.Link>
            <Nav.Link href="/impact" >Impact</Nav.Link>
          </Nav>
          <Button
            variant="outline-light"
            onClick={handleOffcanvasToggle}
            className="d-lg-none" // Hide the button on larger screens (desktop)
          >
            Menu
          </Button>
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

    <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/" onClick={handleOffcanvasClose}className='mob-nav' >
            Home
            </Nav.Link>
            <Nav.Link href="/about" onClick={handleOffcanvasClose} className='mob-nav'>
            About
            </Nav.Link>
            <Nav.Link href="/approach" onClick={handleOffcanvasClose} className='mob-nav'>
            Approach
            </Nav.Link>
            <Nav.Link href="/work" onClick={handleOffcanvasClose} className='mob-nav'>
            Work
            </Nav.Link>
            <Nav.Link href="/impact" onClick={handleOffcanvasClose}className='mob-nav'>
            Impact
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>


  )
}

export default Header
