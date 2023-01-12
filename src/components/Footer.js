import React from 'react'
import { SiFacebook , SiYoutube } from "react-icons/si";

export const Footer = () => {
  return (
    <div className='footer'>
        <span>copyright 2022 SR Pay. All rights Reserved</span>
        <span style={{color:"black",fontSize:"25px"}}><SiFacebook/> &nbsp;&nbsp;&nbsp;&nbsp; <SiYoutube/> </span> 
        <span>About SR Pay</span>

        
    </div>
  )
}
