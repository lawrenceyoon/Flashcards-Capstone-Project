import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listDecks } from '../../utils/api';
import DeckList from './DeckList';
import Button from '../Button';

const Home = () => {
  // move all effects here, pass state as props where needed to child components
  // state
  const [list, setList] = useState([]);

  // useEffect decks
  useEffect(() => {
    const getDecks = async () => {
      const response = await listDecks();
      setList(response);
    };
    getDecks();
  }, []);

  return (
    <div className="Home">
      <Link to="/decks/new">
        <Button color="btn-secondary" icon="oi oi-plus" text="Create Deck" />
      </Link>
      <DeckList list={list} />
    </div>
  );
};

export default Home;
