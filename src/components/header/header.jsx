
import React from 'react'
import CTA from './CTA'
import Profile from '../../assets/img/profile-pic.png'
import HeaderSocials from './HeaderSocials'
import Logo from '../../assets/img/roncy.png'
import Navigation1 from '../../components/nav/navigation'
import { GiHamburgerMenu } from "react-icons/gi"
import { Tilt } from 'react-tilt'
import CV from '../../assets/Roncy_CV.pdf'
import {MdOutlineMail} from 'react-icons/md'
import { FaPhoneAlt } from "react-icons/fa"

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            20,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
}


const Header = () => {
  return (  
    <header>
      <div className="navPages-container" id="menu" data-menu>
        <div className="container">
          <div className="header-logo">
            <a href='/webdev-portfolio'>
            <img src={Logo} alt="header logo" />
            </a>
          </div>
          <Navigation1 />
          <div className="floats-nav-custom mobile d-none">
            <div className="banner-flex">
              <h4>Contact Me</h4>
              <ul className='contact-info'>
                <li><MdOutlineMail /><a href="mailto:jroncynavs12@gmail.com">Send a message</a></li>
                <li><FaPhoneAlt /> +63 962 056 7930</li>
              </ul>
              <div className="cta">
                <a href={CV} download className='btn btn-primary'>Download CV</a>
                <a href="#contact" className="btn letsTalk">Let's Talk</a>
              </div>
            </div>
            <div className="dropdown-bottom">©2024.  Roncy Nava</div>
          </div>
          <button className="mobileMenu-toggle">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      <div className="container header-container">
        <div className="banner-flex">
          <div className="banner-titles">
              <h2>Hello I'm</h2>
              
              <h1>John Roncy Nava </h1>
              <div className="text-light">Web Developer.  </div>
              <CTA />
            </div>
          <div className="me">
          <Tilt options={defaultOptions} style={{  }}>
            <img src={Profile} alt="profile" />
            </Tilt>
          </div>
        </div>

          <a href="#contact" className="scroll_down">Contact</a>
          <HeaderSocials  />
      </div>
    </header>
  )
}

export default Header