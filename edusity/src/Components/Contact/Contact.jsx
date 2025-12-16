import React from 'react'
import './Contact.css'
import Heading from '../Heading/Heading'
import ContactForm from './ContactForm/ContactForm'
const Contact = () => {
    const socialIcon = [
        {
            img: 'edusity_assets/mail-icon.png',
            content: 'Contact@gamil.com'
        },
        {
            img: 'edusity_assets/phone-icon.png',
            content: '+917488490530'
        },
        {
            img: 'edusity_assets/location-icon.png',
            content: '77sector dehli, , india'
        }
    ]
    return (
        <>
            <div className="Contact">
                <Heading heading='Get in Touch' subheading='Contact Us' />
                <div className="container">
                    <div className="Contact_social">
                        <h2>Send us a message  <img src={'edusity_assets/msg-icon.png'} alt="msg-icon" /></h2>
                        <p className="mb-3 textGray">Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                        <ul>
                            {
                                socialIcon.map((item, index) => {
                                    return <li className='mb-3' key={index}>
                                        <img src={item.img} alt="social_icon" />
                                        <span className='textGray'>{item.content}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="ContactForm"><ContactForm/></div> 
                </div>
            </div>
        </>
    )
}

export default Contact