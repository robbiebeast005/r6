import React, { useState } from 'react';
import Select from 'react-select';
import Box from './Box.tsx';
import ImageBox from './ImageBox.tsx';

import './App.css';

import Drones from './data/drones.json'
import Spawnpeek from './data/spawnpeek.json'
import Strats from './data/strats.json'

import DroneImage from './drone.png';
import SpawnpeekImage from './spawnpeek.png';
import StratagieImage from './champion.png';


const images = [DroneImage, SpawnpeekImage, StratagieImage];
const data = [Drones.drones, Spawnpeek.spawnpeek, Strats.strats]


const options = [
  //{value: "lair", label: "Lair"},
  {value: "bank", label: "Bank"},
  {value: "villa", label: "Villa"},
  //{value: "oregon", label: "Oregon"},
  //{value: "border", label: "Border"},
  {value: "outback", label: "Outback"},
  {value: "coastline", label: "Coastline"},
  {value: "clubhouse", label: "Clubhouse"},
  {value: "theme-park", label: "Theme park"},
  //{value: "nighthaven-labs", label: "Nighthaven labs"},
]

function App() {

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeMap, setActiveMap] = useState("")
  const [activeList, setActiveList]  = useState(data[0]);
  
  const handleClick = (index: number) => {
    setActiveIndex(index);
    setActiveList(data[index]);
  };
  

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
          />
        ))}
      </div>
      <div className='select-box'>
        <div className='select'>
          <h1>Select map</h1>
          <Select
            options={options}
            isSearchable={false}
            onChange={(option) => setActiveMap(option!.value)}/>
        </div>
      </div>
      {activeList?.[activeMap]?.map((p, index) => (
        activeIndex === 0 
        ? <ImageBox key={index} values={p}/>
        : <Box key={index} values={p}/>
    ))}
    </div>
  );
}

export default App;
