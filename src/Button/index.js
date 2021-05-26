import React from 'react';

const Button = ({ className, deleteClick, color, icon, text }) => {
  return (
    <button className={`${className} btn ${color}`} onClick={deleteClick}>
      <span className={icon}>&nbsp;</span>
      {text}
    </button>
  );
};

export default Button;
