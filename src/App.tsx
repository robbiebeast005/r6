import React, { useState } from 'react';
import Select from 'react-select';
import Box from './Box.tsx';
import './App.css';
import Data from './data.json'

import DroneImage from './drone.png';
import SpawnpeekImage from './spawnpeek.png';
import StratagieImage from './champion.png';


function App() {

  interface props
  {
      title : string
      video : string
      opperator : string,
      description : string
  }

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const images = [DroneImage, SpawnpeekImage, StratagieImage];

  const drones  = Data.drones
  const spawnpeek  = Data.spawnpeek
  const strats = Data.strats

  const [optionPicked, setOptionPicked] = useState("")
  const [activeList, setActiveList]  = useState("drones");

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (index == 0)
      setActiveList("drones");
    if (index == 1)
      setActiveList("spawnpeek");
    if (index == 2)
      setActiveList("strats");
  };

  const options = [
    {value: "lair", label: "Lair"},
    {value: "villa", label: "Villa"},
    {value: "oregon", label: "Oregon"},
    {value: "border", label: "Border"},
    {value: "coastline", label: "Coastline"},
    {value: "theme-park", label: "Theme park"},
    {value: "nighthaven-labs", label: "Nighthaven labs"},
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
      {Data[activeList]?.[optionPicked]?.map((p : props, index) => (
        <Box values={p}/>
    ))}
    </div>
  );
}

export default App;
