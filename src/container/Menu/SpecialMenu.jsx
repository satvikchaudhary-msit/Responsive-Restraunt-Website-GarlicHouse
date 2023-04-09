import React from 'react';
import {images, data} from '../../constants'
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

function SpecialMenu() {
  return (

  <div className = "app__specialMenu flex__center section__padding" id = "menu">
    
    <div className='app__specialMenu-title'>
        <SubHeading title = "Menu that fits in" />
        <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu'>

      <div className='app__specialMenu-menu_wine  flex__center'>
          <p className='app__specialMenu_menu_heading'>Wine & Beer</p>

          <div className='app__specialMenu_menu_items'>
              {data.wines.map((currWine) => <MenuItem key = {currWine.title} title = {currWine.title} price = {currWine.price} tags = {currWine.tags} /> )}
          </div>
      </div>

      <div className='app__specialMenu-menu_img'>
          <img src = {images.newmenuimg} alt = "menu image"></img>
      </div>

      
      <div className='app__specialMenu-menu_cocktails  flex__center'>
          <p className='app__specialMenu_menu_heading'>Cocktails</p>
          
          <div className='app__specialMenu_menu_items'>
              {data.cocktails.map((currCocktail) => <MenuItem key = {currCocktail.title} title = {currCocktail.title} price = {currCocktail.price} tags = {currCocktail.tags} /> )}
          </div>
      </div>
    </div>

    <div style = {{marginTop : "15px"}}>
          <button type = "button" className='custom__button'>Explore More</button>
      </div>

  </div>
  
  );
}

export default SpecialMenu;
