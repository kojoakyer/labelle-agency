import React from 'react'
import Button from '../Button/Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <>
    <div className = 'hero-container'>
        { <video src = '/assets/video_3.mp4' autoPlay loop muted /> }
        <h1>A COLLABORATIVE CREATIVE AGENCY BUILDING</h1>
        <p>BRAND EXPERIENCE LIVE & VIRTUAL EVENTS</p>
        <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            Your Events
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            Start Planning
        </Button>
        </div>
      
    </div>
      
    </>
  ) 
}

export default HeroSection
