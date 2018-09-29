// Field for user input

import React from 'react';
import './InputField.css';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input id="input" {...input} />
      <div className="inputFieldError">{touched && error}</div>
    </div>
  );
};
