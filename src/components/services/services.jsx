import React from 'react'
import './services.css'
import {BsCheckCircleFill} from 'react-icons/bs'
const Services = () => {
  return (
    <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          <article className="service">
              <div className="service__head">
                <h3>UI/UX Design</h3>
              </div>
              <ul className="service__list">
                <li><BsCheckCircleFill /> Lorem ipsum dolor sit amet consectetur.</li>
                <li><BsCheckCircleFill /> Lorem ipsum dolor sit amet consectetur.</li>
                <li><BsCheckCircleFill /> Pariatur libero hic quo id esse.</li>
                <li><BsCheckCircleFill /> Dolorum, iure. Nulla iusto fuga inventore?</li>
                <li><BsCheckCircleFill /> Ullam sit voluptatem laudantium ipsa hic!</li>
                <li><BsCheckCircleFill /> Similique sapiente quos pariatur eaque ut?</li>
              </ul>
          </article>
          <article className="service">
              <div className="service__head">
                <h3>Web Development</h3>
              </div>
              <ul className="service__list">

                <li><BsCheckCircleFill /> Lorem ipsum dolor sit amet consectetur.</li>
                <li><BsCheckCircleFill /> Lorem ipsum dolor sit amet consectetur.</li>
                <li><BsCheckCircleFill /> Pariatur libero hic quo id esse.</li>
                <li><BsCheckCircleFill /> Dolorum, iure. Nulla iusto fuga inventore?</li>
                <li><BsCheckCircleFill /> Ullam sit voluptatem laudantium ipsa hic!</li>
                <li><BsCheckCircleFill /> Similique sapiente quos pariatur eaque ut?</li>
                <li><BsCheckCircleFill /> Similique sapiente quos pariatur eaque ut?</li>
              </ul>
          </article>
          <article className="service">
              <div className="service__head">
                <h3>Content Creation</h3>
              </div>
              <ul className="service__list">
                
                <li><BsCheckCircleFill /> Lorem ipsum dolor sit amet consectetur.</li>
                <li><BsCheckCircleFill /> Lorem ipsum dolor sit amet consectetur.</li>
                <li><BsCheckCircleFill /> Pariatur libero hic quo id esse.</li>
                <li><BsCheckCircleFill /> Dolorum, iure. Nulla iusto fuga inventore?</li>
                <li><BsCheckCircleFill /> Ullam sit voluptatem laudantium ipsa hic!</li>
                <li><BsCheckCircleFill /> Similique sapiente quos pariatur eaque ut?</li>
              </ul>
          </article>
        </div>

    </section>
  )
}

export default Services