import React from "react";
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import { SiGmail } from 'react-icons/si';
import "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ControlledCarousel } from "../login page/carousel";
import '../index.css'
import { NavBarrr } from "../login page/navbarrr";
import { Pricing } from "../login page/pricing";


const Sign = () => {
    return (
        <div id="sign-page">

            <NavBarrr />
            
            <section id="pics">
                <ControlledCarousel />
            </section>

            <section id="pricing">
                <Pricing />
            </section>

            {/* //Footer Section\ */}
            <footer id="footer">
                <a class="footer-icon social-link "><BsTwitter className='g-icon' /></a>
                
                <a href="#" class="footer-icon social-link ">< GrLinkedin className='g-icon' /></a>
                
                <a class="footer-icon social-link social-link"> <BsInstagram className='g-icon' /> </a>
                <a class="footer-icon social-link ">< SiGmail className='g-icon' /></a>
                 
                

                <p>© Copyright LemeCon</p>

            </footer>
            {/* Footer finishes */}
        </div >
    );
}

export default Sign;