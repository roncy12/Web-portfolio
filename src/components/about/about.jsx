import React from 'react'
import ME from '../../assets/img/6508162.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {HiOutlineFolder} from 'react-icons/hi'


const About = () => {
  return (
    <section id="about">
      <h2 className="blurb-title">Get To Know About Me</h2>

      <div className="container about--container">
        <div className="about-me"  data-aos="fade-right" data-aos-duration="3000">
            <div className="about-me_img">
                <img src={ME} alt="about me" />
            </div>
        </div>

        <div className="about--content" data-aos="fade-left" data-aos-duration="3000">
          <div className="about--cards d-none">
              <article className="about-card">
                <BsAward className='about-icon'/>
               
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className="about-card">
                <FiUsers className='about-icon'/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className="about-card">
                <HiOutlineFolder className='about-icon'/>
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
          </div>
          
          <p>I've worked as a web developer for an IT solutions company for three years. Expertise developing online e-commerce websites using Bigcommerce, WordPress, and Shopify.</p>
          <ul>
            <li className='text-dark'>Responsible for customizing, building, and maintaining the online stores.</li>
            <li className='text-dark'>Working with themes, templates, plugins, and APIs to create unique functionality, improve user experience, and integrate third-party services as needed.</li>
            <li className='text-dark'>Boost your ranking on SEO, accessibility, performance, and page speed optimization.</li>
          </ul>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>


    </section>
  )
}

export default About