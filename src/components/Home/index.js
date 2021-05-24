import React from 'react';
import { Link } from 'react-router-dom';
import DeckList from './DeckList';
import Button from '../Button';

const Home = () => {
  return (
    <div className="Home">
      <Link to="/decks/new">
        <Button color="btn-secondary" icon="oi oi-plus" text="Create Deck" />
      </Link>
      <DeckList />
    </div>
  );
};

export default Home;
