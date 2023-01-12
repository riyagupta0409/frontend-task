import React from 'react'
import logo from '../sr-pay-logo.jpg'
import { SiGmail , SiPinboard } from "react-icons/si";


export const Header = () => {
  return (
    <div className='header'>
        <img src={logo} className="sr-logo" alt="logo" />
        <span className='contact-info'>
            <span> <SiPinboard/> &nbsp; 0123456789</span>
            <span> <SiGmail/> &nbsp; example@gmail.com </span>
        </span>
    </div>
  )
}
