import React, { useState } from 'react';

interface props
{
    title : string
    img : string
    floor : string
    description : string
}

interface ImageBoxProps {
    values: props;
  }
  

function ImageBox({ values } : ImageBoxProps) {

  return (
    <div className='box'>
        <h1>{values.title}</h1>
        <img
          width="320"
          src={values.img}
        />
        <p className='description'><b>Description</b></p>
        <p className='text'> <em>{values.description}</em></p>
    </div>
  );
}

export default ImageBox;
