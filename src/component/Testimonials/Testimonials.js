import React from 'react'
import './Testimonials.css'
import Button from '../Button/Button'
import {Link} from 'react-router-dom'

function Testimonials() {
  return (
    <div className='testimonial'>
        { <video className='testVideo' src = '/assets/video_3.mp4' autoPlay loop muted /> }
      <div className="story_heading">
          <h1>WE MAKE PEOPLE GENUINELY HAPPY</h1>
      </div>

      <div className="story_row">
          <div className="story">
            <figure className='story_shape'>
                <img src="assets/pic3.jpg" alt="" className='storyImage'/>
                <figcaption className='story_caption'>Pearl Agbove</figcaption>
            </figure>
            <div className="story_text">
                <h3>I am happy with the services from Labelle </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ex quasi explicabo. Itaque doloribus odit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur ullam, maiores incidunt magnam vel ex perferendis suscipit nesciunt, enim eveniet assumenda accusantium, iusto unde aperiam? Quasi accusamus eum fuga? facere illum velit?</p>
            </div>
          </div>
      </div>

      <div className="story_row">
          <div className="story">
            <figure className='story_shape'>
                <img src="assets/pic2.jpg" alt="" className='storyImage'/>
                <figcaption className='story_caption'>Dan lok</figcaption>
            </figure>
            <div className="story_text">
                <h3>wow!! i love labelle they are the best</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ex quasi explicabo. Itaque doloribus odit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur ullam, maiores incidunt magnam vel ex perferendis suscipit nesciunt, enim eveniet assumenda accusantium, iusto unde aperiam? Quasi accusamus eum fuga? facere illum velit?</p>
            </div>
          </div>
      </div>

      <div className="story_row">
          <div className="story">
            <figure className='story_shape'>
                <img src="assets/pic6.jpg" alt="" className='storyImage'/>
                <figcaption className='story_caption'>kojo Akyer</figcaption>
            </figure>
            <div className="story_text">
                <h3>Thank you labelle, im really amazed by your professionalism and work ethics </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ex quasi explicabo. Itaque doloribus odit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur ullam, maiores incidunt magnam vel ex perferendis suscipit nesciunt, enim eveniet assumenda accusantium, iusto unde aperiam? Quasi accusamus eum fuga? facere illum velit?</p>
            </div>
          </div>
      </div>

      <div className='storyBtn'>
           <Button  buttonStyle='btn--outline' buttonSize='btn--large'> <Link className='linkBtn'>Read all stories &rarr;</Link> </Button>
      </div>
    </div>
  )
}

export default Testimonials
