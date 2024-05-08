import React from 'react'
import './header.css'
import CTA from './CTA'
import Profile from '../../assets/profile-pic.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (  
    <header>
      <div class="navPages-container" id="menu" data-menu>
        <nav className="menu" role="navigation">
          <ul className="navPages-list">
            <li className="navPages-item">Home</li>
            <li className="navPages-item">About</li>
            <li className="navPages-item">Experience</li>
            <li className="navPages-item">Services</li>
          </ul>
        </nav>
      </div>
      <div className="container header-container">
        <div className="banner-flex">
          <div className="banner-titles">
              <h5>Hello I'm</h5>
              <h1>John Roncy Nava </h1>
              <div className="text-light">Web Developer</div>
              <CTA />
            </div>
          <div className="me">
            <img src={Profile} alt="profile" />
          </div>
        </div>

          <a href="#contact" className="scroll_down">Contact</a>
          <HeaderSocials  />
      </div>
    </header>
  )
}

export default Header