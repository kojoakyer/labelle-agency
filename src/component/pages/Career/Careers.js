import React from 'react'
import TitleSection from '../../TitleSection/TitleSection'
import { Data } from './CareerData'
import Button from '../../Button/Button'
import './Careers.css'

function Careers() {
    return (
        <div>
            <TitleSection description='Careers' />
            <div className="careers">
                {Data.map((d)=>{
                    return(
                        <div className="careersContainer">
                            <div className="careerimg">
                              <img src={d.image} alt="" />
                            </div>
                            <div className="careersDescs">
                                <h1>{d.title}</h1>
                                <Button buttonSize='btn--large'>{d.button}</Button>
                            </div>
                        </div>
                    )
                })}
            
            </div>
        </div>
    )
}

export default Careers
