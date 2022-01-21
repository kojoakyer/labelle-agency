import React from 'react'
import './Blog.css'
import Button from '../Button/Button'
import { data } from './BlogData'

function Blog() {
  return (
    <div className='blog'>
        {/* <div className="blogTitle">
            <h1>What's Going On</h1>
            <h3></h3>
        </div> */}
        <div className="blogContainer">
            <div className="blogTitle">
                <div className="blogHeading">
                     <h1>What's Going On</h1>
                </div>
                <div className="blogSubHeading">
                     <h3>Our weekly blog on the world of brand experience, tech, events, advertising and marketing</h3>
                </div>
            </div>   
            <div className="blogWrapper">
                {data.map((item, index)=>{
                      return(
                        <div className="card">
                           <div className="top">
                                <h1 className='topHeading'>{item.day}</h1>
                                <h4 className='topSubHeading'>{item.date}</h4>
                            </div>
                            <div className="center">
                               <h3 className='centerHeading'>{item.desc}</h3>
                            </div>
                            <div className="bottom">
                                <Button buttonStyle='btn--primary' className='blogbtn' buttonSize='btn--medium' >Learn More</Button>
                            </div>
                        </div>
                  
                    )  
                })} 
            </div>
         
      
        
         
        </div>
      
    </div>
  )
}

export default Blog
