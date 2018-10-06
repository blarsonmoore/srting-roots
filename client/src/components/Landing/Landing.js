import React from 'react';
import LandingImg_1 from '../Landing/images/blues guitar.jpg';

import './Landing.css';

const Landing = () => {
  return (
    <div id="hp-container-1" className="container">
      <img id="hp-image-1" alt="blue guitar" src={LandingImg_1} />
    </div>
  );
};

export default Landing;
