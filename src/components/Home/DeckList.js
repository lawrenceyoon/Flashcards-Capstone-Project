import React, { useEffect, useState } from 'react';
import './DeckList.css';
import { listDecks } from '../../utils/api';
import Deck from './Deck';

const DeckLists = () => {
  // state
  const [list, setList] = useState([]);

  // useEffect
  useEffect(() => {
    const getDecks = async () => {
      const response = await listDecks();
      setList(response);
    };
    getDecks();
  }, []);

  console.log(list);

  // helper functions
  const renderList = () => {
    const mapped = list.map((item, index) => <Deck key={index} list={item} />);
    return mapped;
  };

  return <div className="DeckLists">{renderList()}</div>;
};

export default DeckLists;
