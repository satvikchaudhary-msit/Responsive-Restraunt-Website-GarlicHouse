import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';

import './Chef.css';

function Chef (){ 
  return (

  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src = {images.newchef} alt = "chef image"/>
    </div>

    <div className='app__wrapper_info'>
        <SubHeading title = "Chef's word" />
        <h1 className='headtext__cormorant'>What we Believe in</h1>

        <div className='app__chef-content'>

          <div className='app__chef-content_quote'>
              <img src = {images.quote} alt = "quote image"></img>
              <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>

          <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>

        </div>

        <div className='app___chef-sign'>
            <p style = {{fontSize : "2rem", lineHeight: "45px"}}className='headtext__cormorant'>Kevin Luo</p>
            <p className='p__opensans'>Chef & founder</p>

            <div className='app__chef-sign_image'>
            <img src = {images.sign} alt = "Sign Image" />
            </div>
        </div>
      

    </div>


  </div>
);
}

export default Chef;
