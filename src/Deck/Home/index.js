import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import DeckList from './DeckList';
import Button from '../../Button';

const Home = () => {
  return (
    <div className="Home">
      <Link to="/decks/new">
        <Button
          className="deck-create-btn"
          color="btn-secondary"
          icon="oi oi-plus"
          text="Create Deck"
        />
      </Link>
      <DeckList />
    </div>
  );
};

export default Home;
