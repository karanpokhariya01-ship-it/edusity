import React from 'react'
import Button from '../Button'
import './Hero.css'
function Hero() {
  return (
   <>
   <div className='Hero'>
    <div className='content'>
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
         <Button title="Explore More" bgcolor="bgWhite" color="textwhite" />
    </div>
   </div>
   </>
  )
}

export default Hero;