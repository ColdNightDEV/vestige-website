import gsap from "gsap";
import {useEffect} from "react";
import './index.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function Services() {
  const gap = useRef();

  useEffect(() =>  {
  
    gsap.registerPlugin(ScrollTrigger)
        const scrollDivs = gsap.utils.toArray(".scroll-div");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 1,
            // markers: true
          }
        });

        scrollDivs.forEach((div, i) => {
          tl.from(div, {
            autoAlpha: 0,
            y: 60,
          });
          // just get the <p> elements inside this <div>
          let p = gsap.utils.toArray("p", div);
          tl.from(p, {
            autoAlpha: 0,
            y: 60,
            stagger: 0.2,
          });
          tl.to(gsap.utils.toArray("h1", div).concat(p), {
            autoAlpha: 0,
            y: -60,
            stagger: 0.2,
            ease: "power1.in"
          });
        });
      });

      return (
        <div id="services" ref={gap}>
          {/* <div class="bodyImage"></div> */}
          <div id="secondSection"></div>
          <div class="container">
          <div class="scroll-div">
            <h1>ABOUT US:</h1>
            <p>VESTIGE STUDIOS IS A CREATOR-LED ORGANIZATION IN THE WEB3 WORLD.</p>
            <p>OUR GOAL IS TO BRING THE VIRTUAL WORLD TO LIFE THROUGH</p>
            <p>OUR INTEGRATED DESIGNS BASED IN THE FASCINATING WORLD OF THE METAVERSE</p>
            <p>WE USE NFTs, AR TECHNOLOGY, AND VR TECHNOLOGY TO BRING TO YOU THE BEST</p>
            <p>VIRTUAL EXPERIENCE. YOU'LL HAVE ACCESS TO ALL YOUR DIGITAL AMENITIES IN</p>
            <p>A WORLD FULL OF ENDLESS POSSIBILITIES NO MATTER WHERE YOU ARE. THIS</p>
            <p>TECHNOLOGY IS AIMED TO PROVIDE ACCESS TO UNIQUE ASSETS LIKE VIRTUAL HOMES</p>
            <p>AND MAKE THEM ACCESSIBLE FROM WHEREVER YOU ARE</p>
          </div>
        </div>
        </div>
      );
}
export default Services;
