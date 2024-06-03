import React from 'react'
import {useState} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import { AiFillSafetyCertificate } from "react-icons/ai";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#');

  const NameClass = activeNav === '#' ? 'active' : '' ;
  const Home = () => setActiveNav('#');
  
  return (
    <nav className="navigation"> 
    <ul className="navPages-list">
      <li className="navPages-item">
        <a href="/webdev-portfolio" onClick={Home}  className={NameClass}>
        <AiOutlineHome /> <span className='linkLabel'>Home</span>
        </a>
      </li>
      <li className="navPages-item">
        <a href="/webdev-portfolio#about" data-target="#about" onClick={()=> setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}>
        <BiUserCircle/><span className='linkLabel'>About</span>
        </a>
      </li>
      <li className="navPages-item">
        <a href="/webdev-portfolio#experience" data-target="#experience" onClick={()=> setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : '' }>
        <BiBookBookmark /><span className='linkLabel'>Experience</span>
          </a>
      </li>
      <li className="navPages-item">
        <a href="/webdev-portfolio#services" data-target="#services" onClick={()=> setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : '' }>
        <RiServiceLine /><span className='linkLabel'>Services</span>
        </a>
      </li>
      <li className="navPages-item">
        <a href="/webdev-portfolio#portfolio" data-target="#portfolio" onClick={()=> setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active' : '' }>
        <AiFillSafetyCertificate /><span className='linkLabel'>Portfolio</span>
        </a>
      </li>
      <li className="navPages-item">
        <a href="/webdev-portfolio#contact" data-target="#contact" onClick={()=> setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : '' }>
        <AiOutlineMessage /><span className='linkLabel'>Contact</span>
        </a>
      </li>
    </ul>
    </nav>

  )
}


export default Navigation