'use client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineAlignLeft } from "react-icons/ai";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Example() {
    const router = useRouter(); // Use the useRouter hook to access the router object
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-block d-lg-none d-xl-none d-xxl-none" >
      <Button variant="primary"  classname="btn btn-humburger" onClick={handleShow}>
      <AiOutlineAlignLeft size={30} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="menu-off">
        <ul className="nav nav-pills menu">
        <li className="nav-item"><Link href="/" className= {router == "/" ? "active nav-link" : "nav-link"} >Home</Link></li>
        <li className="nav-item"><Link href="/about-us" className= {router == "/about-us" ? "active nav-link" : "nav-link"}>ABOUT</Link></li>
        <li className="nav-item"><Link href="/approach" className= {router == "/approach" ? "active nav-link" : "nav-link"}>APPROACH</Link></li>
            <li className="nav-item"><Link href="/work" className= {router == "/work" ? "active nav-link" : "nav-link"}>WORK</Link></li>
            <li className="nav-item"><Link href="/impact" className= {router == "/impact" ? "active nav-link" : "nav-link"}>IMPACT</Link></li>
      </ul></div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Example;