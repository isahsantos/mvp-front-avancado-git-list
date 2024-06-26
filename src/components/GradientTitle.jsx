import React from 'react';

const GradientTitle = ({ text }) => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #4facfe, #00f2fe)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontSize: '1.5rem',  
    fontWeight: 'bold', 
    margin: '20px 0',  
  };

  return <h1 style={gradientStyle}>{text}</h1>;
};

export default GradientTitle;
