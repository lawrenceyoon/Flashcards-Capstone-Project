import React from 'react';
import { Link } from 'react-router-dom';
import DeckList from './DeckList';

const Home = () => {
  return (
    <div className="Home">
      <Link to="/decks/new">
        <button className="btn btn-secondary mb-2">
          <span className="oi oi-plus">&nbsp;</span>Create Deck
        </button>
      </Link>
      <DeckList />
    </div>
  );
};

export default Home;
