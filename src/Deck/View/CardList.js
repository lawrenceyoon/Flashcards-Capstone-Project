import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
  const mapped = Array.isArray(cards) ? (
    cards.map((card, index) => <Card key={index} card={card} />)
  ) : (
    <p>Loading</p>
  );

  return <div className="card">{mapped}</div>;
};

export default CardList;
