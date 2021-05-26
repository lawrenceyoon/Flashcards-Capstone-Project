import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  return (
    <div className="Card card">
      <div className="card-body">
        <div className="front">{card.front}</div>
        <div className="back">{card.back}</div>
        <div className="buttons">
          <button className="btn btn-secondary mr-2">
            <span className="oi oi-pencil">&nbsp;</span>Edit
          </button>
          <button className="btn btn-danger">
            <span className="oi oi-trash">&nbsp;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
