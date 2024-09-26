import React from 'react'
import './mainFooter.css';
import { Link } from 'react-router-dom';
import { FaFacebook , FaInstagramSquare, FaLinkedin,FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function MainFooter() {
  return (
    <>
        <hr/>
        <div className='footer_section'>
           <div>
                <img src="assets/images/SoulVoyage-logo.svg" className='' alt="" />
                <span className='text-primary'>Soul Voyage</span>
           </div>
           <p>© 2024 - SoulVoyage. All Rights Reserved</p>
           <div className="d-flex pb-3">
              <Link to={'https://www.facebook.com/'}>
                  <FaFacebook />  
              </Link>
              <Link to={'https://www.instagram.com/soulvoyageai/'}>
                <FaInstagramSquare />
              </Link>
              <Link to={'https://www.linkedin.com/company/soulvoyage-mental-health/'}>
                <FaLinkedin />
              </Link>
              <Link to={'https://www.twitter.com/'}>
                <FaXTwitter />
              </Link>
              <Link to={'https://www.tiktok.com/'}>
                <FaTiktok />
              </Link>
           </div>
           <div>
                
                    <a href="">Terms</a>
                    <a href="">Privacy</a>
           </div>
        </div>
    </>
  )
}

export default MainFooter