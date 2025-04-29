import React, { useState } from 'react';
import './Box.css'

interface props
{
    title : string
    video : string
    opperator : string
    description : string
}

interface BoxProps {
    values: props;
  }
  

function Box({ values } : BoxProps) {

  return (
    <div className='box'>
        <h1>{values.title}</h1>
        <p className='opperator'><b>Opperator</b> {values.opperator}</p>
        <video width="320" poster={""} controls>
            <source 
            src={values.video} 
            type='video/mp4'/>
        </video>
        <p className='description'><b>Description</b></p>
        <p className='text'> <em>{values.description}</em></p>
    </div>
  );
}

export default Box;
