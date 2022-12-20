import React from 'react'
import './button.scss'

const Button = ({ text }) => {
  return (
    <a className="round__button" href="#">
      <div>
        <span className="bg"></span>
        <span className="base"></span>
        <span className="text">{text}</span>
      </div>
    </a>
  )
}

export default Button
