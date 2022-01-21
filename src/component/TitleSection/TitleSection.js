import React from 'react'
import './TitleSection.css'


const STYLES = ['title--primary','title--secondary']

const SIZES =[]

function TitleSection({description,titleSize,titleStyle}) {

  const ChecktitleStyles = STYLES.includes(titleStyle) ? titleStyle : STYLES[0];

   const ChecktitleSizes = SIZES.includes(titleSize) ? titleSize : SIZES[0];

  return (
    <div className='titleSection'>
        <div>
            <h2 className={`title ${ChecktitleStyles} ${ChecktitleSizes}`}>
            {description}
            </h2>
        </div>
      
    </div>
  )
}

export default TitleSection
