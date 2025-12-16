import React from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button'
import './Gallery.css'
const Gallery = () => {
    const imglocation=[
        {
            img:'edusity_assets/gallery-1.png'
        },
        {
             img:'edusity_assets/gallery-2.png'
        },
        {
             img:'edusity_assets/gallery-3.png'
        },
        {
             img:'edusity_assets/gallery-4.png'
        }
    ]
  return (
  <>
  <div className='Gallery'>
    <Heading heading="Campus Photos" subheading="Gallery" />
    <div className='container'>
        {
            imglocation.map((item,index)=>{
                return(
                   <div className="Gallery_img" key={index}>
                     <img src={item.img} key={index} alt='Gallery_img'/>
                   </div>
                )
            })
        }
    </div>
    <div style={{textAlign:'center',marginTop:'20px'}}>
        <Button title="See more here" bgcolor="bgBlue" color="textWhite"/>
    </div>
  </div>
  </>
  )
}

export default Gallery;