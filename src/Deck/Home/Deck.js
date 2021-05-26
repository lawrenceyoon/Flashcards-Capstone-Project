import React from 'react';
import { Link } from 'react-router-dom';
import './Deck.css';
import { deleteDeck, listDecks } from '../../utils/api';

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
            <button className="btn btn-secondary mr-2">
              <span className="oi oi-eye">&nbsp;</span>View
            </button>
          </Link>
          <Link to={`/decks/${deck.id}/study`}>
            <button className="btn btn-primary">
              <span className="oi oi-book">&nbsp;</span>Study
            </button>
          </Link>
          <button className="btn btn-danger" onClick={handleDelete}>
            <span className="oi oi-trash"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deck;
