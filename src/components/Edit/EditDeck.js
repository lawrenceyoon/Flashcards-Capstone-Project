import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './EditDeck.css';
import { readDeck } from '../../utils/api';
import Button from '../Button';

const EditDeck = () => {
  // state
  const [deck, setDeck] = useState({
    name: '',
    description: '',
  });

  // routeMatch
  const { params } = useRouteMatch();

  // useEffect (readDeck)
  useEffect(() => {
    const getSpecificDeck = async () => {
      const response = await readDeck(params.deckId);
      setDeck(response);
    };
    getSpecificDeck();
  }, [params.deckId]);

  // event handlers
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
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
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            name="name"
            aria-describedby="name"
            onChange={handleChange}
            value={deck.name}
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
            required
          ></textarea>
        </div>
        <Link to={`/decks/${params.deckId}`}>
          <Button color="btn-secondary" text="Cancel" />
        </Link>
        <Link to={`/decks/${params.deckId}`}>
          <Button color="btn-primary" text="Submit" />
        </Link>
      </form>
    </div>
  );
};

export default EditDeck;
