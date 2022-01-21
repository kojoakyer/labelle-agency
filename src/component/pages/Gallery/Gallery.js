import React, { useState, useEffect } from 'react'
 import {ImageData} from './GalleryData'
 import './Gallery.css'
 import TagButton from './TagButton/TagButton'
 import { SRLWrapper } from "simple-react-lightbox";
import Title2Section from '../../TiTle2Section/Title2Section';
import TitleSection from '../../TitleSection/TitleSection';

function Gallery() {

    const [tag, setTag]=useState('all');
    const [filterimage, setFilterimage]=useState([]);

    useEffect(()=>{
        tag === 'all' ? setFilterimage(ImageData) : setFilterimage(ImageData.filter(image => image.tag === tag))
    },
    [tag]);

    const options={
        buttons:{
            showDownloadButton: false
        }
    }

    return (
        <div className='galleryContainer'>
        <TitleSection description='Our Gallery Section'/>
        <div className="gallerySection" >
            <div className="tags" >
              <TagButton name='all' handleSetTag={setTag} tagActive={tag === 'all' ? true :false} />
              <TagButton name='Hosting' handleSetTag={setTag} tagActive={tag === 'Hosting' ? true :false}  />
              <TagButton name='Ushering' handleSetTag={setTag} tagActive={tag === 'Ushering' ? true :false} />
              <TagButton name='Events' handleSetTag={setTag} tagActive={tag === 'Events' ? true :false} />
            </div>
            <SRLWrapper options={options}>
               <div className='gallery'>
                   {filterimage.map((image, index)=>{
                       return(
                          <div key={image.id} className="img">
                            <a href={image.imageSrc}>
                             <img src={image.imageSrc} alt="" />
                            </a> 
                           </div>
                        )
                    })}
               </div>
            </SRLWrapper>
        </div>
        <Title2Section title='Need any help' buttonTitle='contact us'/>
        </div>
    )
}

export default Gallery
