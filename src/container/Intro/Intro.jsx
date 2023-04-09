import React from 'react';
import { BsFillPlayFill , BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants'

import './Intro.css';

function Intro() { 
var vidRef = React.useRef();
var [playVideo, setPlayVideo] = React.useState(false);

function handleVideo(){

  setPlayVideo((prevPlayVideo) => {
  if(prevPlayVideo){
    setPlayVideo(false);
  }
  else{
    setPlayVideo(true);
  }})

  if(playVideo == true){
    vidRef.current.pause();
  }
  else{
    vidRef.current.play();
  }
}

return (
  <div className='app__video'>

      <video src = {meal} 
             type = "video/mp4" 
             ref={vidRef}
             loop 
             controls = {false} 
             muted

      />
      <div className='app__video-overlay flex__center' style= {playVideo ? {background : "rgb(0,0,0,0)"} : {background : "rgb(0,0,0,0.65)"}}>

        <div className='app__video-overlay_circle flex__center' onClick ={handleVideo} >
            {playVideo ? <BsPauseFill color = "#fff" fontSize = {30}/> : <BsFillPlayFill color = "#fff" fontSize = {30}/> }  
        </div>

      </div>
  
  </div>)
}

export default Intro;
