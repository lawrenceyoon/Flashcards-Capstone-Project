import React from 'react';
import { Link } from 'react-router-dom';
import './Deck.css';
import Button from '../Button';

const Deck = ({ list }) => {
  return (
    <div className="Deck card">
      <div className="card-body">
        <div className="section">
          <div className="deckname">{list.name}</div>
          <div className="decklength">{list.cards.length} cards</div>
        </div>
        <p className="deck-description">{list.description}</p>
        <div className="buttons">
          <Button color="btn-secondary" icon="oi oi-eye" text="View"></Button>
          <Link to={`/decks/${list.id}/study`}>
            <Button color="btn-primary" icon="oi oi-book" text="Study"></Button>
          </Link>
          <Button color="btn-danger" icon="oi oi-trash"></Button>
        </div>
      </div>
    </div>
  );
};

export default Deck;
