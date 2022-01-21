import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES =['btn--medium', 'btn--large']



const Button = ({children,type,onClick,buttonStyle,buttonSize}) => {
   const CheckButtonStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

   const CheckButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
     <Link to='/sign-up' className='btn-mobile'>
         <button className={`btn ${CheckButtonStyles} ${CheckButtonSizes}`} onClick={onClick} type = {type}>
             {children}
         </button>
     </Link>
  )
}

export default Button

 