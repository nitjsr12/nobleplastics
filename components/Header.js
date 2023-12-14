import React from 'react'
import {Carousel} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import OffCanvas from './OffCanvas';

function Header() {
  return (
    <div >
     <nav className="navbar fixed-not navbar-expand-lg navbar-light ">
     <div class="container-fluid up-bg">
    <Link href="/" className="navbar-brand">
    <Image src="/images/Noble-logo.svg" className="img-fluid logo-img" width={200} height={300} alt='LOGO'/>
    </Link>
        <div className="d-none d-lg-block ">
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
     <OffCanvas/>
</nav>
</div>

  )
}

export default Header