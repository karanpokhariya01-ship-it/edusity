import React from 'react'
import Heading from '../Heading/Heading'
import './Program.css'
function Program() {
  const program_section = [
    {
      img: 'edusity_assets/program-1.png',
      icon: 'edusity_assets/program-icon-1.png',
      degree: 'Graduation Degree'
    },
    {
      img: 'edusity_assets/program-2.png',
      icon: 'edusity_assets/program-icon-2.png',
      degree: 'Master Degree'
    },
    {
      img: 'edusity_assets/program-3.png',
      icon: 'edusity_assets/program-icon-3.png',
      degree: 'Post Graduation'
    }
  ]
  return (
    <>
      <div className='Program'>
        <Heading heading="What We Offer" subheading="OUR PROGRAM" />
        <div className="container">
          {
            program_section.map((item, index) => {
              return (
                <div className="program_section" key={index}>
                  <img src={item.img} alt="edusity_assets" />
                  <div className="content">
                    <img src={item.icon} alt="program-icon" />
                    <h4>{item.degree}</h4>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Program