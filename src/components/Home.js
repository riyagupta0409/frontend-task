import React from 'react'
import { Footer } from './Footer'
import { Form } from './Form'
import { Header } from './Header'

export const Home = () => {
  return (
    <>
    <Header/>
    <div className='kycUpdateHeading' style={{marginTop:'30px',fontSize:'48px'}}><span  className='formHeadingsBlue' style={{fontSize:"48px !important"}}>KYC &nbsp;</span> <span className='formHeadingsRed'>Update</span> </div>

    <Form/>
    <Footer/>
    </>
  )
}
