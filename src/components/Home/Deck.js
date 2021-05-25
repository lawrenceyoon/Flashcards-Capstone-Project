import React from 'react';
import { Link } from 'react-router-dom';
import './Deck.css';
import Button from '../Button';

const Deck = ({ list }) => {
  /* handleDelete() {
    const doesConfirm = window.confirm("are you sure you want to delete?");
    if (!doesConfirm) return;

    deleteDeck(deck.id)
    .then(() => {
      onClickDelete(deck.id);
    })
    .catch((err) => console.log(err));
  } */

  return (
    <div className="Deck card">
      <div className="card-body">
        <div className="section">
          <div className="deckname">{list.name}</div>
          <div className="decklength">{list.cards.length} cards</div>
        </div>
        <p className="deck-description">{list.description}</p>
        <div className="buttons">
          <Link to={`/decks/${list.id}`}>
            <Button color="btn-secondary" icon="oi oi-eye" text="View" />
          </Link>
          <Link to={`/decks/${list.id}/study`}>
            <Button color="btn-primary" icon="oi oi-book" text="Study" />
          </Link>
          <Button color="btn-danger" icon="oi oi-trash" />
        </div>
      </div>
    </div>
  );
};

export default Deck;
