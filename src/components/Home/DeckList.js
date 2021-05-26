import React from 'react';
import './DeckList.css';
import Deck from './Deck';

const DeckList = ({ list, setList }) => {
  // helper functions
  const renderList = () => {
    const mapped = list.map((deck, index) => (
      <Deck key={index} deck={deck} list={list} setList={setList} />
    ));
    return mapped;
  };

  return <div className="DeckList">{renderList()}</div>;
};

export default DeckList;
