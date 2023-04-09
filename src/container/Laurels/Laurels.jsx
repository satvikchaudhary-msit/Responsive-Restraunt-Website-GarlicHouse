import React from 'react';
import {SubHeading} from '../../components';
import {data, images} from '../../constants';

import './Laurels.css';


function AwardCard(props){
  var curr__obj = props.award;
  return (
    <div className='app__laurels-awards-card'>
      <img src = {curr__obj.imgUrl} alt = "awards"/>

      <div className='app__laurels_awards-card_content'>
        <p className='p__cormorant' style = {{color: '#DCCA87'}}>{curr__obj.title}</p>
        <p className='p__opensans'>{curr__obj.subtitle}</p>
      </div>

    </div>

  )
}

function Laurels()
{
  return (
    <div className='app__bg app__wrapper section__padding' id = "awards">
      <div className='app__wrapper_info'>
        <SubHeading title = "Awards & recognition"></SubHeading>
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <div className='app__laurels_awards'>

              {data.awards.map((currAward) => (<AwardCard award = {currAward} key = {currAward.title} />)) }

        </div>
    </div>


    <div className='app__wrapper_img'>
        <img className = "laurels_image" src = {images.laurels} alt = "laurels_img"></img>
    </div>

      
    </div>
  

  )
}

export default Laurels;
