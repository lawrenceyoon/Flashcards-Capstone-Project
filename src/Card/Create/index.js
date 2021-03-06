import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { readDeck, createCard } from '../../utils/api';
import Form from '../Form';

const CreateCard = () => {
  // useRouteMatch
  const { params, url } = useRouteMatch();

  // state
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({
    front: '',
    back: '',
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
    await createCard(params.deckId, card);
    setCard({
      front: '',
      back: '',
    });
  };

  return (
    <div className="CreateCard">
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
            Add Card
          </li>
        </ol>
      </nav>
      <h4>{deck.name}: Add Card</h4>
      <Form
        card={card}
        setCard={setCard}
        url={url}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default CreateCard;
