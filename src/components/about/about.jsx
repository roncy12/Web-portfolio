import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {HiOutlineFolder} from 'react-icons/hi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about--container">
        <div className="about-me">
            <div className="about-me_img">
                <img src={ME} alt="about me" />
            </div>
        </div>

        <div className="about--content">
          <div className="about--cards">
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
          
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate totam exercitationem minima quod, corrupti consequatur praesentium cumque itaque. A, iusto natus. Quia doloremque enim aliquid fuga odio, voluptas inventore eligendi magnam delectus ex amet alias tempore ea voluptatibus autem aliquam ipsa. Asperiores, numquam ex. Ullam, doloribus! Ipsa at numquam perferendis commodi voluptate possimus veniam mollitia aspernatur repellendus quos suscipit nam, animi maxime laborum cumque doloribus quia iure aliquid quae, ut sint? Quibusdam illo officia, iste expedita vero in veritatis facere, magni voluptatem architecto omnis vel? Repellendus ipsam obcaecati, minus consequatur sit consequuntur porro necessitatibus culpa placeat, tempore, ducimus enim odio!</p>
             <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>


    </section>
  )
}

export default About