import React from 'react';
import './CardList.css';
import Button from '../Button';

const CardList = ({ cards }) => {
  // helper function
  const renderCards = () => {
    const mapped = cards.map((card, index) => (
      <div className="card" key={index}>
        <div className="card-body">
          <div className="front">{card.front}</div>
          <div className="back">{card.back}</div>
          <div className="buttons">
            <Button color="btn-secondary" icon="oi oi-pencil" text="Edit" />
            <Button color="btn-danger" icon="oi oi-trash" />
          </div>
        </div>
      </div>
    ));
    return mapped;
  };

  return <div className="CardList">{renderCards()}</div>;
};

export default CardList;
