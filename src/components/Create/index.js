import React, { useState, useEffect } from 'react'; // added useEffect
import { Link, useHistory } from 'react-router-dom';
import './index.css';
import { createDeck } from '../../utils/api';
import Button from '../Button';

const Create = () => {
  // useHistory
  const history = useHistory();

  // state
  // const [deck, setDeck] = useState({}); // added extra state
  const [deck, setDeck] = useState({
    name: '',
    description: '',
  });

  // event handlers
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const savedDeck = await createDeck(deck);
    console.log(savedDeck);
    history.push(`/decks/${savedDeck.id}`);
  };

  const handleChange = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
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
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            name="name"
            onChange={handleChange}
            value={deck.name}
            placeholder="Deck Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="form-control"
            name="description"
            onChange={handleChange}
            value={deck.description}
            placeholder="Brief description of the deck"
            required
          ></textarea>
        </div>
        <Link to="/">
          <Button color="btn-secondary" text="Cancel" />
        </Link>
        <Button color="btn-primary" text="Submit" />
      </form>
    </div>
  );
};

export default Create;
