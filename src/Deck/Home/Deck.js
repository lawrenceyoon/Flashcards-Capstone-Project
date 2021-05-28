import React from 'react';
import { Link } from 'react-router-dom';
import './Deck.css';
import { deleteDeck, listDecks } from '../../utils/api';

const Deck = ({ setList, deck }) => {
  // event handlers
  const handleDelete = async () => {
    try {
      const doesConfirm = window.confirm(
        'Delete this deck?\n\nYou will not be able to recover it.'
      );
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
          <Link className="btn btn-secondary mr-2" to={`/decks/${deck.id}`}>
            <span className="oi oi-eye">&nbsp;</span>View
          </Link>
          <Link className="btn btn-primary" to={`/decks/${deck.id}/study`}>
            <span className="oi oi-book">&nbsp;</span>Study
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <span className="oi oi-trash"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deck;
