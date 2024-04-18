import React from 'react'
import './header.css'
import CTA from './CTA'
import Profile from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (  
    <header>
      <div className="container header-container">
          <h5>Hello I'm</h5>
          <h2>John Sample</h2>
          <div className="text-light">FullStack Developer</div>
        
          <CTA />
        
          <div className="me">
            <img src={Profile} alt="profile-photo" />
          </div>

          <a href="#contact" className="scroll_down">Contact</a>
          <HeaderSocials  />
      </div>
    </header>
  )
}

export default Header