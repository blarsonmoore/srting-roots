import React from 'react';
import './InputField.css';

export default ({ select, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input id="input" {...select} />
      <option value="ff0000">Red</option>
      <option value="00ff00">Green</option>
      <option value="0000ff">Blue</option>
    </div>
  );
};
