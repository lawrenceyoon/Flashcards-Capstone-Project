import React from 'react';

const Button = ({ className, color, icon, text }) => {
  return (
    <button className={`${className} btn ${color}`}>
      <span className={icon}>&nbsp;</span>
      {text}
    </button>
  );
};

export default Button;
