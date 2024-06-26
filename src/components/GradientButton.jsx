import React from 'react';

const GradientButton = ({ onClick, text }) => {
  const buttonStyle = {
    background: 'linear-gradient(45deg, #14B2F5, #5276D3)',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background 0.3s',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default GradientButton;