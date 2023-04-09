import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';

import './FindUs.css';

function FindUs(){
  return(
  <div className='app__findus app__wrapper section__padding app__bg' id = "contact">
    <div className='app__findus-content'>
        <SubHeading title = "contact" />
        <h1 className='headtext__cormorant' style = {{marginBottom : "2rem"}}>Find Us</h1>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant' style = {{margin : "2rem 0", color: "#DCCA87"}}>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 Am - 02:00 Am <br/> Sat - Sun: 10:00 Am - 03:00 Am</p>

        <button type='button' className='custom__button' style={{margin :"2rem 0"}}>Visit Us</button>
    </div>

    <div className='app__findus-image'>
        <img src= {images.findus} alt = "findus"></img>
    </div>
  </div>
);
}
export default FindUs;
