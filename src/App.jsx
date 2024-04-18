import React from 'react'
import Header from './components/header/header'
import Navigation from './components/nav/navigation'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import { Helmet } from 'react-helmet-async';
import P from './assets/js/particle.js'
import a from './assets/js/app.js'


const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <div id="particles-js"></div>


    </div>

    
  )
}

export default App