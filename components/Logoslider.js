import {Container,Row, Col} from 'react-bootstrap';
import Image from 'next/image';




var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const options = {
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

function LinksExample() {


  return (
<Container className="f_content text-center p-3 mt-6">
<div className="unique_text">
          <h2>
          <span style={{ color: "#A6CE41" }}> Our </span> Partners 
          </h2>
        </div>
<OwlCarousel
          // className="owl-theme"
          loop={true}
          autoplay={true}
          margin={10}
          {...options}
        >
          <div class="item">
            <Image
              alt="img1"
              src="/images/swasti.png"
              className="partners"
              width={ 205} 
              height={50}
            />
          </div>
          <div class="item">
          <Image
              alt="img1"
              src="/images/cms.webp"
              className="partners"
              width={ 135} 
              height={51}
            />
          </div>
          <div class="item">
          <Image
              alt="img1"
              src="/images/fuzio.webp"
              className="partners"
              width={ 153} 
              height={73}
            />
          </div>
          <div class="item">
          <Image
              alt="img1"
              src="/images/the.webp"
              className="partners"
              width={ 67} 
              height={70}
            />
          </div>
          <div class="item">
          <Image
              alt="img1"
              src="/images/member.webp"
              className="partners"
              width={ 50} 
              height={86}
            />
          </div>
          <div class="item">
          <Image
              alt="img1"
              src="/images/ms.webp"
              className="partners"
              width={ 98} 
              height={58}
            />
            
          </div>
          <div class="item">
          <Image
              alt="img1"
              src="/images/tam.webp"
              className="partners"
              width={ 205} 
              height={45}
            />
            
          </div>
        </OwlCarousel>


</Container>

  );
}

export default LinksExample;