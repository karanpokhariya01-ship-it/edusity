import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import Button from '../Button'
import './Navheader.css'

function Navheader() {
    const[fixednav,setfixednav]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>150 ?setfixednav(true) : setfixednav(false)
        })
    },[])
    const[mobilmenu,setmobilmenu]=useState(false)
    // const toggelmenu=()=>{
    //     mobilmenu?setmobilmenu(false):setmobilmenu(true)
    // }
    return (
        <>
            <nav className={`Navheader ${fixednav?'dark-nav':''}`}>
                <div className='container'>
                    <div className="logo">
                        <Link to="Hero" smooth={true} duration={500}>
                            <img src={'edusity_assets/logo.png'} alt="logo for website" />
                        </Link>
                    </div>
                    <ul className={`${mobilmenu?'':'hide-mobile-menu'}`}>
                        <li>
                            <Link to="Hero"  smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link to="Program" smooth={true} duration={500}>Program</Link>
                        </li>
                        <li>
                            <Link to="About" offset={-80} smooth={true} duration={500}>About Us</Link>
                        </li>
                        <li>
                            <Link to="Gallery" smooth={true} duration={500}>Campus</Link>
                        </li>
                        <li>
                            <Link to="Testimonial" smooth={true} duration={500}>Testimonials</Link>
                        </li>
                        <li>
                            <Link to="Contact" smooth={true} duration={500}>
                                <Button title="Contact us" bgcolor="bgWhite" color="textwhite"type="button" />
                            </Link>
                        </li>
                    </ul>
                    {/* <img src={'edusity_assets/menu-icon.png'} alt="menu-icon" className='menu-icon' onClick={toggelmenu} /> */}
                    <img src={'edusity_assets/menu-icon.png'} alt="menu-icon" className='menu-icon' onClick={()=>{setmobilmenu(prev=>!prev)}} />
                </div>
            </nav>
        </>
    )
}

export default Navheader