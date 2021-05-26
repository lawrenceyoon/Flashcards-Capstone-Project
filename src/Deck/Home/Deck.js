import React from 'react';
import { Link } from 'react-router-dom';
import './Deck.css';
import { deleteDeck, listDecks } from '../../utils/api';
import Button from '../../Button';

const Deck = ({ setList, deck }) => {
  // event handlers
  const handleDelete = async () => {
    try {
      const doesConfirm = window.confirm('are you sure you want to delete?');
      if (!doesConfirm) return;
      await deleteDeck(deck.id);
      const newListDecks = await listDecks();
      setList(newListDecks);
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="Deck card">
      <div className="card-body">
        <div className="section">
          <div className="deckname">{deck.name}</div>
          <div className="decklength">{deck.cards.length} cards</div>
        </div>
        <p className="deck-description">{deck.description}</p>
        <div className="buttons">
          <Link to={`/decks/${deck.id}`}>
            <Button color="btn-secondary" icon="oi oi-eye" text="View" />
          </Link>
          <Link to={`/decks/${deck.id}/study`}>
            <Button color="btn-primary" icon="oi oi-book" text="Study" />
          </Link>
          <Button
            deleteClick={handleDelete}
            color="btn-danger"
            icon="oi oi-trash"
          />
        </div>
      </div>
    </div>
  );
};

export default Deck;
