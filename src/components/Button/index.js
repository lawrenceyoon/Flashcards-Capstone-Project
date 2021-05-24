import React from 'react';

const Button = (props) => {
  return (
    <button className={`btn ${props.color}`}>
      <span className={props.icon}>&nbsp;</span>
      {props.text}
    </button>
  );
};

export default Button;
