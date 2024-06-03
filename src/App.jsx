import React from 'react'
import Header from './components/header/header'
// import Navigation from './components/nav/navigation'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
// import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import './assets/scss/components.scss'

const App = () => {
  return (
    <div>
      <Header />
      {/* <Navigation /> */}
      <main className="body">
      <About />
      {/* <Testimonials /> */}
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      </main>
      <Footer />



    </div>

    
  )
}

export default App