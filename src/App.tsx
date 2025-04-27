import React, { useState } from 'react';
import Select from 'react-select';
import './App.css';

import DroneImage from './drone.png';
import x from './drone.png';
import y from './drone.png';

function App() {

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const images = [DroneImage, x, y];

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const options = [
    {value: "liar", label: "Lair"},
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
          <Select options={options} />
        </div>
      </div>
    </div>
  );
}

export default App;
