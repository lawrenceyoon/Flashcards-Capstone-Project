import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { readDeck } from '../../utils/api';

// WORK ON NEXT

const Study = () => {
  // useRouteMatch, useHistory
  const { params } = useRouteMatch();
  const history = useHistory();

  // state
  const [deck, setDeck] = useState([]);
  const [count, setCount] = useState(0);
  const [cardDisplay, setCardDisplay] = useState(true);
  const [firstFlip, setFirstFlip] = useState(false);

  // useEffect (readDeck)
  useEffect(() => {
    const getSpecificDeck = async () => {
      const response = await readDeck(params.deckId);
      setDeck(response);
    };
    getSpecificDeck();
  }, [params.deckId]);

  // event handlers
  const handleFlipClick = () => {
    setCardDisplay(!cardDisplay);
    setFirstFlip(true);
  };

  const handleNextClick = () => {
    if (count + 1 < deck.cards.length) {
      console.log(count);
      setCount(count + 1);
      setCardDisplay(true);
      setFirstFlip(false);
    } else {
      const message = `Restart cards?\n\nClick 'cancel' to return to the home page.`;
      const doesConfirm = window.confirm(message);
      if (!doesConfirm) {
        history.push('/');
      } else {
        setCount(0);
        setCardDisplay(true);
        setFirstFlip(false);
      }
    }
  };

  let cardDescription;
  let frontOrBack;

  if (deck.cards) {
    if (cardDisplay) {
      frontOrBack = 'Front';
      cardDescription = <p>{deck.cards[count].front}</p>;
    } else if (!cardDisplay) {
      frontOrBack = 'Back';
      cardDescription = <p>{deck.cards[count].back}</p>;
    }
  }

  // don't show next button on inital load
  let renderNextButton;
  if (deck.cards) {
    if (firstFlip) {
      renderNextButton = (
        <button className="btn btn-primary" onClick={handleNextClick}>
          Next
        </button>
      );
    } else {
      renderNextButton = null;
    }
  }

  // DISPLAY CARDS IF deck.cards.length >= 3
  let renderContent;
  if (deck.cards) {
    if (deck.cards.length >= 3) {
      renderContent = (
        <div className="card">
          <div className="card-body">
            <h4>
              Card {count + 1} of {deck.cards.length} ({`${frontOrBack} side`})
            </h4>
            {cardDescription}
            <button
              className="btn btn-secondary mr-2"
              onClick={handleFlipClick}
            >
              Flip
            </button>
            {renderNextButton}
          </div>
        </div>
      );
    } else {
      renderContent = (
        <div className="Not-enough">
          <h3>Not enough cards.</h3>
          <p>
            You need at least 3 cards to study. There are {deck.cards.length}{' '}
            cards in this deck.
          </p>
          <Link to={`/decks/${params.deckId}/cards/new`}>
            <button className="btn btn-primary" type="button">
              <span className="oi oi-plus">&nbsp;</span>Add Cards
            </button>
          </Link>
        </div>
      );
    }
  }

  if (deck.cards) {
    return (
      <div className="Study">
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
              Study
            </li>
          </ol>
        </nav>
        <h2>{deck.name}: Study</h2>
        {renderContent}
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default Study;
