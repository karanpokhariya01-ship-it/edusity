import React from 'react'
import Navheader from './Components/Navheader/Navheader'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Footer from './Components/Footer/Footer'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <React.Fragment>
      <Navheader />
      <div style={{ backgroundColor: '#F5F5F5' }}>
        <Hero />
        <Program />
        <About />
        <Gallery />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App