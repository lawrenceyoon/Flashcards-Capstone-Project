import React, { useEffect, useState } from 'react';
import './DeckList.css';
import { listDecks } from '../../utils/api';
import Deck from './Deck';

const DeckLists = () => {
  const [lists, setLists] = useState([]);

  // useEffect
  useEffect(() => {
    const getDecks = async () => {
      const response = await listDecks();
      setLists(response);
    };
    getDecks();
  }, []);

  // helper functions
  const renderList = () => {
    const mapped = lists.map((list, index) => <Deck key={index} list={list} />);
    return mapped;
  };

  console.log(lists);

  return <div className="DeckLists">{renderList()}</div>;
};

export default DeckLists;
