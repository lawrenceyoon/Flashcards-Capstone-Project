import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './index.css';
import { createDeck } from '../../utils/api';
import Form from '../Form';

const Create = () => {
  // useHistory
  const history = useHistory();

  // state
  const [deck, setDeck] = useState({
    name: '',
    description: '',
  });

  // event handlers
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const savedDeck = await createDeck(deck);
    history.push(`/decks/${savedDeck.id}`);
  };

  const handleCancelClick = () => {
    history.push('/');
  };

  return (
    <div className="Create">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home">&nbsp;</span>Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h2>Create Deck</h2>
      <Form
        deck={deck}
        setDeck={setDeck}
        handleFormSubmit={handleFormSubmit}
        handleCancelClick={handleCancelClick}
      />
    </div>
  );
};

export default Create;
