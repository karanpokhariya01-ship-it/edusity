import React from 'react'
import './Heading.css'
function Heading({subheading,heading}) {
  return (
   <>
   <div className='Heading'>
    <h4 className='textBlue'>{subheading}</h4>
   <h2 className='textDarkblue'>{heading}</h2>
   </div>
   </>
  )
}

export default Heading;