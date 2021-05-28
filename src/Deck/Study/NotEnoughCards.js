import React from 'react';
import { Link } from 'react-router-dom';

const NotEnoughCards = ({ deck, deckId }) => {
  return (
    <div className="Not-enough">
      <h3>Not enough cards.</h3>
      <p>
        You need at least 3 cards to study. There are {deck.cards.length} cards
        in this deck.
      </p>
      <Link to={`/decks/${deckId}/cards/new`}>
        <button className="btn btn-primary" type="button">
          <span className="oi oi-plus">&nbsp;</span>Add Cards
        </button>
      </Link>
    </div>
  );
};

export default NotEnoughCards;
