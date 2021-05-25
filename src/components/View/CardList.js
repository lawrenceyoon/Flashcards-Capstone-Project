import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
  // helper functions
  const renderCards = () => {
    if (Array.isArray(cards)) {
      return cards.map((card, index) => <Card key={index} card={card} />);
    } else {
      return <p>Loading</p>;
    }
  };

  return <div className="card">{renderCards()}</div>;
};

export default CardList;
