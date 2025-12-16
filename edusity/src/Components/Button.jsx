import React from 'react'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Button.css'

function Button({ bgcolor, color, title, className }) {
  return (
    <button className={`common_btn ${bgcolor} ${color} ${className}`}>
      <span>{title}</span>
      <span>
        <FontAwesomeIcon icon={faArrowRightLong} />
      </span>
    </button>
  );
}

export default Button;