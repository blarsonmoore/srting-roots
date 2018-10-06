import React from 'react';
import LandingImg_1 from '../Landing/images/blues guitar.jpg';
import LandingImg_2 from '../Landing/images/Vintage mandolin.jpg';
import LandingImg_3 from '../Landing/images/Acoustic guitar.jpg';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landingpage">
      <div className="row hp-container-1">
        <img id="hp-image-1" alt="blue guitar" src={LandingImg_1} />
      </div>

      <div className="row hp-container-2">
        <div className="col s12 m6">
          <h4 className="h4-font">
            Browse World Class Collections From Around The World
          </h4>
        </div>
        <div className="col s12 m6">
          <img id="hp-image-1" alt="blue guitar" src={LandingImg_2} />
        </div>
      </div>

      <div className=" row hp-container-3">
        <div className="col s12 m6">
          <img id="hp-image-1" alt="blue guitar" src={LandingImg_3} />
        </div>
        <div className="col s12 m6">
          <ul>
            <li>Browse </li>
            <li>Share</li>
            <li>Discuss</li>
            <li>Track</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
