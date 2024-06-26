import React, { useState } from 'react';
import '../assets/styles/input-style.css';

const GradientInput = ({ value, onChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      className={`input-default ${isFocused ? 'input-focus' : ''}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default GradientInput;
