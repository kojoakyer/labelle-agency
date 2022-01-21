import React from 'react'
import Blog from '../Blog/Blog'
import HeroSection from '../HeroSection/HeroSection'
import MainSection from '../MainSection/MainSection'
import Map from '../Map/Map'
import Testimonials from '../Testimonials/Testimonials'
import Title2Section from '../TiTle2Section/Title2Section'
import TitleSection from '../TitleSection/TitleSection'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

function Home() {
  return (
    <div>
        <HeroSection/>
        <TitleSection description='The desire to connect through shared experiences is a fundamental human need.
         We help businesses bring people together - live, virtually or as a hybrid mix.' titleStyle='title--secondary'/>
        <MainSection {...homeObjOne}/>
        <MainSection {...homeObjThree}/>
        <MainSection {...homeObjTwo}/>
        <MainSection {...homeObjFour}/>
        <Blog/>
        <Testimonials/>
        <Map/>
        <Title2Section title='Need to plan any event' buttonTitle='talk to our team'/>
        
      
    </div>
  )
}

export default Home
