import React, { useState } from 'react';
import './Box.css'

import x from './drone.png';

interface props
{
    title : string
    video : string
    tag : string
    opperator : string
}

interface BoxProps {
    values: props;
  }
  

function Box({ values } : BoxProps) {

  return (
    <div className='box'>
        <h1>{values.title}</h1>
        <p>Opperator: {values.opperator}</p>
        <video width="320" height="240" poster={""} controls>
            <source 
            src={values.video} 
            type='video/mp4'/>
        </video>
    </div>
  );
}

export default Box;
