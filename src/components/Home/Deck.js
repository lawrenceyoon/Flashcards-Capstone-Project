import React from 'react';
import { Link } from 'react-router-dom';
import './Deck.css';
import { deleteDeck, listDecks } from '../../utils/api';
import Button from '../Button';

const Deck = ({ list, setList, deck }) => {
  /* handleDelete() {
    const doesConfirm = window.confirm("are you sure you want to delete?");
    if (!doesConfirm) return;

    deleteDeck(deck.id)
    .then(() => {
      onClickDelete(deck.id);
    })
    .catch((err) => console.log(err));
  } */
  console.log(list);

  // event handlers
  const handleDelete = async () => {
    try {
      const doesConfirm = window.confirm('are you sure you want to delete?');
      if (!doesConfirm) return;

      // handles back end
      const removeDeck = await deleteDeck(deck.id);
      // const filtered = setList(
      //   list.filter((item) => {
      //     console.log(item.id, idToDelete);
      //     return item.id !== idToDelete;
      //   })
      // );
      const awaited = await listDecks();
      setList(awaited);

      // handles front end
    } catch (err) {
      console.log(err);
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
