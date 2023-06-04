import React from 'react'
import './experience.css'
import {BsShieldFillCheck} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What's Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container exp_container">
        <div className="exp__frontend">
        <div className="exp__content">
            <h2>Frontend Development</h2>
            <div className="expDetails-container">
              <article className="exp_details">
                  <BsShieldFillCheck />
                  <div>
                    <h4>HTML</h4>
                    <small>Experience</small>
                  </div>
                </article>
                <article className="exp_details">
                  <BsShieldFillCheck />
                  <div>
                    <h4>CSS</h4>
                    <small>Experience</small>
                  </div>
                </article>
                <article className="exp_details">
                  <BsShieldFillCheck />
                  <div>
                    <h4>Javascript</h4>
                    <small>Experience</small>
                  </div>
                </article>
                <article className="exp_details">
                  <BsShieldFillCheck />
                  <div>
                    <h4>Bootstrap</h4>
                    <small>Experience</small>
                  </div>
                </article>
                <article className="exp_details">
                  <BsShieldFillCheck />
                  <div>
                    <h4>Tailwind</h4>
                    <small>Experience</small>
                  </div>
                </article>
                <article className="exp_details">
                  <BsShieldFillCheck />
                  <div>
                    <h4>React</h4>
                    <small>Experience</small>
                  </div>
                </article>
            </div>
          </div>
        </div>
        <div className="exp__backend">
        <div className="exp__content">
            <h2>Backend Development</h2>
            <div className="expDetails-container">
                <article className="exp_details">
                  <BsShieldFillCheck />
                  <div>
                    <h4>Node JS</h4>
                    <small>Experience</small>
                  </div>
                </article>
                <article className="exp_details">
                  <BsShieldFillCheck />
                  <div>
                    <h4>Mongo DB</h4>
                    <small>Experience</small>
                  </div>
                </article>
                <article className="exp_details">
                  <BsShieldFillCheck />
                  <div>
                    <h4>PHP</h4>
                    <small>Experience</small>
                  </div>
                </article>
                <article className="exp_details">
                  <BsShieldFillCheck />
                  <div>
                    <h4>MySQL</h4>
                    <small>Experience</small>
                  </div>
                </article>
                <article className="exp_details">
                  <BsShieldFillCheck />
                  <div>
                    <h4>Python</h4>
                    <small>Experience</small>
                  </div>
                </article>
            </div> 
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience