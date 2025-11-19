import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
         <h1>We Ensure Better Health For Better World</h1>
            <p>Streamline your billing processes, reduce claim denials, and accelerate collections with our comprehensive Revenue Cycle Management services.
            </p>
            <button className='btn'>Explore More <img src={dark_arrow} alt='' /></button>
      </div>
    </div>
  )
}

export default Hero