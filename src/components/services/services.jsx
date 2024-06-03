import React from 'react'
import ME from '../../assets/img/herobanner-bg1.jpg'
import { IoShieldCheckmark } from "react-icons/io5"

const Services = () => {
  return (
    <div id="services">

      <section id="about service--section">
        <h2 className="blurb-title">Services Offered</h2>
  
        <div className="container about--container">
        <div className="about-me"  data-aos="fade-right" data-aos-duration="3000">
              <div className="about-me_img">
                  <img src={ME} alt="about me" />
              </div>
          </div>
        <div className="about--content" data-aos="fade-left" data-aos-duration="3000">
            {/* <h2 className='text-dark'>Website Development</h2> */}
            <ul>
              <li className='text-dark'><IoShieldCheckmark /> Improve your SEO ranking, enhance accessibility, optimize performance, and boost page speed.</li>
              <li className='text-dark'><IoShieldCheckmark /> Enhance the user experience and the responsiveness of the website on desktop, tablet, and mobile devices.</li>
              <li className='text-dark'><IoShieldCheckmark /> Personalization of the Navigation Menu</li>
              <li className="text-dark"><IoShieldCheckmark /> Customizing Email Templates</li>
              <li className="text-dark"><IoShieldCheckmark /> GraphQL & API to develop special features</li>
              <li className="text-dark"><IoShieldCheckmark /> Optimizing Performance</li>
            </ul>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>

        </div>
      </section>
      
      </div>
  )
}

export default Services