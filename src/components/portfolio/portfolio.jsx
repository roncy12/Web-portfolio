import React from 'react'
import './portfolio.css'
import PortfolioImage1 from '../../assets/portfolio1.jpg'
import PortfolioImage2 from '../../assets/portfolio2.jpg'
import PortfolioImage3 from '../../assets/portfolio3.jpg'
import PortfolioImage4 from '../../assets/portfolio4.jpg'
import PortfolioImage5 from '../../assets/portfolio5.png'
import PortfolioImage6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: PortfolioImage1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization' 
  },
  {
    id: 2,
    image: PortfolioImage2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma' 
  },
  {
    id: 3,
    image: PortfolioImage3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps' 
  },
  {
    id: 4,
    image: PortfolioImage4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress' 
  },
  {
    id: 5,
    image: PortfolioImage5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma' 
  },
  {
    id: 6,
    image: PortfolioImage6,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma' 
  }
]

const Portfolio = () => {
  return (
    <section id="porfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio-item">
                <div className="portfolio__item-image">
                    <img src={image} alt="{title}" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default Portfolio