import React, { useEffect, useState } from 'react'
import Title2Section from '../../TiTle2Section/Title2Section';
import TitleSection from '../../TitleSection/TitleSection';
import './Work.css'
import { BrandExperience, Sponsorship, virtualEvents } from './WorkData';
import WorkList from './WorkList/WorkList'

function Work() {

    const [selected, setSelected]=useState('virtual');
    const [data, setData]=useState([])

    const List =[
        {
            id:'virtual',
            title:'Virtual Event'
        },
        {
            id:'brand',
            title:'Brand Experience'
        },
        {
            id:'sponsor',
            title:'Sponsorship'
        }
    ]

    useEffect(()=>{

        switch(selected){
            case 'virtual':
                setData(virtualEvents,BrandExperience,Sponsorship);
                break;
            case 'brand':
                setData(BrandExperience);
                break; 
            case 'sponsor':
                setData(Sponsorship);
                break;     
            default:
                setData();
        }

    },[selected])




    return (
        <>
        <TitleSection description='Our Work'/>
        <div className='portfolio' id='portfolio'> 
           <ul className='tags'>
               {List.map((item, index)=>{
                   return(
                       
                            <WorkList title={item.title} active={selected===item.id} setselected={setSelected} id={item.id}/>
                    
                   )
               })}
          </ul>      
          <div className="workContainer">
              {data.map((d, index)=>{
                  return(
                  <div className="workItem">
                      <img className='workimg' src={d.img} alt="" />
                      <div className="workDesc">
                         <h1>{d.title}</h1>
                        <h3>{d.descr}</h3>
                      </div>
                  </div>
                  )
              })}

              
            </div>  
        </div>
        <Title2Section title='Planning A Virtual Event or Brand Activation?' buttonTitle='Get in touch'/>
        </>
    )
}

export default Work
