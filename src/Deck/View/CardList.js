import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
  // helper functions
  const content = Array.isArray(cards) ? (
    cards.map((card, index) => <Card key={index} card={card} />)
  ) : (
    <p>Loading</p>
  );

  return <div className="card">{content}</div>;
};

export default CardList;
