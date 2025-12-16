import React, { useRef } from 'react'
import './AboutVideo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
function AboutVideo({ video, setvideo }) {
    const play = useRef(null)
    const closeplay = (e) => {
        if (e.target == play.current) {
            setvideo(false)
        }
    }
    return (
        <>
            <div className={`AboutVideo ${video ? '' : 'hide'}`} ref={play} onClick={closeplay}>
                <div className="textWhite" style={{ cursor: 'pointer', background: '#005' }} onClick={() => { setvideo(false) }}><FontAwesomeIcon icon={faX} /></div>
                <video src={'edusity_assets/college-video.mp4'} autoPlay controls loop />
            </div>
        </>
    )
}

export default AboutVideo;