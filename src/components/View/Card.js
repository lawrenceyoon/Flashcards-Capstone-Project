import React from 'react';
import './Card.css';
import Button from '../Button';

const Card = ({ card }) => {
  return (
    <div className="Card card">
      <div className="card-body">
        <div className="front">{card.front}</div>
        <div className="back">{card.back}</div>
        <div className="buttons">
          <Button color="btn-secondary" icon="oi oi-pencil" text="Edit" />
          <Button color="btn-danger" icon="oi oi-trash" />
        </div>
      </div>
    </div>
  );
};

export default Card;
