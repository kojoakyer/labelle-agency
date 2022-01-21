import React from 'react'
import './Map.css'

function Map() {
  return (
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.9158916845386!2d-0.18857324422704116!3d5.603869601024979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuNyJOIDDCsDExJzEyLjkiVw!5e0!3m2!1sen!2sgh!4v1636218709023!5m2!1sen!2sgh" width="100%" height="550" style={{border:0}} allowfullscreen="" loading="lazy" title='our location'></iframe>
    </div>
  )
}

export default Map
