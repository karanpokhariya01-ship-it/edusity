import React, { useRef } from 'react'
import './Testimonial.css'
import Heading from '../Heading/Heading'

const Testimonial = () => {
    const std = [
        {
            img: 'edusity_assets/user-1.png',
            name: 'Emily Williams',
            from: 'Edusity, USA'
        },
        {
            img: 'edusity_assets/user-2.png',
            name: 'William Jackson',
            from: 'Edusity, USA'
        },
        {
            img: 'edusity_assets/user-3.png',
            name: 'Emily Williams',
            from: 'Edusity, USA'
        },
        {
            img: 'edusity_assets/user-4.png',
            name: 'William Jackson',
            from: 'Edusity, USA'
        }
    ]
    const slider = useRef()
    let tx = 0
    const forwardfun = () => {
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const backwardfun = () => {
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <>
            <div className="Testimonial">
                <Heading heading="What Student Says" subheading="TESTIMONIALS" />
                <div className="container">
                    <img src={'edusity_assets/back-icon.png'} alt="prev arrow" className="prev_btn" onClick={backwardfun} />
                    <img src={'edusity_assets/next-icon.png'} alt="next arrow" className="next_btn" onClick={forwardfun} />
                    <div className="slider">
                        <ul ref={slider}>
                            {
                                std.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <div className="slide">
                                                <div className="std_info">
                                                    <img src={item.img} alt="student_image" className="std_img" />
                                                    <div className="std_name">
                                                        <h3 className='textBlue'>{item.name}</h3>
                                                        <span className="textGray">{item.from}</span>
                                                    </div>
                                                </div>
                                                <p className="textGray">
                                                    Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                                                </p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial