import React from 'react'
import './MainSection.css'
import {Link} from 'react-router-dom'
import Button from '../Button/Button'
import Slide from 'react-reveal/Slide';



function MainSection({lightBg,topLine,lightText,lightTextDesc,headLine,description,buttonLabel,img,alt,imgStart}) {
  return (
    <>

    <div className={lightBg ? 'home__hero-section': 'home__herosection darkBg'}>
        <div className="container">
            <div className="row home__hero-row" style={{display: 'flex',flexDirection: imgStart==='start' ? 'row-reverse':'row'}}>
            <Slide top duration={1000} distance="40px">
                <div className="col">
                    <div className="home__hero_img-wrapper">
                        <img src={img} alt={alt} className='home__hero-img' />
                    </div>
                </div>
            </Slide> 
             <Slide bottom duration={1000} distance="40px"> 
                <div className="col">
                    <div className="home__hero-text-wrapper">
                        <div className="top-line">
                            {topLine}
                        </div>
                       
                        <h1 className={lightText?'heading':'heading dark'}>{headLine}</h1>
                        <p className={lightTextDesc?'home__hero-subtitle':'home__hero-subtitle dark'}>{description}</p>
                        <div className="mainbtn">
                            <Link to='/sign-up'>
                              <Button  buttonStyle='btn--primary' buttonSize='btn--secondary'>{buttonLabel} &rarr;</Button>
                             </Link> 
                        </div>
                        
                    </div>
                </div>
               </Slide>   
  

            </div>
        </div>
    </div>
      
    </>
  )
}

export default MainSection
