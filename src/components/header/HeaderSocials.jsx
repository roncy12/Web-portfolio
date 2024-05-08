import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillDribbbleCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
        <div className="HeaderSocials-container">
            <a href="https://linked.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
                <BsGithub />
            </a>
            <a href="https://dribble.com" target="_blank" rel="noreferrer"><AiFillDribbbleCircle /></a>
        </div>
  )
}

export default HeaderSocials