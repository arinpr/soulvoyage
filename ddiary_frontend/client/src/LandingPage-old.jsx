import React from 'react'
import {Brand, CTA, Navbar } from './components';
import { Footer, Blog, Possibility, Features, WhatGPT, Header, Pricing } from './containers';
import './App.css'

const LandingPage = () => {
  return (
    <div className='soul-voyger_landing-page' id = 'landing-page'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
        <Pricing/>
    </div>
  )
}

export default LandingPage