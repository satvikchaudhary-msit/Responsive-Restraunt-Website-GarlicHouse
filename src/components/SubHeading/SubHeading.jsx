import React from 'react';
import images from '../../constants/images';

function SubHeading(props){

    return (
    <div style = {{marginBottom : "1rem"}}>
      <p className = "p__cormorant">{props.title}</p>
      <img className='spoon__img' src={images.spoon} alt = "spoon"  />
    </div>
    )
}

export default SubHeading;
