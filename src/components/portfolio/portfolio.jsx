import React from 'react'
import PortfolioImage1 from '../../assets/img/Bigcommerce-IconSleep.jpg'
import PortfolioImage2 from '../../assets/img/Bigcommerce-MotionMedia.jpg'
import PortfolioImage3 from '../../assets/img/Bigcommerce-ScrubPocket.jpg'
import PortfolioImage4 from '../../assets/img/Bigcommerce-AlaskaArms.jpg'
import PortfolioImage5 from '../../assets/img/Bigcommerce-UniBee4x4.jpg'
import PortfolioImage6 from '../../assets/img/Bigcommerce-Spraywell.jpg'
import PortfolioImage7 from '../../assets/img/Bigcommerce-ChaiTees.jpg'
import PortfolioImage8 from '../../assets/img/Bigcommerce-CWR.jpg'
import PortfolioImage9 from '../../assets/img/Bigcommerce-MKMPoolSpa.jpg'
import PortfolioImage10 from '../../assets/img/Wordpress-AffordableInteriorDesign.jpg'
import PortfolioImage11 from '../../assets/img/Wordpress-AOC.jpg'
import PortfolioImage12 from '../../assets/img/Robofriends-white.png'
import { SiBigcommerce } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import {FaReact} from "react-icons/fa"

const data = [
  {
    id: 1,
    image: PortfolioImage1,
    title: 'Icon Sleep',
    github: 'https://github.com',
    demo: 'https://icon-sleep.com/',
    platform: 'Bigcommerce',
    platformLink: 'https://www.bigcommerce.com/'
  },
  {
    id: 2,
    image: PortfolioImage2,
    title: 'Motion Media',
    github: 'https://github.com',
    demo: 'https://www.motionmedia.com/',
    platform: 'Bigcommerce',
    platformLink: 'https://www.bigcommerce.com/'
  },
  {
    id: 3,
    image: PortfolioImage3,
    title: 'Scrub Pocket',
    github: 'https://github.com',
    demo: 'https://scrubpocket.com/',
    platform: 'Bigcommerce',
    platformLink: 'https://www.bigcommerce.com/'
  },
  {
    id: 4,
    image: PortfolioImage4,
    title: 'Alaska arms LLC',
    github: 'https://github.com',
    demo: 'https://alaskaarmsllc.com/',
    platform: 'Bigcommerce',
    platformLink: 'https://www.bigcommerce.com/'
  },
  {
    id: 5,
    image: PortfolioImage5,
    title: 'Unibee 4x4',
    github: 'https://github.com',
    demo: 'https://unibee4x4.com.au/',
    platform: 'Bigcommerce',
    platformLink: 'https://www.bigcommerce.com/'
  },
  {
    id: 6,
    image: PortfolioImage6,
    title: 'Spraywell',
    github: 'https://github.com',
    demo: 'https://spraywell.com/',
    platform: 'Bigcommerce',
    platformLink: 'https://www.bigcommerce.com/'
  },
  {
    id: 7,
    image: PortfolioImage7,
    title: 'Chai Tees',
    github: 'https://github.com',
    demo: 'https://www.chai-tees.com/',
    platform: 'Bigcommerce',
    platformLink: 'https://www.bigcommerce.com/'
  },
  {
    id: 8,
    image: PortfolioImage8,
    title: 'Clean Water Revival, Inc.',
    github: 'https://github.com',
    demo: 'https://cwrenviro.com/',
    platform: 'Bigcommerce',
    platformLink: 'https://www.bigcommerce.com/'
  },
  {
    id: 9,
    image: PortfolioImage9,
    title: 'MKM Pool Spa',
    github: 'https://github.com',
    demo: 'https://www.mkmpoolspa.com/',
    platform: 'Bigcommerce',
    platformLink: 'https://www.bigcommerce.com/'
  },
  {
    id: 10,
    image: PortfolioImage10,
    title: 'Affordable Interior Design',
    github: 'https://github.com',
    demo: 'https://affordableinteriordesign.com/',
    platform: 'WordPress',
    platformLink: 'https://wordpress.com/'
  },
  {
    id: 11,
    image: PortfolioImage11,
    title: 'Always Open Commerce',
    github: 'https://github.com',
    demo: 'https://alwaysopencommerce.com/',
    platform: 'WordPress',
    platformLink: 'https://wordpress.com/'
  },
  {
    id: 12,
    image: PortfolioImage12,
    title: 'Robofriends',
    github: 'https://github.com',
    demo: 'https://roncy12.github.io/Updated-Robofriends/',
    platform: 'React & Redux',
    platformLink: 'https://react.dev/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="blurb-title">Recent Work</h2>
      <div className="container portfolio__container" >

        {
          data.map(({id, image, title, github, demo, platform, platformLink}) => {
            return(
              <article key={id} className="portfolio-item" >
                <div className="portfolio__item-image">
                    <img src={image} alt="{title}" />
                </div>
                <div className="portfolio__item-body">
                  <h5 className="web-platform">
                    <a href={platformLink} target="_blank" rel="noreferrer" >
                    {platform === 'Bigcommerce' ? <SiBigcommerce /> : platform === 'WordPress' ? <FaWordpress /> : platform === 'React & Redux' ? <FaReact /> : null} &nbsp;

                      {platform}
                    </a>
                  </h5>
                  <h3>{title}</h3>
                  
                  <div className="portfolio__item-cta">
                    <a href={demo} className="btn" target="_blank" rel="noreferrer" >Website <IoLogOutOutline /></a>
                    {/* <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer" >Live Demo</a> */}

                  </div>
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