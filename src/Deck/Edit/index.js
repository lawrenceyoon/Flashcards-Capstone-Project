import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import './EditDeck.css';
import { readDeck, updateDeck } from '../../utils/api';
import Form from '../Form';

const EditDeck = () => {
  // routeMatch, useHistory
  const { params } = useRouteMatch();
  const history = useHistory();

  // state
  const [deck, setDeck] = useState({
    name: '',
    description: '',
  });

  // useEffect (readDeck)
  useEffect(() => {
    const getSpecificDeck = async () => {
      const response = await readDeck(params.deckId);
      setDeck(response);
    };
    getSpecificDeck();
  }, [params.deckId]);

  // event handlers
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await updateDeck(deck);
    history.push(`/decks/${params.deckId}`);
  };

  const handleCancelClick = () => {
    history.goBack();
  };

  return (
    <div className="EditDeck">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home">&nbsp;</span>Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${params.deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h2>Edit Deck</h2>
      <Form
        deck={deck}
        setDeck={setDeck}
        handleFormSubmit={handleFormSubmit}
        handleCancelClick={handleCancelClick}
      />
    </div>
  );
};

export default EditDeck;
