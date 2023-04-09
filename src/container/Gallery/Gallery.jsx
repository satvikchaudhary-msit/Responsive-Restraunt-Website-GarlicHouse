import React from 'react';

import {images} from '../../constants';
import {SubHeading} from '../../components'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const Gallery = () => {

  // const galleryPhotos = [images.gallery01, images.gallery02, images.gallery03];

  

  const scrollRef = React.useRef();

  function scroll(direction){
    
    if(direction === "left"){
      scrollRef.current.scrollLeft += 300;
    }
    else{
      scrollRef.current.scrollLeft -= 300;
    }
  }

  return(
  <div className='app__gallery flex__center'>

    <div className='app__gallery-content'>
      <SubHeading title = "Instagram" />
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style = {{color :"#AAAAAA", marginTop: '2rem'}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
      <button type='button' className = "custom__button">View More</button>
    </div>

    <div className='app__gallery-images'>
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index = 0) => (
            <div className="app__gallery-images_card flex__center" key={index += 1}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        <div className='app__gallery-images_arrows'>
              <BsArrowLeftShort className='gallery__arrow-icon' onClick= {() => scroll('right')} /> 
              <BsArrowRightShort className='gallery__arrow-icon' onClick= {() => scroll('left')} /> 
        </div>

    </div>
    
  </div>
  )
};

export default Gallery;
