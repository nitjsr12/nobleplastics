import React from 'react'
import {Carousel} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import OffCanvas from './OffCanvas';
<<<<<<< HEAD

=======
>>>>>>> 3d8ad141d083203b1b31823ff2b0881e5784b155


function Header() {
  return (
    <div >
<<<<<<< HEAD

=======
>>>>>>> 3d8ad141d083203b1b31823ff2b0881e5784b155
     <nav className="navbar fixed-not navbar-expand-lg navbar-light ">
     <div class="container-fluid up-bg">
    <Link href="/" className="navbar-brand">
    <img src="/images/Noble-logo.svg"
    className="img-fluid logo-img"/>
    </Link>
<<<<<<< HEAD
        <div className="d-none d-lg-block ">)
=======
        <div className="d-none d-lg-block ">
>>>>>>> 3d8ad141d083203b1b31823ff2b0881e5784b155
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

     <OffCanvas/>
     </nav>
=======
     <OffCanvas/>
</nav>
>>>>>>> 3d8ad141d083203b1b31823ff2b0881e5784b155
</div>

  )
}

export default Header