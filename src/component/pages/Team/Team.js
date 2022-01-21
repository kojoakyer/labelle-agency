import React from 'react'
import Title2Section from '../../TiTle2Section/Title2Section'
import TitleSection from '../../TitleSection/TitleSection'
import './Team.css'
import { data } from './TeamData'

function Team() {
  return (
    <>
    <TitleSection description='The Labelle Team'/>
    <div className='team'>
      {data.map((d, index)=>{
        return(
          <div className="item">
            <div className="imgteam">
               <img src={d.img} alt="" />
            </div>
            <div className="image_content">
              <div className="name">
                  <h3>{d.name}</h3>
              </div>
              <div className="image_title">
                 <h4>{d.title}</h4>
              </div>
            </div>
      </div>
        )
      })}   
    </div>
    <Title2Section title='Need to get in touch with
somebody on the team?' buttonTitle='get in touch'/>
    </>
  )
}

export default Team
