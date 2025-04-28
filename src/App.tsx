import React, { useState } from 'react';
import Select from 'react-select';
import Box from './Box.tsx';
import './App.css';

import DroneImage from './drone.png';
import x from './drone.png';
import y from './drone.png';
import Video from './Video/celeste.mp4'


function App() {

  interface props
  {
      title : string
      video : string
      tag : string
      opperator : string
  }

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const images = [DroneImage, x, y];

  const [optionPicked, setOptionPicked] = useState("")

  const items : props[] = [
    {
      title: "Valk c4", 
      video: Video, 
      tag: "border",
      opperator: "valkyrie"
    },
    {
      title: "Valk c5", 
      video: Video, 
      tag: "lair",
      opperator: "valkyrie"
    },
  ]

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const options = [
    {value: "lair", label: "Lair"},
    {value: "border", label: "Border"},
    {value: "nighthaven-labs", label: "Nighthaven labs"},
    {value: "oregon", label: "Oregon"},
  ]

  return (
    <div className='base'>
      <div className='header'>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            onClick={() => handleClick(index)}
            style={{
              width: '100px',
              height: 'auto',
              cursor: 'pointer',
              opacity: activeIndex === index ? 1 : 0.5,
              transition: 'opacity 0.3s',
            }}
            alt={`Drone ${index + 1}`}
          />
        ))}
      </div>
      <div className='select-box'>
        <div className='select'>
          <h1>Select map</h1>
          <Select
            options={options}
            onChange={(option) => setOptionPicked(option!.value)}/>
        </div>
      </div>
      {items.map((p, index) => (
        p.tag == optionPicked  
        ? <Box values={p}/>
        : null
    ))}
    </div>
  );
}

export default App;
