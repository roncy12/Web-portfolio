import React from 'react'
import './navigation.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#');

  const NameClass = activeNav === '#' ? 'active' : '' ;
  const Home = () => setActiveNav('#');
  
  return (
    <nav className="floats-nav"> 
      <a href="/react-gh-pages" onClick={Home}  className={NameClass}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : '' }><BiBookBookmark /></a>
      <a href="#services" onClick={()=> setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : '' }><RiServiceLine /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : '' }><AiOutlineMessage /></a>
    </nav>
    
  )
}


export default Navigation