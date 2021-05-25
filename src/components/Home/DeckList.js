import React from 'react';
import './DeckList.css';
import Deck from './Deck';

const DeckList = (props) => {
  // helper functions
  const renderList = () => {
    const mapped = props.list.map((item, index) => (
      <Deck key={index} list={item} />
    ));
    return mapped;
  };

  return <div className="DeckList">{renderList()}</div>;
};

export default DeckList;
