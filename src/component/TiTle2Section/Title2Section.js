import React from 'react'
import Button from '../Button/Button'
import './Title2Section.css'

function Title2Section({title,buttonTitle}) {
  return (
    <>
        <div className='title2Section'>
            <div className="title2">
                <h2>
                     {title}
                </h2>
            </div>

            <div className="title-btn">
                
            <Button className='titleBtn' buttonStyle='btn--primary' buttonSize='btn--large'>{buttonTitle}</Button>
            </div>

      
         </div>
      
    </>
  )
}

export default Title2Section
