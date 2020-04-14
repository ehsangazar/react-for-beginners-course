import React from 'react'
import './Button.css'

const Button = ({ children, handleClick = () => {}, className, ...props }) => (
  <button onClick={handleClick} className={`button ${className}`} {...props}>
    {children}
  </button>
);

export default Button