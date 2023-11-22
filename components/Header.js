import React from 'react'
import {Carousel} from 'react-bootstrap';
import Link from 'next/link';
<<<<<<< HEAD
import Image from 'next/image'
=======
import Image from 'next/image';
import OffCanvas from './OffCanvas';
>>>>>>> 3d8ad14 (css changes)


function Header() {
  return (
    <div >
<<<<<<< HEAD
     <nav className="navbar fixed-not navbar-expand-lg navbar-light justify-content-center  ">
    <div className="container"><Link className="nav-link" href="/">
    <Image src="./images/Noble-logo.svg" className="logo" alt="..." width={400} height={100}/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
            <span className="navbar-toggler-icon"></span>
        </button></Link>
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
            
=======
     <nav className="navbar fixed-not navbar-expand-lg navbar-light ">
     <div class="container-fluid up-bg">
    <Link href="/" className="navbar-brand">
    <img src="/images/Noble-logo.svg"
    className="img-fluid logo-img"/>
    </Link>
        <div className="d-none d-lg-block ">
>>>>>>> 3d8ad14 (css changes)
            <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link" href="/about-us">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/approach">Approach</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/work">Work</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/impact">Impact</Link>
                </li>
            </ul>
        </div>
    </div>
<<<<<<< HEAD
=======
     <OffCanvas/>
>>>>>>> 3d8ad14 (css changes)
</nav>
</div>

  )
}

export default Header