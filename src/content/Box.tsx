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
        <iframe
            width="320"
            height="180"
            src={`https://www.youtube-nocookie.com/embed/${values.video}?rel=0&modestbranding=1&controls=1&showinfo=0`}
            title="YouTube video player"
            allowFullScreen
        />
        <p className='description'><b>Description</b></p>
        <p className='text'> <em>{values.description}</em></p>
    </div>
  );
}

export default Box;
