import React, { useState } from 'react';
import Select from 'react-select';
import Box from './Box.tsx';
import './App.css';

import DroneImage from './drone.png';

// Video's
import v1 from './Video/theme-park-r6.mp4'


function App() {

  interface props
  {
      title : string
      video : string
      tag : string
      opperator : string,
      description : string
  }

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const images = [DroneImage, DroneImage, DroneImage];

  const [optionPicked, setOptionPicked] = useState("")

  const items : props[] = [
    {
      title: "C4 below cafe", 
      video: v1, 
      tag: "theme-park",
      opperator: "valkyrie",
      description: "The idea is that the enemy can not see the camera, so when they walk in, you blow up the c4"
    }
  ]

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const options = [
    {value: "lair", label: "Lair"},
    {value: "border", label: "Border"},
    {value: "nighthaven-labs", label: "Nighthaven labs"},
    {value: "oregon", label: "Oregon"},
    {value: "theme-park", label: "Theme park"},
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
        p.tag === optionPicked  
        ? <Box values={p}/>
        : null
    ))}
    </div>
  );
}

export default App;
