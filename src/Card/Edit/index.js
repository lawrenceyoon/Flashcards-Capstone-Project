import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { readDeck, updateCard } from '../../utils/api';
import Form from '../Form';

const EditCard = () => {
  // useRouteMatch, useHistory
  const { params } = useRouteMatch();
  const history = useHistory();

  // state
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({
    front: '',
    back: '',
  });

  // useEffect ()
  useEffect(() => {
    const getSpecificDeck = async () => {
      const response = await readDeck(params.deckId);
      setDeck(response);
    };
    getSpecificDeck();
  }, [params.deckId]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('submitted');
    await updateCard(card); // BREAKING. WHY? ALSO NOT SHOWING DEFAULT ON FORMS: FRONT: CARD1, BACK: CARD1
    history.push(`/decks/${params.deckId}`);
  };

  console.log(deck);
  console.log(card);

  return (
    <div className="EditCard">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home">&nbsp;</span>Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${params.deckId}`}>Deck {deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card {params.cardId}
          </li>
        </ol>
      </nav>
      <h3>Edit Card</h3>
      <h4>{deck.name}: Add Card</h4>
      <Form card={card} setCard={setCard} handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default EditCard;
