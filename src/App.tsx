import React, { useState } from 'react';
import Select from 'react-select';
import Box from './content/Box.tsx';
import Login from './content/Login.tsx';
import ImageBox from './content/ImageBox.tsx';

import './App.css';

import Drones from './data/drones.json'
import Spawnpeek from './data/spawnpeek.json'
import Strats from './data/strats.json'

import DronePath from './images/drone.png';
import SpawnpeekPath from './images/spawnpeek.png';
import StratagiePath from './images/champion.png';


const DroneImage = new Image()
const SpawnpeekImage = new Image()
const StratagieImage = new Image()

DroneImage.src = DronePath
SpawnpeekImage.src = SpawnpeekPath
StratagieImage.src = StratagiePath


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
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              onClick={() => handleClick(index)}
              style={{
                width: '100px',
                height: 100 * img.height / img.width,
                cursor: 'pointer',
                opacity: activeIndex === index ? 1 : 0.5,
                transition: 'opacity 0.3s',
              }}
            />
          ))}
      </div>
      <Login />
      <div className='select-box'>
          <h1>Select map</h1>
          <Select
            className = 'select'
            options={options}
            isSearchable={false}
            onChange={(option) => setActiveMap(option!.value)}/>
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
