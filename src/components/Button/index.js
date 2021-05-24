import React from 'react';

const Button = (props) => {
  return (
    <button className={`btn ${props.color}`}>
      <span className={props.icon}></span>
      &nbsp;{props.text}
    </button>
  );
};

export default Button;
