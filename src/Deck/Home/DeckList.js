import React, { useState, useEffect } from 'react';
import './DeckList.css';
import { listDecks } from '../../utils/api';
import Deck from './Deck';

const DeckList = () => {
  // state
  const [list, setList] = useState([]);

  // useEffect listDecks
  useEffect(() => {
    const getDecks = async () => {
      const response = await listDecks();
      setList(response);
    };
    getDecks();
  }, []);

  // helper functions
  const mapped = list.map((deck, index) => (
    <Deck key={index} deck={deck} setList={setList} />
  ));

  // think of as html
  return <div className="DeckList">{mapped}</div>;
};

export default DeckList;
