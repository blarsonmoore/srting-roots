import React from 'react';
import LandingImg_1 from '../Landing/images/blues guitar shape-1.jpg';
import LandingSVG_1 from '../Landing/images/StringRootsLarge.png';

import './Landing.css';

const Landing = () => {
  return (
    <div id="hp-container-1" className="container">
      <img id="hp-image-1" alt="blue guitar" src={LandingImg_1} />
      <img id="hp-svg-1" alt="string roots logo" src={LandingSVG_1} />
    </div>
  );
};

export default Landing;
