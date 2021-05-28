import React from 'react';
import { Link } from 'react-router-dom';
import DeckList from './DeckList';

const Home = () => {
  return (
    <div className="Home">
      <Link className="btn btn-secondary mb-2" to="/decks/new">
        <span className="oi oi-plus">&nbsp;</span>Create Deck
      </Link>
      <DeckList />
    </div>
  );
};

export default Home;
