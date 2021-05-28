import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import './index.css';
import { readDeck, deleteDeck } from '../../utils/api';
import CardList from './CardList';

const View = () => {
  // useRouteMatch, useHistory
  const { params, url } = useRouteMatch();
  const history = useHistory();

  // state
  const [deck, setDeck] = useState({});

  // useEffect (readDeck)
  useEffect(() => {
    const getSpecific = async () => {
      const response = await readDeck(params.deckId);
      setDeck(response);
    };
    getSpecific();
  }, [params.deckId]);

  // event handlers
  const handleDelete = async () => {
    try {
      const doesConfirm = window.confirm(
        'Delete this deck?\n\nYou will not be able to recover it.'
      );
      if (!doesConfirm) return;
      await deleteDeck(deck.id);
      history.push('/');
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="View">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home">&nbsp;</span>Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <h4>{deck.name}</h4>
      <p>{deck.description}</p>
      <div className="buttons">
        <Link className="btn btn-secondary mr-2" to={`${url}/edit`}>
          <span className="oi oi-pencil">&nbsp;</span>Edit
        </Link>
        <Link className="btn btn-primary mr-2" to={`${url}/study`}>
          <span className="oi oi-book">&nbsp;</span>Study
        </Link>
        <Link
          className="btn btn-primary"
          to={`/decks/${params.deckId}/cards/new`}
        >
          <span className="oi oi-plus">&nbsp;</span>Add Cards
        </Link>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          <span className="oi oi-trash">&nbsp;</span>
        </button>
      </div>
      <h3>Cards</h3>
      <CardList cards={deck.cards} />
    </div>
  );
};

export default View;
